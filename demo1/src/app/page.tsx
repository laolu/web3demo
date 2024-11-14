"use client"

import { Navbar } from "@/components/Navbar"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-6 md:py-8">
        <h1 className="text-3xl md:text-4xl font-bold">欢迎使用</h1>
        <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground">
          这是一个支持钱包连接的 Web3 应用程序。
        </p>
      </div>
    </main>
  )
}