import Head from "next/head"
import Sidebar from "../components/Sidebar";
import Modal from 'react-modal'
import Steps from "../components/Steps";
import useQuiosco from "../hooks/useQuiosco";
import { ModalProduct } from "../components/ModalProduct";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#__next');

export default function Layout({ children, page }): any {

    const { modal }: any = useQuiosco()
    return (
        <>
            <Head>
                <title>{`Coffee - ${page}`}</title>
                <meta name="description" content="Stand Coffee Shop" />
            </Head>

            <div className="md:flex">
                <aside className="md:w-4/12 xl:2-1/4 2xl:w-1/5">
                    <Sidebar />
                </aside>

                <main className="md:w-8/12 xl:2-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="p-10 mt-10">
                        <Steps />
                        {children}
                    </div>

                </main>
            </div>

            {modal && (
                <Modal
                    isOpen={modal}
                    style={customStyles}>
                    <ModalProduct />
                </Modal>
            )}
            <ToastContainer />
        </>
    )
}