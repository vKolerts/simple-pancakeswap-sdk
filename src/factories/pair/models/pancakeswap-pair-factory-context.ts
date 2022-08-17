import { EthersProvider } from '../../../ethers-provider';
import { Token } from '../../token/models/token';
import { PancakeswapPairSettings } from './pancakeswap-pair-settings';
import { ContractContext } from '../../../common/contract-context';

export interface PancakeswapPairFactoryContext {
  fromToken: Token;
  toToken: Token;
  ethereumAddress: string;
  settings: PancakeswapPairSettings;
  ethersProvider: EthersProvider;
  contractContext?: ContractContext;
}
