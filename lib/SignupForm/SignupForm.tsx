import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../Card/Card'
import { useForm } from '../hooks/useForm'
import { Button } from '../Button/Button'
import { useMultistepForm } from '../hooks/useMultistepForm'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { AccountForm } from './AccountForm'
import { PersonalInfoForm } from './PersonalInfoForm'
import { SubscriptionForm } from './SubscriptionForm'
import { validateAccount, validatePersonalInfo, validateSubscriptionFields, FormErrors, validateSignup } from '@chipcheck/types'
import { useState } from 'react'
import '../tailwind.css'


export function SignupForm({ businessId }: { businessId: string }) {
    const validations = [
        validateAccount,
        validatePersonalInfo,
        validateSubscriptionFields
    ]
    const [formErrors, setFormErrors] = useState<Partial<FormErrors>>({})

    const { email, password, confirmPassword, firstName, lastName, birthDate, sex, branch, subscription } = useForm({ businessId })

    const { step, isFisrtStep, back, next, isLastStep, currentStepIndex, steps } = useMultistepForm([
        <AccountForm email={email} password={password} confirmPassword={confirmPassword} errors={formErrors} />,
        <PersonalInfoForm firstName={firstName} lastName={lastName} birthDate={birthDate} sex={sex} errors={formErrors} />,
        <SubscriptionForm branch={branch} subscription={subscription} errors={formErrors} />
    ])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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
        const result = validations[currentStepIndex](formData)
        if (!result.success) {
            setFormErrors(result.error.flatten().fieldErrors)
            return
        }

        if (!isLastStep) {
            setFormErrors({})
            return next()
        }

        const finalResult = validateSignup(formData)
        if (!finalResult.success) {
            setFormErrors(finalResult.error.flatten().fieldErrors)
            return
        }
        console.log("Formulario enviado", formData)
        alert("Formulario enviado")
    }
    return (
        <Card className='min-h-[500px]'>
            <CardHeader>
                <CardTitle>
                    Crear una cuenta
                </CardTitle>
                <CardDescription>
                    Ingresa tu informacion
                </CardDescription>
                <ProgressBar
                    currentStep={currentStepIndex + 1}
                    totalSteps={steps.length}
                />
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent>
                    {step}
                </CardContent>
                <CardFooter>
                    {!isFisrtStep ? <Button onClick={back}>Regresar</Button> : <div></div>}
                    <Button color='black' type='submit'>
                        {!isLastStep ? "Siguiente" : "Enviar"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}