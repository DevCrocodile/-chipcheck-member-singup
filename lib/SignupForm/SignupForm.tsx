import React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../Card/Card'
import '../tailwind.css'

interface SignupFormProps {
    children: React.ReactNode
}

export function SignupForm({ children }: SignupFormProps) {
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
                    {children}
                </form>
            </CardContent>
        </Card>
    )
}