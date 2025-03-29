interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

export function ProgressBar({
    currentStep,
    totalSteps,
}: ProgressBarProps) {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className="w-full bg-gray-200 rounded-full h-1 mt-3">
            <div
                className="bg-black h-1 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
