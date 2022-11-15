/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  RewardDistributor,
  RewardDistributorInterface,
} from "../../../contracts/RewardDistributor.sol/RewardDistributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "rewardManager",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "poolId",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "collateralType",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "distributeRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "collateralType",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "payout",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610383806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806306fdde03146100465780631189f7541461008e578063d221e7f2146100a3575b600080fd5b604080518082018252601181527f5265776172644469737472696275746f720000000000000000000000000000006020820152905161008591906101f4565b60405180910390f35b6100a161009c366004610292565b6100c6565b005b6100b66100b13660046102f1565b610163565b6040519015158152602001610085565b60405163186a81ed60e11b81526fffffffffffffffffffffffffffffffff8616600482015273ffffffffffffffffffffffffffffffffffffffff85811660248301526044820185905260648201849052608482018390528716906330d503da9060a401600060405180830381600087803b15801561014357600080fd5b505af1158015610157573d6000803e3d6000fd5b50505050505050505050565b60405163a9059cbb60e01b815273ffffffffffffffffffffffffffffffffffffffff8381166004830152602482018390526000919085169063a9059cbb906044016020604051808303816000875af11580156101c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e7919061034d565b5060019695505050505050565b600060208083528351808285015260005b8181101561022157858101830151858201604001528201610205565b81811115610233576000604083870101525b50601f01601f1916929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461026d57600080fd5b919050565b80356fffffffffffffffffffffffffffffffff8116811461026d57600080fd5b60008060008060008060c087890312156102ab57600080fd5b6102b487610249565b95506102c260208801610272565b94506102d060408801610249565b9350606087013592506080870135915060a087013590509295509295509295565b600080600080600060a0868803121561030957600080fd5b61031286610272565b945061032060208701610272565b935061032e60408701610249565b925061033c60608701610249565b949793965091946080013592915050565b60006020828403121561035f57600080fd5b8151801515811461036f57600080fd5b939250505056fea164736f6c634300080d000a";

type RewardDistributorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RewardDistributorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RewardDistributor__factory extends ContractFactory {
  constructor(...args: RewardDistributorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RewardDistributor> {
    return super.deploy(overrides || {}) as Promise<RewardDistributor>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RewardDistributor {
    return super.attach(address) as RewardDistributor;
  }
  override connect(signer: Signer): RewardDistributor__factory {
    return super.connect(signer) as RewardDistributor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardDistributorInterface {
    return new utils.Interface(_abi) as RewardDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardDistributor {
    return new Contract(address, _abi, signerOrProvider) as RewardDistributor;
  }
}