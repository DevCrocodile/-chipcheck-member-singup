import { useState, useEffect } from 'react';

interface UseSelectProps {
    options: { value: string; label: string }[];
    defaultValue?: string;
}

export function useSelect({ options, defaultValue }: UseSelectProps) {
    const [value, setValue] = useState<string | undefined>(defaultValue);

    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
        }
    }, [defaultValue]);

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value)
    }
    return { value, onChange, options }
}