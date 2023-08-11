import { useState, useEffect, createContext } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const QuioscoContext = createContext({})

const QuioscoProvider = (props: any) => {
    const { children } = props
    const [categories, setCategories] = useState([])
    const [actualCategory, setActualCategory] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])
    const router = useRouter()


    const getCategories = async () => {
        const { data } = await axios('/api/categories')
        setCategories(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        setActualCategory(categories[0])
    }, [categories])

    const handleClickCategory = (id: number) => {
        const category = categories.filter(cat => cat.id === id)
        setActualCategory(category[0]);
        router.push('/')
    }

    const handleSetProduct = (product: {}) => {
        setProduct(product)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAddToCart = ({ categoryId, ...product }) => {
        if (order.some(productState => productState.id === product.id)) {
            //update quantity
            const updateOrder = order.map(productState => productState.id === product.id ? product : productState)
            setOrder(updateOrder)
            toast.success('Order has been updated')
        } else {
            setOrder([...order, product])
            toast.success('Added to order')
        }
        setModal(false)
    }

    const handleEditQuantity = (id: number) => {
        const productUpdate = order.filter((product: any) => product.id === id)
        setProduct(productUpdate[0])
        setModal(!modal)
    }

    const handleRemove = (id: number) => {
        const orderUpdate = order.filter((product: any) => product.id !== id)
        setOrder(orderUpdate)
    }

    return (
        <QuioscoContext.Provider
            value={{
                categories,
                actualCategory,
                handleClickCategory,
                product,
                handleSetProduct,
                modal,
                handleChangeModal,
                handleAddToCart,
                order,
                handleEditQuantity,
                handleRemove
            }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext