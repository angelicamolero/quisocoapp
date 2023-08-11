import Layout from "../layout/Layout";

export default function Totals() {
    return (
        <Layout page='Total'>
            <h1 className="text-4xl font-black">Total</h1>
            <p className="text-2xl my-10"> Confirm your order</p>

            <form action="">
                <div>
                    <label htmlFor="name" className="block uppercase text-slate-800 font-bold text-xl">Name</label>
                    <input id="name" type="text" className="bg-gray-200 w-full mt-3 lg:w-1/3 p-2" />
                </div>
                <div className="met-10">
                    <p className="text-2xl">Total: { } <span className="font-bolf"></span></p>
                </div>
                <div className="mt-5">
                    <input type="text" className="bg-indigo-600 w-full lg:w-auto px-5 py-2 rounded uppercase text-center font-bold text-white"
                        value='Confirm Order' />
                </div>
            </form>
        </Layout>
    )
}