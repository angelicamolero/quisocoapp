import Image from "next/image"
import { useState, useEffect } from "react"
import useQuiosco from "../hooks/useQuiosco"
import { formatMoney } from "../helpers"
import { idText } from "typescript"

export const ModalProduct = () => {
    const { product, handleChangeModal, handleAddToCart, order }: any = useQuiosco()
    const [quantity, setQuantity] = useState(1)
    const [edit, setEdit] = useState(false)

    //check if actual modal is in the order
    useEffect(() => {
        if (order.some(orderState => orderState.id === product.id)) {
            const productEdition = order.find((orderState) => orderState.id === product.id)
            setEdit(true)
            setQuantity(productEdition.quantity)
        }
    }, [product, order])

    return (
        <div className="md:flex gap-10">
            <div className="md:w-2/3">
                <Image
                    width={300}
                    height={400}
                    alt={`product image ${product.name}`}
                    src={`/assets/img/${product.image}.jpg`} />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button onClick={handleChangeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
                <p className="mt-5 font-bold text-5xl text-amber-500">
                    {formatMoney(product.price)}
                </p>
                <div className="flex gap-4 mt-5">
                    <button
                        type="button"
                        onClick={() => {
                            if (quantity <= 1) return
                            setQuantity(quantity - 1)
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <p className="text-3xl">{quantity}</p>
                    <button
                        type="button"
                        onClick={() => {
                            if (quantity >= 5) return
                            setQuantity(quantity + 1)
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                    onClick={() => handleAddToCart({ ...product, quantity })}>
                    {edit ? 'Save changes' : 'Add to Cart'}
                </button>
            </div>
        </div>
    )
}
