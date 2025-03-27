import React from "react"
import '../tailwind.css'

interface SignupFormProps {
    children: React.ReactNode
}

export function SignupForm({ children }: SignupFormProps) {
    return (
        <form action="" className="bg-white py-2">
            {children}
        </form>
    )
}