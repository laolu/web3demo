"use client"

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export function ConnectButton() {
  const { address, isConnected } = useAccount()
  const { connect, isPending } = useConnect()
  const { disconnect } = useDisconnect()
  const [error, setError] = useState<string>('')

  const handleConnect = async () => {
    try {
      setError('')
      await connect({
        connector: injected(),
        chainId: 1
      })
    } catch (err) {
      console.error('Connection error:', err)
      setError(err instanceof Error ? err.message : '连接失败')
    }
  }

  if (isConnected && address)
    return (
      <button
        onClick={() => disconnect()}
        className="bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors w-full md:w-auto"
      >
        <span className="hidden md:inline">{address.slice(0, 6)}...{address.slice(-4)}</span>
        <span className="md:hidden">{address.slice(0, 4)}...{address.slice(-4)}</span>
      </button>
    )

  return (
    <div className="flex flex-col items-center md:items-end w-full md:w-auto">
      <button
        onClick={handleConnect}
        disabled={isPending}
        className={cn(
          "bg-primary text-primary-foreground hover:bg-primary/90",
          "inline-flex h-10 items-center justify-center rounded-md px-4 py-2",
          "text-sm font-medium transition-colors w-full md:w-auto",
          "focus-visible:outline-none focus-visible:ring-1",
          "focus-visible:ring-ring disabled:pointer-events-none",
          "disabled:opacity-50"
        )}
      >
        {isPending ? '连接中...' : '连接钱包'}
      </button>
      {error && (
        <span className="mt-2 text-sm text-red-500 text-center md:text-right">
          {error}
        </span>
      )}
    </div>
  )
}