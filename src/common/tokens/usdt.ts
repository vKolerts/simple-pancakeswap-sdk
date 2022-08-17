import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';

type TokensByChain = { [k in ChainId]?: Token }

/**
 * USDT token context
 */
export class USDT {
  public static tokensByChain: TokensByChain = {
    [ChainId.BSC]: {
      chainId: ChainId.BSC,
      contractAddress: '0x55d398326f99059ff775485246999027b3197955',
      decimals: 18,
      symbol: 'USDT',
      name: 'Tether USD',
    },
    [ChainId.BSCTest]: {
      chainId: ChainId.BSCTest,
      contractAddress: '0x1138eBb3101f557b28326a28B6f192c7feCC95f7',
      decimals: 18,
      symbol: 'USDT',
      name: 'Tether USD',
    },
  }

  /**
   * Get USDT token info
   */
  public static token(chainId: ChainId = ChainId.BSC): Token | undefined {
    return this.tokensByChain[chainId];
  }
}
