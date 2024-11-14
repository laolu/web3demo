import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, sepolia } from 'wagmi/chains'
import { http } from 'viem'

const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID' // 从 WalletConnect Cloud 获取

export const chains = [mainnet, sepolia] as const

export const wagmiConfig = getDefaultConfig({
  appName: 'myDemo',
  projectId: "c44f30cb5ee4cbbfbe3990f58eb3acfc",
  chains,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
}) 