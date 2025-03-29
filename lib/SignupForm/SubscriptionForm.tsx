import { SelectFieldProps } from "../types"
import { Select } from "../Input/Select";

interface SubscriptionFormProps {
    branch: SelectFieldProps;
}

export function SubscriptionForm({ branch }: SubscriptionFormProps) {
    return (
        <div>
            <Select field={branch} label="Sucursal" name="branch" />
            <div className='flex flex-col justify-between gap-2'>
                <div className='flex items-start p-3 border border-slate-200 rounded-md gap-2 hover:border-slate-300'>
                    <input type="radio" name='subscription' className='mt-2' />
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="" className='flex justify-between w-full'>
                            <span>Plan Mensual</span>
                            <span className='text-slate-500'><b className='text-black'>$450</b>/mes</span>
                        </label>
                        <p className='text-sm text-slate-500'>
                            Incluye acceso a todas las instalaciones y clases grupales.
                        </p>
                    </div>
                </div>
                <div className='flex items-start p-3 border border-slate-200 rounded-md gap-2 hover:border-slate-300'>
                    <input type="radio" name='subscription' className='mt-2' />
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="" className='flex justify-between w-full'>
                            <span>Plan Semestral</span>
                            <span className='text-slate-500'><b className='text-black'>$400</b>/mes</span>
                        </label>
                        <p className='text-sm text-slate-500'>
                            Incluye acceso a todas las instalaciones y clases grupales.
                        </p>
                    </div>
                </div>
                <div className='flex items-start p-3 border border-slate-200 rounded-md gap-2 hover:border-slate-300'>
                    <input type="radio" name='subscription' className='mt-2' />
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="" className='flex justify-between w-full'>
                            <span>Plan Anual</span>
                            <span className='text-slate-500'><b className='text-black'>$350</b>/mes</span>
                        </label>
                        <p className='text-sm text-slate-500'>
                            Incluye acceso a todas las instalaciones y clases grupales.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}