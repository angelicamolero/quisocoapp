import { useRouter } from "next/router"

const steps = [
    { step: 1, name: 'Menu', url: '/' },
    { step: 2, name: 'Resume', url: '/resume' },
    { step: 3, name: 'Personal Information and Total', url: '/totals' }
]

const Steps = () => {
    const router = useRouter()

    const calculateProgress = () => {
        let valor;
        if (router.pathname === '/') {
            valor = 2;
        } else if (router.pathname === '/resume') {
            valor = 50;
        } else {
            valor = 100;
        }
        return valor;
    }

    return (
        <>
            <div className="flex justify-between mb-8">
                {steps.map((step: any) => (
                    <button onClick={() => {
                        router.push(step.url)
                    }} key={step.step} className="text-2xl font-bold">
                        {step.name}
                    </button>
                ))}
            </div>

            <div className="bg-gray-100 mb-10">
                <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10"
                    style={{ width: `${calculateProgress()}%` }}>

                </div>
            </div>
        </>
    )
}
export default Steps