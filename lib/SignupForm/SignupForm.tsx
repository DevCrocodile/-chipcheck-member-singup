import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../Card/Card'
import { useField } from '../hooks/useField'
import { Button } from '../Button/Button'
import { useMultistepForm } from '../hooks/useMultiStepForm'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { AccountForm } from './AccountForm'
import { PersonalInfoForm } from './PersonalInfoForm'
import { SubscriptionForm } from './SubscriptionForm'
import '../tailwind.css'


export function SignupForm() {
    const email = useField({ type: 'email' })
    const password = useField({ type: 'password' })
    const confirmPassword = useField({ type: 'password' })
    const firstName = useField({ type: 'text' })
    const lastName = useField({ type: 'text' })
    const birthDate = useField({ type: 'date' })

    const { step, isFisrtStep, back, next, isLastStep, currentStepIndex, steps } = useMultistepForm([
        <AccountForm email={email} password={password} confirmPassword={confirmPassword} />,
        <PersonalInfoForm firstName={firstName} lastName={lastName} birthDate={birthDate} />,
        <SubscriptionForm />
    ])
    return (
        <Card className='min-h-[500px]'>
            <CardHeader>
                <CardTitle>
                    Registro de usuario
                </CardTitle>
                <CardDescription>
                    Ingresa tu informacion
                </CardDescription>
                <ProgressBar
                    currentStep={currentStepIndex + 1}
                    totalSteps={steps.length}
                />
            </CardHeader>
            <CardContent>
                <form action="">
                    {step}

                </form>
            </CardContent>
            <CardFooter>
                {!isFisrtStep ? <Button onClick={back}>Regresar</Button> : <div></div>}
                <Button color='black' onClick={next}>
                    {!isLastStep ? "Siguiente" : "Enviar"}
                </Button>
            </CardFooter>
        </Card>
    )
}