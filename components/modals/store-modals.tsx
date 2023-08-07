"use client"

import * as z from "zod"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/modal"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  name: z.string().min(1),
})

export const StoreModal = () => {
  const storeModal = useStoreModal()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage the products and services"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create store Form
    </Modal>
  )
}
