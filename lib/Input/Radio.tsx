import { RadioFieldProps } from "../types"

interface RadioGroupProps {
    field: RadioFieldProps
    name: string
}

export function RadioGroup({ field, name }: RadioGroupProps) {
    return (
        <div className='flex flex-col justify-between gap-2'>
            {field.options.map((option) => (
                <div key={option.plan} className='flex items-start p-3 border border-slate-200 rounded-md gap-2 hover:border-slate-300'>
                    <input type="radio" name={name} value={option.id} checked={field.value === option.id} onChange={field.onChange} className='mt-2' />
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="" className='flex justify-between w-full'>
                            <span>{option.plan}</span>
                            <span className='text-slate-500'><b className='text-black'>${option.price}</b>/mes</span>
                        </label>
                        <p className='text-sm text-slate-500'>
                            {option.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}