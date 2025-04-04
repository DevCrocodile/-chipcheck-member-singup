import { useState, useEffect } from "react"

interface UseRadioGroupProps {
    options: {
        id: string;
        name: string;
        price: number;
        description: string;
    }[];
    defaultValue?: string;
}

export function useRadioGroup({ options, defaultValue }: UseRadioGroupProps) {
    const [value, setValue] = useState<string | undefined>(defaultValue)
    
    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue)
        }
    }, [defaultValue])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return { value, onChange, options, defaultValue }
}