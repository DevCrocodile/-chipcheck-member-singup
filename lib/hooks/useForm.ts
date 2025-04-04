import { useField } from '../hooks/useField'
import { useSelect } from '../hooks/useSelect'
import { useRadioGroup } from '../hooks/useRadioGroup'
import { useFetchBranches } from './useFetchBranches'
import { useFetchSubscriptions } from './useFetchSubscriptions'

export function useForm({ businessId }:{ businessId:string }) {
    const email = useField({ type: 'email' })
    const password = useField({ type: 'password' })
    const confirmPassword = useField({ type: 'password' })
    const firstName = useField({ type: 'text' })
    const lastName = useField({ type: 'text' })
    const sex = useSelect({ options: [{ value: "1", label: "Hombre" }, { value: "2", label: "Mujer" }], defaultValue: "1" })
    const birthDate = useField({ type: 'date' })

    const { branches, loadingBranches } = useFetchBranches({ businessId })
    const branch = useSelect({
        options: loadingBranches
            ? []
            : branches.map(({ id, address }) => ({ value: id, label: address })),
        defaultValue: loadingBranches ? undefined : branches[0].id
    })

    const { subscriptions, loadingSubscriptions } = useFetchSubscriptions({businessId})
    const subscription = useRadioGroup({
        options: loadingSubscriptions
            ? []
            : subscriptions.map(({ id, name, description, price }) => ({ id, value: id, name, description, price:price/100 })),

        defaultValue: loadingSubscriptions ? undefined : subscriptions[0].id
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