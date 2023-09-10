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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace BrowniePoints {
  export type BrownieStruct = {
    header: PromiseOrValue<string>;
    keyword: PromiseOrValue<string>;
    x: PromiseOrValue<BigNumberish>;
    y: PromiseOrValue<BigNumberish>;
    intent: PromiseOrValue<BytesLike>;
  };

  export type BrownieStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    string
  ] & {
    header: string;
    keyword: string;
    x: BigNumber;
    y: BigNumber;
    intent: string;
  };
}

export interface BrowniePointsInterface extends utils.Interface {
  functions: {
    "createBrownies((string,string,uint256,uint256,bytes)[],string,uint256)": FunctionFragment;
    "createOrganisation(string,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createBrownies" | "createOrganisation"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createBrownies",
    values: [
      BrowniePoints.BrownieStruct[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createOrganisation",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createBrownies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createOrganisation",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BrowniePoints extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BrowniePointsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createBrownies(
      brownies: BrowniePoints.BrownieStruct[],
      uri: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createOrganisation(
      _uri: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createBrownies(
    brownies: BrowniePoints.BrownieStruct[],
    uri: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createOrganisation(
    _uri: PromiseOrValue<string>,
    _id: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createBrownies(
      brownies: BrowniePoints.BrownieStruct[],
      uri: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createOrganisation(
      _uri: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    createBrownies(
      brownies: BrowniePoints.BrownieStruct[],
      uri: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createOrganisation(
      _uri: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createBrownies(
      brownies: BrowniePoints.BrownieStruct[],
      uri: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createOrganisation(
      _uri: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
