import { Input } from '../Input/Input';
import { FieldProps } from "../types";
import { SelectFieldProps } from '../types';
import { Select } from '../Input/Select';

interface PersonalInfoFormProps {
    firstName: FieldProps;
    lastName: FieldProps;
    birthDate: FieldProps;
    sex: SelectFieldProps;
    errors?: {
        firstName?: Array<string>;
        lastName?: Array<string>;
        sexId?: Array<string>;
        birthDate?: Array<string>;
    }
}

export function PersonalInfoForm({ firstName, lastName, birthDate, sex, errors }: PersonalInfoFormProps) {
    return (
        <div>
            <div className="flex gap-4">
                <Input field={firstName} label="Nombre" placeholder="Luis" errorMessage={errors?.firstName && errors.firstName[0]} />
                <Input field={lastName} label="Apellidos" placeholder="García" errorMessage={errors?.lastName && errors.lastName[0]} />
            </div>
            <Select field={sex} label='Género' name='sex' errorMessage={errors?.sexId && errors.sexId[0]} />
            <Input field={birthDate} label="Fecha de nacimiento" placeholder="DD/MM/AAAA" errorMessage={errors?.birthDate && errors.birthDate[0]} />
        </div>
    )
}