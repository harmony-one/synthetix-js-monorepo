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

export declare namespace ICollateralLoan {
  export type LoanStruct = {
    id: PromiseOrValue<BigNumberish>;
    account: PromiseOrValue<string>;
    collateral: PromiseOrValue<BigNumberish>;
    currency: PromiseOrValue<BytesLike>;
    amount: PromiseOrValue<BigNumberish>;
    short: PromiseOrValue<boolean>;
    accruedInterest: PromiseOrValue<BigNumberish>;
    interestIndex: PromiseOrValue<BigNumberish>;
    lastInteraction: PromiseOrValue<BigNumberish>;
  };

  export type LoanStructOutput = [
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    id: BigNumber;
    account: string;
    collateral: BigNumber;
    currency: string;
    amount: BigNumber;
    short: boolean;
    accruedInterest: BigNumber;
    interestIndex: BigNumber;
    lastInteraction: BigNumber;
  };
}

export interface CollateralStateShortInterface extends utils.Interface {
  functions: {
    'acceptOwnership()': FunctionFragment;
    'associatedContract()': FunctionFragment;
    'createLoan((uint256,address,uint256,bytes32,uint256,bool,uint256,uint256,uint256))': FunctionFragment;
    'getLoan(address,uint256)': FunctionFragment;
    'getNumLoans(address)': FunctionFragment;
    'loans(address,uint256)': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'setAssociatedContract(address)': FunctionFragment;
    'updateLoan((uint256,address,uint256,bytes32,uint256,bool,uint256,uint256,uint256))': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'acceptOwnership'
      | 'associatedContract'
      | 'createLoan'
      | 'getLoan'
      | 'getNumLoans'
      | 'loans'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'setAssociatedContract'
      | 'updateLoan'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'associatedContract', values?: undefined): string;
  encodeFunctionData(functionFragment: 'createLoan', values: [ICollateralLoan.LoanStruct]): string;
  encodeFunctionData(
    functionFragment: 'getLoan',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'getNumLoans', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'loans',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setAssociatedContract',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'updateLoan', values: [ICollateralLoan.LoanStruct]): string;

  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'associatedContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'createLoan', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getLoan', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getNumLoans', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'loans', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAssociatedContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateLoan', data: BytesLike): Result;

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

export interface CollateralStateShort extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CollateralStateShortInterface;

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

    createLoan(
      loan: ICollateralLoan.LoanStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getLoan(
      account: PromiseOrValue<string>,
      loanID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ICollateralLoan.LoanStructOutput]>;

    getNumLoans(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { numLoans: BigNumber }>;

    loans(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        string,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: BigNumber;
        account: string;
        collateral: BigNumber;
        currency: string;
        amount: BigNumber;
        short: boolean;
        accruedInterest: BigNumber;
        interestIndex: BigNumber;
        lastInteraction: BigNumber;
      }
    >;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateLoan(
      loan: ICollateralLoan.LoanStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  associatedContract(overrides?: CallOverrides): Promise<string>;

  createLoan(
    loan: ICollateralLoan.LoanStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getLoan(
    account: PromiseOrValue<string>,
    loanID: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ICollateralLoan.LoanStructOutput>;

  getNumLoans(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  loans(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, string, BigNumber, boolean, BigNumber, BigNumber, BigNumber] & {
      id: BigNumber;
      account: string;
      collateral: BigNumber;
      currency: string;
      amount: BigNumber;
      short: boolean;
      accruedInterest: BigNumber;
      interestIndex: BigNumber;
      lastInteraction: BigNumber;
    }
  >;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  setAssociatedContract(
    _associatedContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateLoan(
    loan: ICollateralLoan.LoanStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    associatedContract(overrides?: CallOverrides): Promise<string>;

    createLoan(loan: ICollateralLoan.LoanStruct, overrides?: CallOverrides): Promise<void>;

    getLoan(
      account: PromiseOrValue<string>,
      loanID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ICollateralLoan.LoanStructOutput>;

    getNumLoans(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    loans(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        string,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: BigNumber;
        account: string;
        collateral: BigNumber;
        currency: string;
        amount: BigNumber;
        short: boolean;
        accruedInterest: BigNumber;
        interestIndex: BigNumber;
        lastInteraction: BigNumber;
      }
    >;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateLoan(loan: ICollateralLoan.LoanStruct, overrides?: CallOverrides): Promise<void>;
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

    createLoan(
      loan: ICollateralLoan.LoanStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getLoan(
      account: PromiseOrValue<string>,
      loanID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumLoans(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    loans(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateLoan(
      loan: ICollateralLoan.LoanStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    associatedContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createLoan(
      loan: ICollateralLoan.LoanStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getLoan(
      account: PromiseOrValue<string>,
      loanID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumLoans(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    loans(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateLoan(
      loan: ICollateralLoan.LoanStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}