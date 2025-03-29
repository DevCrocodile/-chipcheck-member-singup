import { SelectFieldProps, RadioFieldProps } from "../types"
import { Select } from "../Input/Select";
import { RadioGroup } from "../Input/Radio";

interface SubscriptionFormProps {
    branch: SelectFieldProps;
    subscription: RadioFieldProps
}

export function SubscriptionForm({ branch, subscription }: SubscriptionFormProps) {
    return (
        <div>
            <Select field={branch} label="Sucursal" name="branch" />
            <RadioGroup field={subscription} name="subscription" />
        </div>
    )
}