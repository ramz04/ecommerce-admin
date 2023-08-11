"use client"

import { Heading } from "@/components/ui/Heading"
import { Button } from "@/components/ui/button"
import { Store } from "@prisma/client"
import { Trash } from "lucide-react"

interface SettingsFormProps {
  initialData: Store
}

const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  return (
    <div className="flex items-center justify-between">
      <Heading title="Settings" description="Manage store preferences" />
      <Button variant="destructive" size="icon" onClick={() => {}}>
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default SettingsForm