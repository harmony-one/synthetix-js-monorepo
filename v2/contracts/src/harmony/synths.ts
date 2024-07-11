// !!! DO NOT EDIT !!! Automatically generated file

export const SynthsByName: Partial<
  Record<
    string,
    {
      asset: string;
      category: string;
      sign: string;
      description: string;
      name: string;
      feed?: string;
      subclass?: string;
    }
  >
> = {
  sUSD: {
    asset: 'USD',
    category: 'forex',
    sign: '$',
    description: 'US Dollars',
    name: 'sUSD',
    subclass: 'MultiCollateralSynth',
  },
  sBTC: {
    asset: 'BTC',
    category: 'crypto',
    sign: '₿',
    description: 'Bitcoin',
    feed: '0x0',
    name: 'sBTC',
    subclass: 'MultiCollateralSynth',
  },
  sETH: {
    asset: 'ETH',
    category: 'crypto',
    sign: 'Ξ',
    description: 'Ether',
    feed: '0x0',
    name: 'sETH',
    subclass: 'MultiCollateralSynth',
  },
  sLINK: {
    asset: 'LINK',
    category: 'crypto',
    sign: '',
    description: 'Chainlink',
    feed: '0x0',
    name: 'sLINK',
    subclass: 'MultiCollateralSynth',
  },
  sETHBTC: {
    asset: 'ETHBTC',
    category: 'crypto',
    sign: '',
    description: 'ETHBTC Ratio',
    feed: '0x0',
    name: 'sETHBTC',
    subclass: 'MultiCollateralSynth',
  },
};
