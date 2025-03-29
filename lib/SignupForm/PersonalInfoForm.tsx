import { Input } from '../Input/Input';
import { FieldProps } from "../types";
import { SelectFieldProps } from '../types';
import { Select } from '../Input/Select';

interface PersonalInfoFormProps {
    firstName: FieldProps;
    lastName: FieldProps;
    birthDate: FieldProps;
    sex: SelectFieldProps;
}

export function PersonalInfoForm({ firstName, lastName, birthDate, sex }: PersonalInfoFormProps) {
    return (
        <div>
            <div className="flex gap-4">
                <Input field={firstName} label="Nombre" placeholder="Luis" />
                <Input field={lastName} label="Apellidos" placeholder="García" />
            </div>
            <Select field={sex} label='Género' name='sex' />
            <Input field={birthDate} label="Fecha de nacimiento" placeholder="DD/MM/AAAA" />
        </div>
    )
}