import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';

type TokensByChain = { [k in ChainId]?: Token }

/**
 * USDC token context
 */
export class USDC {

  public static tokensByChain: TokensByChain = {
    [ChainId.BSC]: {
      chainId: ChainId.BSC,
      contractAddress: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      decimals: 18,
      symbol: 'USDC',
      name: 'USD Coin',
    },
    [ChainId.BSCTest]: {
      chainId: ChainId.BSCTest,
      contractAddress: '0x4a291477C8901672BCa0E4d2bF391587276A4a37',
      decimals: 18,
      symbol: 'USDC',
      name: 'USD Coin',
    },
  }

  /**
   * Get USDC token info
   */
  public static token(chainId: ChainId = ChainId.BSC): Token | undefined {
    return this.tokensByChain[chainId];
  }
}
