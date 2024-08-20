import { useContext } from 'react';
import { ContractContext } from '@snx-v2/ContractContext';
import { NetworkIdByName, NetworkNameById } from '../../../packages/contracts-interface/src/types';
import type { NetworkId } from '@snx-v2/useSynthetixContracts';

export const getEtherscanBaseUrl = (networkId: number) => {
  const networkName =
    networkId in NetworkNameById ? NetworkNameById[networkId as NetworkId] : undefined;
  if (networkId !== NetworkIdByName.mainnet && networkName) {
    if(networkId === NetworkIdByName.harmony) {
      return 'https://explorer.harmony.one'
    }
    const subDomain = networkName.includes('ovm')
      ? networkName.includes('goerli')
        ? 'goerli-optimism'
        : 'optimistic'
      : networkName;
    return `https://${subDomain}.etherscan.io`;
  }
  return `https://etherscan.io`;
};

export const getTxnLink = (networkId: number, txnId: string | null) => {
  if (!txnId) return null;
  const baseUrl = getEtherscanBaseUrl(networkId);
  return `${baseUrl}/tx/${txnId}`;
};

export const useGetTxnLink = (txnHash: string | null) => {
  const { networkId } = useContext(ContractContext);
  return getTxnLink(networkId as NetworkId, txnHash);
};
