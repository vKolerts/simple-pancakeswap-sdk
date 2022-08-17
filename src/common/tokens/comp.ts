import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';

type TokensByChain = { [k in ChainId]?: Token }

/**
 * COMP token context
 */
export class COMP {
  public static tokensByChain: TokensByChain = {
    [ChainId.BSC]: {
      chainId: ChainId.BSC,
      contractAddress: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
      decimals: 18,
      symbol: 'COMP',
      name: 'Compound',
    },
  }

  /**
   * Get COMP token info
   */
  public static token(chainId: ChainId = ChainId.BSC): Token | undefined {
    return this.tokensByChain[chainId];
  }
}
