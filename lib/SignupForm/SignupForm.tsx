import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../Card/Card'
import { Input } from '../Input/Input'
import { useField } from '../hooks/useField'
import { Button } from '../Button/Button'
import { useMultistepForm } from '../hooks/useMultiStepForm'
import '../tailwind.css'


export function SignupForm() {
    const email = useField({ type: 'email' })
    const password = useField({ type: 'password' })
    const firstName = useField({ type: 'text' })
    const lastName = useField({ type: 'text' })
    const birthDate = useField({ type: 'date' })
    const { step, isFisrtStep, back, next, isLastStep } = useMultistepForm([
        <div>
            <Input field={email} label='Correo electrónico' placeholder='name@example.com' />
            <Input field={password} label='Contraseña' placeholder='●●●●●●●●' />
        </div>,
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
        </div>,
    ])
    return (
        <Card className='h-[465px]'>
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
                    {step}

                </form>
            </CardContent>
            <CardFooter>
                {!isFisrtStep && <Button onClick={back}>Regresar</Button>}
                <Button color='black' onClick={next}>
                    {!isLastStep ? "Siguiente" : "Enviar"}
                </Button>
            </CardFooter>
        </Card>
    )
}