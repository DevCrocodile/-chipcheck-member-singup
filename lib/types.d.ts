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

export interface Subscription {
    id: string;
    plan: string;
    price: number;
    description: string;
}

export interface RadioFieldProps {
    value: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    options: Subscription[];
}