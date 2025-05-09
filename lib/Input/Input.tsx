import { FieldProps } from '../types'
import clsx from 'clsx'

interface InputProps {
    field: FieldProps
    placeholder: string,
    label: string
    errorMessage?: string
}


export function Input({ field, placeholder, errorMessage, label }: InputProps) {
    return (
        <div className="flex flex-col gap-2 mb-4">
            <label className="text-sm font-medium">{label}</label>
            <input {...field} placeholder={placeholder} className="flex h-10 rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-blue-400" />
            <div className={clsx(errorMessage ? "h-3.5" : "h-0", "transition-all duration-200")}>
                {errorMessage && <p className="text-sm text-red-300">{errorMessage}</p>}
            </div>
        </div>
    )
}