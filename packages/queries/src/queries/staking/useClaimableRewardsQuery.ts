import { UseQueryOptions, useQuery } from 'react-query';

import { wei } from '@synthetixio/wei';
import { QueryContext } from '../../context';
import { StakingClaimableRewards } from '../../types';

const useClaimableRewards = (
  ctx: QueryContext,
  walletAddress: string | null,
  options?: UseQueryOptions<StakingClaimableRewards>
) => {
  return useQuery<StakingClaimableRewards>(
    ['staking', 'claimableRewards', ctx.networkId, walletAddress],
    async () => {
      const {
        contracts: { FeePool },
      } = ctx.snxjs!;
      const feesAvailable = await FeePool.feesAvailable(walletAddress);
      return {
        tradingRewards: wei(feesAvailable[0]),
        stakingRewards: wei(feesAvailable[1]),
      };
    },
    {
      enabled: ctx.snxjs != null,
      ...options,
    }
  );
};

export default useClaimableRewards;
