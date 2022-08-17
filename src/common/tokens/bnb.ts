import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';

type TokensByChain = { [k in ChainId]?: Token }

/**
 * BNB token context
 */
export class BNB {
  public static tokensByChain: TokensByChain = {
    [ChainId.BSC]: {
      chainId: ChainId.BSC,
      contractAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      decimals: 18,
      symbol: 'WBNB',
      name: 'Wrapped Binance token',
    },
    [ChainId.BSCTest]: {
      chainId: ChainId.BSCTest,
      contractAddress: '0xAB70Ec86A21c2BC15a93492E59Fa7d646E581EF7',
      decimals: 18,
      symbol: 'WBNB',
      name: 'Wrapped Binance token',
    },
  }

  /**
   * Get BNB token info
   */
  public static token(chainId: ChainId = ChainId.BSC): Token | undefined {
    return this.tokensByChain[chainId];
  }
}
