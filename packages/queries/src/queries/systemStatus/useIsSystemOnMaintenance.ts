import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { QueryContext } from '../../context';

const useIsSystemOnMaintenance = (ctx: QueryContext, options?: UseQueryOptions<boolean>) => {
  return useQuery<boolean>(
    ['systemStatus', 'isOnMaintenance', ctx.networkId],
    async () => {
      if (!ctx.snxjs) return false;

      // const [isSystemUpgrading, isExchangePaused] = (await Promise.all([
      //   ctx.snxjs.contracts.SystemStatus.isSystemUpgrading(),
      //   ctx.snxjs.contracts.DappMaintenance.isPausedSX(),
      // ])) as [boolean, boolean];

      // return isSystemUpgrading || isExchangePaused;
      return false;
    },
    {
      enabled: !!ctx.networkId,
      ...options,
    }
  );
};

export default useIsSystemOnMaintenance;
