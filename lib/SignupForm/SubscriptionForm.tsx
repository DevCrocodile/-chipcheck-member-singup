import { SelectFieldProps, RadioFieldProps } from "../types"
import { Select } from "../Input/Select";
import { RadioGroup } from "../Input/Radio";

interface SubscriptionFormProps {
    branch: SelectFieldProps;
    subscription: RadioFieldProps,
    errors?: {
        branch?: Array<string>;
        subscription?: Array<string>;
    }
}

export function SubscriptionForm({ branch, subscription, errors }: SubscriptionFormProps) {
    return (
        <div>
            <Select field={branch} label="Sucursal" name="branch" errorMessage={errors?.branch && errors.branch[0]} />
            <RadioGroup field={subscription} name="subscription" />
        </div>
    )
}