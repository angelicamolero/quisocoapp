import Image from "next/image"
import { formatMoney } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

const ProductResume = ({ product }: any) => {
    const { handleEditQuantity, handleRemove }: any = useQuiosco()
    return (
        <div className="shadow p-5 mb-3 flex gap-10 items-center">
            <div className="md:w-1/6">
                <Image
                    width={300}
                    height={400}
                    alt={` Image product ${product.name}`}
                    src={`/assets/img/${product.image}.jpg`} />
            </div>
            <div className="md:w-4/6">
                <p className="text-3xl font-bold">{product.name}</p>
                <p className="text-xl font-bold mt-2">Qty: {product.quantity}</p>
                <p className="text-xl font-bold mt-2 text-amber-500">Price: {formatMoney(product.price)}</p>
                <p className="text-sm text-gray-700 mt-2 ">Subtotal: {formatMoney(product.price * product.quantity)}</p>
            </div>
            <div>
                <button type="button" className="bg-sky-700 px-5 py-2 flex justify-center gap-2 text-white rounded-md font-bold uppercase shadow-md w-full text-center"
                    onClick={() => handleEditQuantity(product.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit
                </button>
                <button type="button" className="bg-red-700 flex px-5 py-2 text-white rounded-md gap-2 font-bold uppercase shadow-md w-full text-center mt-5"
                    onClick={() => handleRemove(product.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove
                </button>
            </div>
        </div>
    )
}
export default ProductResume