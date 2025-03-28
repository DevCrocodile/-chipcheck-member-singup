import React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../Card/Card'
import { Input } from '../Input/Input'
import { useField } from '../hooks/useField'

import '../tailwind.css'

interface SignupFormProps {
    children: React.ReactNode
}

export function SignupForm({ children }: SignupFormProps) {
    const firstName = useField({ type: 'text' })
    const lastName = useField({ type: 'text' })
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Registro de usuario
                </CardTitle>
                <CardDescription>
                    Ingresa tu informacion
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form action="">
                    <div className="flex gap-4">
                        <Input field={firstName} label="Nombre" placeholder="Luis" />
                        <Input field={lastName} label="Apellidos" placeholder="García" />
                    </div>
                    {children}
                </form>
            </CardContent>
        </Card>
    )
}