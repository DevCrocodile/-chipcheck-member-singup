import { Input } from '../Input/Input';
import { FieldProps } from "../types";

interface AccountFormProps {
    email: FieldProps;
    password: FieldProps;
    confirmPassword: FieldProps;
    errors?: {
        email?: Array<string>;
        password?: Array<string>;
        confirmPassword?: Array<string>;
    }
}

export function AccountForm({ email, password, confirmPassword, errors }: AccountFormProps) {
    return (
        <div>
            <Input field={email} label='Correo electrónico' placeholder='name@example.com' errorMessage={errors?.email && errors.email[0]} />
            <Input field={password} label='Contraseña' placeholder='•••••••' errorMessage={errors?.password && errors.password[0]} />
            <Input field={confirmPassword} label='Confirmar contraseña' placeholder='•••••••' errorMessage={errors?.confirmPassword && errors.confirmPassword[0]} />
        </div>
    )
}