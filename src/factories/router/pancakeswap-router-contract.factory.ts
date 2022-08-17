import { BigNumberish, BytesLike } from 'ethers';
import { ContractContext as RouterContractContext } from '../../ABI/types/pancakeswap-router';
import { ContractContext } from '../../common/contract-context';
import { EthersProvider } from '../../ethers-provider';

export class PancakeswapRouterContractFactory {
  private _pancakeswapRouterContract = this._ethersProvider.getContract<RouterContractContext>(
    JSON.stringify(this._contractContext.routerAbi),
    this._contractContext.routerAddress
  );

  constructor(
    private _ethersProvider: EthersProvider,
    private _contractContext: ContractContext = ContractContext
  ) { }

  public addLiquidity(
    tokenA: string,
    tokenB: string,
    amountADesired: BigNumberish,
    amountBDesired: BigNumberish,
    amountAMin: BigNumberish,
    amountBMin: BigNumberish,
    to: string,
    deadline: BigNumberish
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'addLiquidity',
      [
        tokenA,
        tokenB,
        amountADesired,
        amountBDesired,
        amountAMin,
        amountBMin,
        to,
        deadline,
      ]
    );
  }

  public addLiquidityETH(
    token: string,
    amountTokenDesired: BigNumberish,
    amountTokenMin: BigNumberish,
    amountETHMin: BigNumberish,
    to: string,
    deadline: BigNumberish
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'addLiquidityETH',
      [token, amountTokenDesired, amountTokenMin, amountETHMin, to, deadline]
    );
  }

  public async factory(): Promise<string> {
    return await this._pancakeswapRouterContract.factory();
  }

  public async getAmountsOut(
    amountIn: BigNumberish,
    path: string[]
  ): Promise<string[]> {
    const amounts = await this._pancakeswapRouterContract.getAmountsOut(
      amountIn,
      path
    );
    return amounts.map((c) => c.toHexString());
  }

  public async quote(
    amountA: BigNumberish,
    reserveA: BigNumberish,
    reserveB: BigNumberish
  ): Promise<string> {
    return (
      await this._pancakeswapRouterContract.quote(amountA, reserveA, reserveB)
    ).toHexString();
  }

  public removeLiquidity(
    tokenA: string,
    tokenB: string,
    liquidity: BigNumberish,
    amountAMin: BigNumberish,
    amountBMin: BigNumberish,
    to: string,
    deadline: BigNumberish
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'removeLiquidity',
      [tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline]
    );
  }

  public removeLiquidityETH(
    token: string,
    liquidity: BigNumberish,
    amountTokenMin: BigNumberish,
    amountETHMin: BigNumberish,
    to: string,
    deadline: BigNumberish
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'removeLiquidity',
      [token, liquidity, amountTokenMin, amountETHMin, to, deadline]
    );
  }

  public removeLiquidityETHSupportingFeeOnTransferTokens(
    token: string,
    liquidity: BigNumberish,
    amountTokenMin: BigNumberish,
    amountETHMin: BigNumberish,
    to: string,
    deadline: BigNumberish
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'removeLiquidityETHSupportingFeeOnTransferTokens',
      [token, liquidity, amountTokenMin, amountETHMin, to, deadline]
    );
  }

  public removeLiquidityETHWithPermit(
    token: string,
    liquidity: BigNumberish,
    amountTokenMin: BigNumberish,
    amountETHMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    approveMax: boolean,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'removeLiquidityETHWithPermit',
      [
        token,
        liquidity,
        amountTokenMin,
        amountETHMin,
        to,
        deadline,
        approveMax,
        v,
        r,
        s,
      ]
    );
  }

  public removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
    token: string,
    liquidity: BigNumberish,
    amountTokenMin: BigNumberish,
    amountETHMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    approveMax: boolean,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
      [
        token,
        liquidity,
        amountTokenMin,
        amountETHMin,
        to,
        deadline,
        approveMax,
        v,
        r,
        s,
      ]
    );
  }

  public removeLiquidityWithPermit(
    tokenA: string,
    tokenB: string,
    liquidity: BigNumberish,
    amountAMin: BigNumberish,
    amountBMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    approveMax: boolean,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'removeLiquidityWithPermit',
      [
        tokenA,
        tokenB,
        liquidity,
        amountAMin,
        amountBMin,
        to,
        deadline,
        approveMax,
        v,
        r,
        s,
      ]
    );
  }

  public swapExactETHForTokens(
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapExactETHForTokens',
      [amountOutMin, path, to, deadline]
    );
  }

  public swapETHForExactTokens(
    amountOut: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapETHForExactTokens',
      [amountOut, path, to, deadline]
    );
  }

  public swapExactETHForTokensSupportingFeeOnTransferTokens(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapExactETHForTokensSupportingFeeOnTransferTokens',
      [amountIn, amountOutMin, path, to, deadline]
    );
  }

  public swapExactTokensForETH(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapExactTokensForETH',
      [amountIn, amountOutMin, path, to, deadline]
    );
  }

  public swapTokensForExactETH(
    amountOut: BigNumberish,
    amountInMax: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapTokensForExactETH',
      [amountOut, amountInMax, path, to, deadline]
    );
  }

  public swapExactTokensForETHSupportingFeeOnTransferTokens(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapExactTokensForETHSupportingFeeOnTransferTokens',
      [amountIn, amountOutMin, path, to, deadline]
    );
  }

  public swapExactTokensForTokens(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapExactTokensForTokens',
      [amountIn, amountOutMin, path, to, deadline]
    );
  }

  public swapTokensForExactTokens(
    amountOut: BigNumberish,
    amountInMax: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapTokensForExactTokens',
      [amountOut, amountInMax, path, to, deadline]
    );
  }

  public swapExactTokensForTokensSupportingFeeOnTransferTokens(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish
  ): string {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapExactTokensForTokensSupportingFeeOnTransferTokens',
      [amountIn, amountOutMin, path, to, deadline]
    );
  }
}
