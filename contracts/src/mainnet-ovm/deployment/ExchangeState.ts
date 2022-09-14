// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'ExchangeState';
export const address = '0x7EF87c14f50CFFe2e73d2C87916C3128c56593A8';
export const source = 'ExchangeState';
export const abi = [
  'constructor(address _owner, address _associatedContract)',
  'event AssociatedContractUpdated(address associatedContract)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'function acceptOwnership()',
  'function appendExchangeEntry(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate, uint256 timestamp, uint256 roundIdForSrc, uint256 roundIdForDest)',
  'function associatedContract() view returns (address)',
  'function exchanges(address, bytes32, uint256) view returns (bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate, uint256 timestamp, uint256 roundIdForSrc, uint256 roundIdForDest)',
  'function getEntryAt(address account, bytes32 currencyKey, uint256 index) view returns (bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate, uint256 timestamp, uint256 roundIdForSrc, uint256 roundIdForDest)',
  'function getLengthOfEntries(address account, bytes32 currencyKey) view returns (uint256)',
  'function getMaxTimestamp(address account, bytes32 currencyKey) view returns (uint256)',
  'function maxEntriesInQueue() view returns (uint256)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function removeEntries(address account, bytes32 currencyKey)',
  'function setAssociatedContract(address _associatedContract)',
  'function setMaxEntriesInQueue(uint256 _maxEntriesInQueue)',
];
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common';

export interface ExchangeStateInterface extends utils.Interface {
  functions: {
    'acceptOwnership()': FunctionFragment;
    'appendExchangeEntry(address,bytes32,uint256,bytes32,uint256,uint256,uint256,uint256,uint256)': FunctionFragment;
    'associatedContract()': FunctionFragment;
    'exchanges(address,bytes32,uint256)': FunctionFragment;
    'getEntryAt(address,bytes32,uint256)': FunctionFragment;
    'getLengthOfEntries(address,bytes32)': FunctionFragment;
    'getMaxTimestamp(address,bytes32)': FunctionFragment;
    'maxEntriesInQueue()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'removeEntries(address,bytes32)': FunctionFragment;
    'setAssociatedContract(address)': FunctionFragment;
    'setMaxEntriesInQueue(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'acceptOwnership'
      | 'appendExchangeEntry'
      | 'associatedContract'
      | 'exchanges'
      | 'getEntryAt'
      | 'getLengthOfEntries'
      | 'getMaxTimestamp'
      | 'maxEntriesInQueue'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'removeEntries'
      | 'setAssociatedContract'
      | 'setMaxEntriesInQueue'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'appendExchangeEntry',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: 'associatedContract', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'exchanges',
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getEntryAt',
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getLengthOfEntries',
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getMaxTimestamp',
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'maxEntriesInQueue', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'removeEntries',
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setAssociatedContract',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setMaxEntriesInQueue',
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'appendExchangeEntry', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'associatedContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exchanges', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getEntryAt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getLengthOfEntries', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMaxTimestamp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'maxEntriesInQueue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeEntries', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAssociatedContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMaxEntriesInQueue', data: BytesLike): Result;

  events: {
    'AssociatedContractUpdated(address)': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AssociatedContractUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
}

export interface AssociatedContractUpdatedEventObject {
  associatedContract: string;
}
export type AssociatedContractUpdatedEvent = TypedEvent<
  [string],
  AssociatedContractUpdatedEventObject
>;

export type AssociatedContractUpdatedEventFilter = TypedEventFilter<AssociatedContractUpdatedEvent>;

export interface OwnerChangedEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<[string, string], OwnerChangedEventObject>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface OwnerNominatedEventObject {
  newOwner: string;
}
export type OwnerNominatedEvent = TypedEvent<[string], OwnerNominatedEventObject>;

export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;

export interface ExchangeState extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExchangeStateInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    appendExchangeEntry(
      account: PromiseOrValue<string>,
      src: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      dest: PromiseOrValue<BytesLike>,
      amountReceived: PromiseOrValue<BigNumberish>,
      exchangeFeeRate: PromiseOrValue<BigNumberish>,
      timestamp: PromiseOrValue<BigNumberish>,
      roundIdForSrc: PromiseOrValue<BigNumberish>,
      roundIdForDest: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    associatedContract(overrides?: CallOverrides): Promise<[string]>;

    exchanges(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        src: string;
        amount: BigNumber;
        dest: string;
        amountReceived: BigNumber;
        exchangeFeeRate: BigNumber;
        timestamp: BigNumber;
        roundIdForSrc: BigNumber;
        roundIdForDest: BigNumber;
      }
    >;

    getEntryAt(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        src: string;
        amount: BigNumber;
        dest: string;
        amountReceived: BigNumber;
        exchangeFeeRate: BigNumber;
        timestamp: BigNumber;
        roundIdForSrc: BigNumber;
        roundIdForDest: BigNumber;
      }
    >;

    getLengthOfEntries(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMaxTimestamp(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxEntriesInQueue(overrides?: CallOverrides): Promise<[BigNumber]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeEntries(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxEntriesInQueue(
      _maxEntriesInQueue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  appendExchangeEntry(
    account: PromiseOrValue<string>,
    src: PromiseOrValue<BytesLike>,
    amount: PromiseOrValue<BigNumberish>,
    dest: PromiseOrValue<BytesLike>,
    amountReceived: PromiseOrValue<BigNumberish>,
    exchangeFeeRate: PromiseOrValue<BigNumberish>,
    timestamp: PromiseOrValue<BigNumberish>,
    roundIdForSrc: PromiseOrValue<BigNumberish>,
    roundIdForDest: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  associatedContract(overrides?: CallOverrides): Promise<string>;

  exchanges(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BytesLike>,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      src: string;
      amount: BigNumber;
      dest: string;
      amountReceived: BigNumber;
      exchangeFeeRate: BigNumber;
      timestamp: BigNumber;
      roundIdForSrc: BigNumber;
      roundIdForDest: BigNumber;
    }
  >;

  getEntryAt(
    account: PromiseOrValue<string>,
    currencyKey: PromiseOrValue<BytesLike>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      src: string;
      amount: BigNumber;
      dest: string;
      amountReceived: BigNumber;
      exchangeFeeRate: BigNumber;
      timestamp: BigNumber;
      roundIdForSrc: BigNumber;
      roundIdForDest: BigNumber;
    }
  >;

  getLengthOfEntries(
    account: PromiseOrValue<string>,
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMaxTimestamp(
    account: PromiseOrValue<string>,
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxEntriesInQueue(overrides?: CallOverrides): Promise<BigNumber>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeEntries(
    account: PromiseOrValue<string>,
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAssociatedContract(
    _associatedContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxEntriesInQueue(
    _maxEntriesInQueue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    appendExchangeEntry(
      account: PromiseOrValue<string>,
      src: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      dest: PromiseOrValue<BytesLike>,
      amountReceived: PromiseOrValue<BigNumberish>,
      exchangeFeeRate: PromiseOrValue<BigNumberish>,
      timestamp: PromiseOrValue<BigNumberish>,
      roundIdForSrc: PromiseOrValue<BigNumberish>,
      roundIdForDest: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    associatedContract(overrides?: CallOverrides): Promise<string>;

    exchanges(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        src: string;
        amount: BigNumber;
        dest: string;
        amountReceived: BigNumber;
        exchangeFeeRate: BigNumber;
        timestamp: BigNumber;
        roundIdForSrc: BigNumber;
        roundIdForDest: BigNumber;
      }
    >;

    getEntryAt(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        src: string;
        amount: BigNumber;
        dest: string;
        amountReceived: BigNumber;
        exchangeFeeRate: BigNumber;
        timestamp: BigNumber;
        roundIdForSrc: BigNumber;
        roundIdForDest: BigNumber;
      }
    >;

    getLengthOfEntries(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMaxTimestamp(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxEntriesInQueue(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeEntries(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxEntriesInQueue(
      _maxEntriesInQueue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    'AssociatedContractUpdated(address)'(
      associatedContract?: null
    ): AssociatedContractUpdatedEventFilter;
    AssociatedContractUpdated(associatedContract?: null): AssociatedContractUpdatedEventFilter;

    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
  };

  estimateGas: {
    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    appendExchangeEntry(
      account: PromiseOrValue<string>,
      src: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      dest: PromiseOrValue<BytesLike>,
      amountReceived: PromiseOrValue<BigNumberish>,
      exchangeFeeRate: PromiseOrValue<BigNumberish>,
      timestamp: PromiseOrValue<BigNumberish>,
      roundIdForSrc: PromiseOrValue<BigNumberish>,
      roundIdForDest: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    associatedContract(overrides?: CallOverrides): Promise<BigNumber>;

    exchanges(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEntryAt(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLengthOfEntries(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMaxTimestamp(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxEntriesInQueue(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeEntries(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxEntriesInQueue(
      _maxEntriesInQueue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    appendExchangeEntry(
      account: PromiseOrValue<string>,
      src: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      dest: PromiseOrValue<BytesLike>,
      amountReceived: PromiseOrValue<BigNumberish>,
      exchangeFeeRate: PromiseOrValue<BigNumberish>,
      timestamp: PromiseOrValue<BigNumberish>,
      roundIdForSrc: PromiseOrValue<BigNumberish>,
      roundIdForDest: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    associatedContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exchanges(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEntryAt(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLengthOfEntries(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxTimestamp(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxEntriesInQueue(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeEntries(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxEntriesInQueue(
      _maxEntriesInQueue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
