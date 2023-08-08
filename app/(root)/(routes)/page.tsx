"use client"

import Image from "next/image"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { SignOutButton } from "@clerk/nextjs"
import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal"

export default function Home() {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return <div className="p-4">Root page</div>
}
