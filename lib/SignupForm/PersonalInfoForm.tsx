import React from "react"
import { Input } from '../Input/Input';

interface FieldProps {
    value: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
}

interface PersonalInfoFormProps {
    firstName: FieldProps;
    lastName: FieldProps;
    birthDate: FieldProps;
}

export function PersonalInfoForm({ firstName, lastName, birthDate }: PersonalInfoFormProps) {
    return (
        <div>
            <div className="flex gap-4">
                <Input field={firstName} label="Nombre" placeholder="Luis" />
                <Input field={lastName} label="Apellidos" placeholder="García" />
            </div>
            <div className="flex flex-col gap-2 mb-5">
                <label className="text-sm font-medium">Género</label>
                <select name="sex" className='flex h-10 rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-blue-400'>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
            </div>
            <Input field={birthDate} label="Fecha de nacimiento" placeholder="DD/MM/AAAA" />
        </div>
    )
}