import { useState } from 'react';

interface UseSelectProps {
    options: { value: string; label: string }[];
}

export function useSelect({ options }: UseSelectProps) {
    const [value, setValue] = useState<string | undefined>(options[0]?.value);
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value)
    }
    return { value, onChange, options }
}