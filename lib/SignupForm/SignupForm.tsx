import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../Card/Card'
import { useField } from '../hooks/useField'
import { useSelect } from '../hooks/useSelect'
import { Button } from '../Button/Button'
import { useMultistepForm } from '../hooks/useMultiStepForm'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { AccountForm } from './AccountForm'
import { PersonalInfoForm } from './PersonalInfoForm'
import { SubscriptionForm } from './SubscriptionForm'
import { useRadioGroup } from '../hooks/useRadioGroup'
import '../tailwind.css'


export function SignupForm() {
    const email = useField({ type: 'email' })
    const password = useField({ type: 'password' })
    const confirmPassword = useField({ type: 'password' })
    const firstName = useField({ type: 'text' })
    const lastName = useField({ type: 'text' })
    const sex = useSelect({ options: [{ value: "1", label: "Hombre" }, { value: "2", label: "Mujer" }] })
    const birthDate = useField({ type: 'date' })
    const branch = useSelect({
        options: [
            { value: "1", label: "Sucursal 1" },
            { value: "2", label: "Sucursal 2" }
        ]
    })
    const subscription = useRadioGroup({
        options: [
            { plan: "Plan Mensual", price: 450, description: "Incluye acceso a todas las instalaciones y clases grupales." },
            { plan: "Plan Semestral", price: 400, description: "Incluye acceso a todas las instalaciones y clases grupales." },
            { plan: "Plan Anual", price: 350, description: "Incluye acceso a todas las instalaciones y clases grupales." }
        ]
    })

    const { step, isFisrtStep, back, next, isLastStep, currentStepIndex, steps } = useMultistepForm([
        <AccountForm email={email} password={password} confirmPassword={confirmPassword} />,
        <PersonalInfoForm firstName={firstName} lastName={lastName} birthDate={birthDate} sex={sex} />,
        <SubscriptionForm branch={branch} subscription={subscription} />
    ])

    const handleSubmit = () => {

        if (!isLastStep) return next()
        const formData = {
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
            firstName: firstName.value,
            lastName: lastName.value,
            birthDate: birthDate.value,
            sex: sex.value,
            branch: branch.value,
            subscription: subscription.value,
        }
        console.log(formData)
    }
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
                <form action="" onSubmit={handleSubmit}>
                    {step}
                </form>
            </CardContent>
            <CardFooter>
                {!isFisrtStep ? <Button onClick={back}>Regresar</Button> : <div></div>}
                <Button color='black' onClick={handleSubmit}>
                    {!isLastStep ? "Siguiente" : "Enviar"}
                </Button>
            </CardFooter>
        </Card>
    )
}