import { useField } from '../hooks/useField'
import { useSelect } from '../hooks/useSelect'
import { useRadioGroup } from '../hooks/useRadioGroup'

export function useForm() {
    const email = useField({ type: 'email' })
    const password = useField({ type: 'password' })
    const confirmPassword = useField({ type: 'password' })
    const firstName = useField({ type: 'text' })
    const lastName = useField({ type: 'text' })
    const sex = useSelect({ options: [{ value: "1", label: "Hombre" }, { value: "2", label: "Mujer" }] })
    const birthDate = useField({ type: 'date' })
    const branch = useSelect({
        options: [
            { value: "2642cc29-4aa2-4bad-be40-b634662563e3", label: "Sucursal 1" },
            { value: "6560b92c-6b12-45a2-9216-4e7189f92502", label: "Sucursal 2" }
        ]
    })
    const subscription = useRadioGroup({
        options: [
            { id: "77543563-08d6-49b6-a3ff-fab2190a08b3", plan: "Plan Mensual", price: 450, description: "Incluye acceso a todas las instalaciones y clases grupales." },
            { id: "23ea4ea9-e3ae-471e-bdec-4f19206dac87", plan: "Plan Semestral", price: 400, description: "Incluye acceso a todas las instalaciones y clases grupales." },
            { id: "0d24be7d-30eb-4733-9aeb-a615d74fc752", plan: "Plan Anual", price: 350, description: "Incluye acceso a todas las instalaciones y clases grupales." }
        ]
    })

    return {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        sex,
        birthDate,
        branch,
        subscription
    }
}