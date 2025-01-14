export const NetworkIdByName = {
  mainnet: 1,
  'mainnet-ovm': 10,
  'harmony': 1666600000,
} as const;

export const NetworkNameById = {
  1: 'mainnet',
  10: 'mainnet-ovm',
  1666600000: 'harmony',
} as const;
export type NetworkId = (typeof NetworkIdByName)[keyof typeof NetworkIdByName];

export function isSupportedNetworkId(id: number | string | null | undefined): id is NetworkId {
  if (!id) return false;
  return id in NetworkNameById;
}
