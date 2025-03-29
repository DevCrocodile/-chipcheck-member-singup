import { SelectFieldProps } from '../types';

interface SelectProps {
    label: string;
    name: string;
    field: SelectFieldProps
}

export function Select({ field, label, name }: SelectProps) {
    return (
        <div className="flex flex-col gap-2 mb-5">
            <label className="text-sm font-medium">{label}</label>
            <select {...field} name={name} className='flex h-10 rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-blue-400'>
                {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}