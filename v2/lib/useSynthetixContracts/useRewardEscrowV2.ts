import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ethers } from 'ethers';
import { Provider } from '@ethersproject/providers';
import { isSupportedNetworkId, NetworkNameById, NetworkIdByName } from './common';
import { ContractContext } from '@snx-v2/ContractContext';

import type { RewardEscrowV2 } from '../../contracts/build/mainnet/deployment/RewardEscrowV2';
import type { RewardEscrowV2 as RewardEscrowV2Ovm } from '../../contracts/build/mainnet-ovm/deployment/RewardEscrowV2';
import type { RewardEscrowV2 as RewardEscrowHarmony } from '../../contracts/src/harmony/deployment/RewardEscrowV2';
import { SignerContext } from '@snx-v2/SignerContext';
import { useGlobalProvidersWithFallback } from '../../lib/useGlobalProvidersWithFallback';

const contracts = {
  mainnet: () => import('../../contracts/build/mainnet-ovm/deployment/RewardEscrowV2'),
  'mainnet-ovm': () => import('../../contracts/build/mainnet-ovm/deployment/RewardEscrowV2'),
  'harmony': () => import('../../contracts/src/harmony/deployment/RewardEscrowV2'),
};

export const getRewardEscrowV2 = async ({
  networkId,
  signer,
  provider,
}: {
  networkId: number;
  signer: ethers.Signer | null;
  provider: Provider;
}) => {
  const signerOrProvider = signer || provider;

  const supportedNetworkId = isSupportedNetworkId(networkId);
  if (!supportedNetworkId) {
    throw Error(`${networkId} is not supported`);
  }
  const networkName = NetworkNameById[networkId];
  const { address, abi } = await contracts[networkName]();
  const contract = new ethers.Contract(address, abi, signerOrProvider) as
    | RewardEscrowV2
    | RewardEscrowV2Ovm
    | RewardEscrowHarmony;
  return contract;
};
export const useRewardEscrowV2 = () => {
  const { networkId, walletAddress } = useContext(ContractContext);
  const signer = useContext(SignerContext);
  const { globalProviders } = useGlobalProvidersWithFallback();
  return useQuery(
    // We add walletAddress as a query key to make sure the signer is up to date, we cant use signer directly since it cant be stringified
    {
      queryKey: ['useRewardEscrowV2', { networkId, walletAddress }],
      queryFn: async () => {
        if (!networkId) throw Error('Network id required');

        const globalProvider =
          networkId === NetworkIdByName.harmony
            ? globalProviders.mainnet
            : globalProviders.optimism;
        const provider = signer?.provider || globalProvider;

        return getRewardEscrowV2({ networkId, signer, provider });
      },
      staleTime: Infinity,
      enabled: Boolean(networkId),
    }
  );
};
