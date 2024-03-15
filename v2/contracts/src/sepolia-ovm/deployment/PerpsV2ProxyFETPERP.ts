// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'PerpsV2ProxyFETPERP';
export const address = '0x01683A14CC451e46dBDf02050B96735C5FBcf9d3';
export const source = 'ProxyPerpsV2';
export const abi = [
  'constructor(address _owner)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event RouteRemoved(bytes4 route)',
  'event RouteUpdated(bytes4 route, address implementation, bool isView)',
  'event TargetedRouteAdded(address targetedRoute)',
  'event TargetedRouteRemoved(address targetedRoute)',
  'function _emit(bytes callData, uint256 numTopics, bytes32 topic1, bytes32 topic2, bytes32 topic3, bytes32 topic4)',
  'function acceptOwnership()',
  'function addRoute(bytes4 selector, address implementation, bool isView)',
  'function getAllTargets() view returns (address[])',
  'function getRoute(bytes4 selector) view returns (tuple(bytes4 selector, address implementation, bool isView))',
  'function getRoutesLength() view returns (uint256)',
  'function getRoutesPage(uint256 index, uint256 pageSize) view returns (tuple(bytes4 selector, address implementation, bool isView)[])',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function removeRoute(bytes4 selector)',
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

export declare namespace ProxyPerpsV2 {
  export type RouteStruct = {
    selector: PromiseOrValue<BytesLike>;
    implementation: PromiseOrValue<string>;
    isView: PromiseOrValue<boolean>;
  };

  export type RouteStructOutput = [string, string, boolean] & {
    selector: string;
    implementation: string;
    isView: boolean;
  };
}

export interface PerpsV2ProxyFETPERPInterface extends utils.Interface {
  functions: {
    '_emit(bytes,uint256,bytes32,bytes32,bytes32,bytes32)': FunctionFragment;
    'acceptOwnership()': FunctionFragment;
    'addRoute(bytes4,address,bool)': FunctionFragment;
    'getAllTargets()': FunctionFragment;
    'getRoute(bytes4)': FunctionFragment;
    'getRoutesLength()': FunctionFragment;
    'getRoutesPage(uint256,uint256)': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'removeRoute(bytes4)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | '_emit'
      | 'acceptOwnership'
      | 'addRoute'
      | 'getAllTargets'
      | 'getRoute'
      | 'getRoutesLength'
      | 'getRoutesPage'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'removeRoute'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: '_emit',
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'addRoute',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(functionFragment: 'getAllTargets', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getRoute', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: 'getRoutesLength', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getRoutesPage',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'removeRoute', values: [PromiseOrValue<BytesLike>]): string;

  decodeFunctionResult(functionFragment: '_emit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addRoute', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAllTargets', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoute', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoutesLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoutesPage', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeRoute', data: BytesLike): Result;

  events: {
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
    'RouteRemoved(bytes4)': EventFragment;
    'RouteUpdated(bytes4,address,bool)': EventFragment;
    'TargetedRouteAdded(address)': EventFragment;
    'TargetedRouteRemoved(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RouteRemoved'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RouteUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TargetedRouteAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TargetedRouteRemoved'): EventFragment;
}

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

export interface RouteRemovedEventObject {
  route: string;
}
export type RouteRemovedEvent = TypedEvent<[string], RouteRemovedEventObject>;

export type RouteRemovedEventFilter = TypedEventFilter<RouteRemovedEvent>;

export interface RouteUpdatedEventObject {
  route: string;
  implementation: string;
  isView: boolean;
}
export type RouteUpdatedEvent = TypedEvent<[string, string, boolean], RouteUpdatedEventObject>;

export type RouteUpdatedEventFilter = TypedEventFilter<RouteUpdatedEvent>;

export interface TargetedRouteAddedEventObject {
  targetedRoute: string;
}
export type TargetedRouteAddedEvent = TypedEvent<[string], TargetedRouteAddedEventObject>;

export type TargetedRouteAddedEventFilter = TypedEventFilter<TargetedRouteAddedEvent>;

export interface TargetedRouteRemovedEventObject {
  targetedRoute: string;
}
export type TargetedRouteRemovedEvent = TypedEvent<[string], TargetedRouteRemovedEventObject>;

export type TargetedRouteRemovedEventFilter = TypedEventFilter<TargetedRouteRemovedEvent>;

export interface PerpsV2ProxyFETPERP extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PerpsV2ProxyFETPERPInterface;

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
    _emit(
      callData: PromiseOrValue<BytesLike>,
      numTopics: PromiseOrValue<BigNumberish>,
      topic1: PromiseOrValue<BytesLike>,
      topic2: PromiseOrValue<BytesLike>,
      topic3: PromiseOrValue<BytesLike>,
      topic4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addRoute(
      selector: PromiseOrValue<BytesLike>,
      implementation: PromiseOrValue<string>,
      isView: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllTargets(overrides?: CallOverrides): Promise<[string[]]>;

    getRoute(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[ProxyPerpsV2.RouteStructOutput]>;

    getRoutesLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRoutesPage(
      index: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ProxyPerpsV2.RouteStructOutput[]]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeRoute(
      selector: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _emit(
    callData: PromiseOrValue<BytesLike>,
    numTopics: PromiseOrValue<BigNumberish>,
    topic1: PromiseOrValue<BytesLike>,
    topic2: PromiseOrValue<BytesLike>,
    topic3: PromiseOrValue<BytesLike>,
    topic4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addRoute(
    selector: PromiseOrValue<BytesLike>,
    implementation: PromiseOrValue<string>,
    isView: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllTargets(overrides?: CallOverrides): Promise<string[]>;

  getRoute(
    selector: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<ProxyPerpsV2.RouteStructOutput>;

  getRoutesLength(overrides?: CallOverrides): Promise<BigNumber>;

  getRoutesPage(
    index: PromiseOrValue<BigNumberish>,
    pageSize: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ProxyPerpsV2.RouteStructOutput[]>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeRoute(
    selector: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _emit(
      callData: PromiseOrValue<BytesLike>,
      numTopics: PromiseOrValue<BigNumberish>,
      topic1: PromiseOrValue<BytesLike>,
      topic2: PromiseOrValue<BytesLike>,
      topic3: PromiseOrValue<BytesLike>,
      topic4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    addRoute(
      selector: PromiseOrValue<BytesLike>,
      implementation: PromiseOrValue<string>,
      isView: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllTargets(overrides?: CallOverrides): Promise<string[]>;

    getRoute(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<ProxyPerpsV2.RouteStructOutput>;

    getRoutesLength(overrides?: CallOverrides): Promise<BigNumber>;

    getRoutesPage(
      index: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ProxyPerpsV2.RouteStructOutput[]>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeRoute(selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;

    'RouteRemoved(bytes4)'(route?: null): RouteRemovedEventFilter;
    RouteRemoved(route?: null): RouteRemovedEventFilter;

    'RouteUpdated(bytes4,address,bool)'(
      route?: null,
      implementation?: null,
      isView?: null
    ): RouteUpdatedEventFilter;
    RouteUpdated(route?: null, implementation?: null, isView?: null): RouteUpdatedEventFilter;

    'TargetedRouteAdded(address)'(targetedRoute?: null): TargetedRouteAddedEventFilter;
    TargetedRouteAdded(targetedRoute?: null): TargetedRouteAddedEventFilter;

    'TargetedRouteRemoved(address)'(targetedRoute?: null): TargetedRouteRemovedEventFilter;
    TargetedRouteRemoved(targetedRoute?: null): TargetedRouteRemovedEventFilter;
  };

  estimateGas: {
    _emit(
      callData: PromiseOrValue<BytesLike>,
      numTopics: PromiseOrValue<BigNumberish>,
      topic1: PromiseOrValue<BytesLike>,
      topic2: PromiseOrValue<BytesLike>,
      topic3: PromiseOrValue<BytesLike>,
      topic4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    addRoute(
      selector: PromiseOrValue<BytesLike>,
      implementation: PromiseOrValue<string>,
      isView: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllTargets(overrides?: CallOverrides): Promise<BigNumber>;

    getRoute(selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    getRoutesLength(overrides?: CallOverrides): Promise<BigNumber>;

    getRoutesPage(
      index: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeRoute(
      selector: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _emit(
      callData: PromiseOrValue<BytesLike>,
      numTopics: PromiseOrValue<BigNumberish>,
      topic1: PromiseOrValue<BytesLike>,
      topic2: PromiseOrValue<BytesLike>,
      topic3: PromiseOrValue<BytesLike>,
      topic4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addRoute(
      selector: PromiseOrValue<BytesLike>,
      implementation: PromiseOrValue<string>,
      isView: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllTargets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoute(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoutesLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoutesPage(
      index: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeRoute(
      selector: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
