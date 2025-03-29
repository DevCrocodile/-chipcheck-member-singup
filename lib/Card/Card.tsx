import React from "react"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"
interface CardProps {
    children: React.ReactNode,
    className?: string
}
export function Card({ children, className }: CardProps) {
    const baseStyles = "rounded-lg border border-slate-500/20 shadow-sm w-[450px] bg-white flex flex-col"
    return (
        <div className={twMerge(clsx(baseStyles, className))}>
            {children}
        </div>
    )
}

interface CardHeaderProps {
    children: React.ReactNode
}
export function CardHeader({ children }: CardHeaderProps) {
    return (
        <header className="flex flex-col space-y-1.5 p-6">
            {children}
        </header>
    )
}

interface CardTitleProps {
    children: React.ReactNode
}
export function CardTitle({ children }: CardTitleProps) {
    return (
        <h2 className="text-2xl font-semibold leading-none tracking-tight">{children}</h2>
    )
}

interface CardDescription {
    children: React.ReactNode
}
export function CardDescription({ children }: CardDescription) {
    return (
        <p className="text-sm text-slate-500/2-">{children}</p>
    )
}

interface CardContentProps {
    children: React.ReactNode
}
export function CardContent({ children }: CardContentProps) {
    return (
        <main className="p-6 pt-0 flex-2">
            {children}
        </main>
    )
}

interface CardFooterProps {
    children: React.ReactNode
}

export function CardFooter({ children }: CardFooterProps) {
    return (
        <footer className="p-6 pt-0 flex justify-between">
            {children}
        </footer>
    )
}