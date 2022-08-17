import { JsonFragment } from '@ethersproject/abi';

export interface ContractContext {
  routerAddress: string;
  factoryAddress: string;
  pairAddress: string;
  routerAbi: JsonFragment[];
  factoryAbi: JsonFragment[];
  pairAbi: JsonFragment[];
  erc20Abi: JsonFragment[];
}

export class ContractContext {
  /**
   * The pancakeswap router address
   */
  public static routerAddress = '0x10ED43C718714eb63d5aA57B78B54704E256024E';

  /**
   * The pancakeswap factory address
   */
  public static factoryAddress = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73';

  /**
   * The pancakeswap pair address
   */
  public static pairAddress = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73';

  /**
   * PancakeSwap v2 router
   */
  public static routerAbi: JsonFragment[] = require('../ABI/pancakeswap-router-v2.json');

  /**
   * PancakeSwap v2 factory
   */
  public static factoryAbi: JsonFragment[] = require('../ABI/pancakeswap-factory-v2.json');

  /**
   * PancakeSwap v2 pair
   */
  public static pairAbi: JsonFragment[] = require('../ABI/pancakeswap-pair-v2.json');

  /**
   * ERC20 abi
   */
  public static erc20Abi: JsonFragment[] = require('../ABI/erc-20-abi.json');
}
