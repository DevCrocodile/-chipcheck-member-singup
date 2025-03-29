export interface FieldProps {
    value: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
}

export interface SelectFieldProps {
    value: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
}