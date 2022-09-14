// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'DelegateApprovalsEternalStorage';
export const address = '0x02f7fB66B55e6ca476d126d96f14c5732Eeb4363';
export const source = 'EternalStorage';
export const abi = [
  'constructor(address _owner, address _associatedContract)',
  'event AssociatedContractUpdated(address associatedContract)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'function acceptOwnership()',
  'function associatedContract() view returns (address)',
  'function deleteAddressValue(bytes32 record)',
  'function deleteBooleanValue(bytes32 record)',
  'function deleteBytes32Value(bytes32 record)',
  'function deleteBytesValue(bytes32 record)',
  'function deleteIntValue(bytes32 record)',
  'function deleteStringValue(bytes32 record)',
  'function deleteUIntValue(bytes32 record)',
  'function getAddressValue(bytes32 record) view returns (address)',
  'function getBooleanValue(bytes32 record) view returns (bool)',
  'function getBytes32Value(bytes32 record) view returns (bytes32)',
  'function getBytesValue(bytes32 record) view returns (bytes)',
  'function getIntValue(bytes32 record) view returns (int256)',
  'function getStringValue(bytes32 record) view returns (string)',
  'function getUIntValue(bytes32 record) view returns (uint256)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function setAddressValue(bytes32 record, address value)',
  'function setAssociatedContract(address _associatedContract)',
  'function setBooleanValue(bytes32 record, bool value)',
  'function setBytes32Value(bytes32 record, bytes32 value)',
  'function setBytesValue(bytes32 record, bytes value)',
  'function setIntValue(bytes32 record, int256 value)',
  'function setStringValue(bytes32 record, string value)',
  'function setUIntValue(bytes32 record, uint256 value)',
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

export interface DelegateApprovalsEternalStorageInterface extends utils.Interface {
  functions: {
    'acceptOwnership()': FunctionFragment;
    'associatedContract()': FunctionFragment;
    'deleteAddressValue(bytes32)': FunctionFragment;
    'deleteBooleanValue(bytes32)': FunctionFragment;
    'deleteBytes32Value(bytes32)': FunctionFragment;
    'deleteBytesValue(bytes32)': FunctionFragment;
    'deleteIntValue(bytes32)': FunctionFragment;
    'deleteStringValue(bytes32)': FunctionFragment;
    'deleteUIntValue(bytes32)': FunctionFragment;
    'getAddressValue(bytes32)': FunctionFragment;
    'getBooleanValue(bytes32)': FunctionFragment;
    'getBytes32Value(bytes32)': FunctionFragment;
    'getBytesValue(bytes32)': FunctionFragment;
    'getIntValue(bytes32)': FunctionFragment;
    'getStringValue(bytes32)': FunctionFragment;
    'getUIntValue(bytes32)': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'setAddressValue(bytes32,address)': FunctionFragment;
    'setAssociatedContract(address)': FunctionFragment;
    'setBooleanValue(bytes32,bool)': FunctionFragment;
    'setBytes32Value(bytes32,bytes32)': FunctionFragment;
    'setBytesValue(bytes32,bytes)': FunctionFragment;
    'setIntValue(bytes32,int256)': FunctionFragment;
    'setStringValue(bytes32,string)': FunctionFragment;
    'setUIntValue(bytes32,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'acceptOwnership'
      | 'associatedContract'
      | 'deleteAddressValue'
      | 'deleteBooleanValue'
      | 'deleteBytes32Value'
      | 'deleteBytesValue'
      | 'deleteIntValue'
      | 'deleteStringValue'
      | 'deleteUIntValue'
      | 'getAddressValue'
      | 'getBooleanValue'
      | 'getBytes32Value'
      | 'getBytesValue'
      | 'getIntValue'
      | 'getStringValue'
      | 'getUIntValue'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'setAddressValue'
      | 'setAssociatedContract'
      | 'setBooleanValue'
      | 'setBytes32Value'
      | 'setBytesValue'
      | 'setIntValue'
      | 'setStringValue'
      | 'setUIntValue'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'associatedContract', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'deleteAddressValue',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'deleteBooleanValue',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'deleteBytes32Value',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'deleteBytesValue',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'deleteIntValue',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'deleteStringValue',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'deleteUIntValue',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAddressValue',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getBooleanValue',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getBytes32Value',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getBytesValue',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'getIntValue', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(
    functionFragment: 'getStringValue',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'getUIntValue', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setAddressValue',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setAssociatedContract',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setBooleanValue',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setBytes32Value',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setBytesValue',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setIntValue',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setStringValue',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setUIntValue',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'associatedContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deleteAddressValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deleteBooleanValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deleteBytes32Value', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deleteBytesValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deleteIntValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deleteStringValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deleteUIntValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAddressValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getBooleanValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getBytes32Value', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getBytesValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getIntValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getStringValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUIntValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAddressValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAssociatedContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setBooleanValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setBytes32Value', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setBytesValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setIntValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setStringValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setUIntValue', data: BytesLike): Result;

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

export interface DelegateApprovalsEternalStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DelegateApprovalsEternalStorageInterface;

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

    associatedContract(overrides?: CallOverrides): Promise<[string]>;

    deleteAddressValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteBooleanValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteBytes32Value(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteBytesValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteIntValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteStringValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteUIntValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAddressValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getBooleanValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getBytes32Value(
      record: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getBytesValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;

    getIntValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;

    getStringValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;

    getUIntValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setAddressValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBooleanValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBytes32Value(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBytesValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setIntValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setStringValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUIntValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  associatedContract(overrides?: CallOverrides): Promise<string>;

  deleteAddressValue(
    record: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteBooleanValue(
    record: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteBytes32Value(
    record: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteBytesValue(
    record: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteIntValue(
    record: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteStringValue(
    record: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteUIntValue(
    record: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAddressValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

  getBooleanValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;

  getBytes32Value(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

  getBytesValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

  getIntValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

  getStringValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

  getUIntValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  setAddressValue(
    record: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAssociatedContract(
    _associatedContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBooleanValue(
    record: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBytes32Value(
    record: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBytesValue(
    record: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setIntValue(
    record: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setStringValue(
    record: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUIntValue(
    record: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    associatedContract(overrides?: CallOverrides): Promise<string>;

    deleteAddressValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;

    deleteBooleanValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;

    deleteBytes32Value(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;

    deleteBytesValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;

    deleteIntValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;

    deleteStringValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;

    deleteUIntValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;

    getAddressValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

    getBooleanValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;

    getBytes32Value(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

    getBytesValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

    getIntValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    getStringValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

    getUIntValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    setAddressValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setBooleanValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setBytes32Value(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setBytesValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setIntValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setStringValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUIntValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
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

    associatedContract(overrides?: CallOverrides): Promise<BigNumber>;

    deleteAddressValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteBooleanValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteBytes32Value(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteBytesValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteIntValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteStringValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteUIntValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAddressValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBooleanValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBytes32Value(
      record: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBytesValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    getIntValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    getStringValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUIntValue(record: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setAddressValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBooleanValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBytes32Value(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBytesValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setIntValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setStringValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUIntValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    associatedContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deleteAddressValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteBooleanValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteBytes32Value(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteBytesValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteIntValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteStringValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteUIntValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAddressValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBooleanValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBytes32Value(
      record: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBytesValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIntValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStringValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUIntValue(
      record: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAddressValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBooleanValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBytes32Value(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBytesValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setIntValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setStringValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUIntValue(
      record: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
