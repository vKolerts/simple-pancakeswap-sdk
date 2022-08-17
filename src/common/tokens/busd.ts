import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';

type TokensByChain = { [k in ChainId]?: Token }

/**
 * BUSD token context
 */
export class BUSD {
  public static tokensByChain: TokensByChain = {
    [ChainId.BSC]: {
      chainId: ChainId.BSC,
      contractAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      decimals: 18,
      symbol: 'BUSD',
      name: 'Binance USD',
    },
    [ChainId.BSCTest]: {
      chainId: ChainId.BSCTest,
      contractAddress: '0x3e919A1284A374260D99276672D354fDe2a09Cc0',
      decimals: 18,
      symbol: 'BUSD',
      name: 'Binance USD',
    },
  }

  /**
   * Get BUSD token info
   */
  public static token(chainId: ChainId = ChainId.BSC): Token | undefined {
    return this.tokensByChain[chainId];
  }
}
