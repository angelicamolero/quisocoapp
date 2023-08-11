import Layout from "../layout/Layout"
import useQuiosco from "../hooks/useQuiosco"
import ProductResume from "../components/ProductResume"

export default function Resume() {
    const { order }: any = useQuiosco()
    return (
        <Layout page='Resume'>
            <h1 className="text-4xl font-black">Cart Resume</h1>
            <p className="text-2xl my-10"> Check your order</p>

            {order.length === 0 ? (
                <p className="text-cent text-2xl">No items in the car</p>
            ) : (
                order.map((product: any) => (
                    <ProductResume
                        key={product.id}
                        product={product} />
                ))
            )}
        </Layout>
    )
}