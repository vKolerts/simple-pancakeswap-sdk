import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';

type TokensByChain = { [k in ChainId]?: Token }

/**
 * DAI token context
 */
export class DAI {
  public static tokensByChain: TokensByChain = {
    [ChainId.BSC]: {
      chainId: ChainId.BSC,
      contractAddress: '0x26a5dfab467d4f58fb266648cae769503cec9580',
      decimals: 18,
      symbol: 'DAI',
      name: 'Dai Stablecoin',
    },
    [ChainId.BSCTest]: {
      chainId: ChainId.BSCTest,
      contractAddress: '0x618549d304828C77dCb590d02e3641b03E6f4176',
      decimals: 18,
      symbol: 'DAI',
      name: 'Dai Stablecoin',
    },
  }

  /**
   * Get DAI token info
   */
  public static token(chainId: ChainId = ChainId.BSC): Token | undefined {
    return this.tokensByChain[chainId];
  }
}
