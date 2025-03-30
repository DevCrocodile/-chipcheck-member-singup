import { useState } from "react"
import type { Subscription } from "../types"

interface UseRadioGroupProps {
    options: Subscription[];
}

export function useRadioGroup({ options }: UseRadioGroupProps) {
    const [value, setValue] = useState<string | undefined>(options[0].id)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return { value, onChange, options }
}