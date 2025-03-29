import { Input } from '../Input/Input';
import { FieldProps } from "../types";

interface AccountFormProps {
    email: FieldProps;
    password: FieldProps;
    confirmPassword: FieldProps;
}

export function AccountForm({ email, password, confirmPassword }: AccountFormProps) {
    return (
        <div>
            <Input field={email} label='Correo electrónico' placeholder='name@example.com' />
            <Input field={password} label='Contraseña' placeholder='•••••••' />
            <Input field={confirmPassword} label='Confirmar contraseña' placeholder='•••••••' />
        </div>
    )
}