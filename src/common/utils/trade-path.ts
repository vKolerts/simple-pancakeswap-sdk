import { TradePath } from '../../enums/trade-path';
import { Token } from '../../factories/token/models/token';
import { BNB } from '../tokens/bnb';

export function getTradePath(fromToken: Token, toToken: Token): TradePath {
  const bnbToken = BNB.token();
  if (bnbToken) {
    if (fromToken.contractAddress === bnbToken.contractAddress) {
      return TradePath.ethToErc20;
    }

    if (toToken.contractAddress === bnbToken.contractAddress) {
      return TradePath.erc20ToEth;
    }
  }

  return TradePath.erc20ToErc20;
}
