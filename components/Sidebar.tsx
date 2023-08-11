import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import Category from "./Category";

const Sidebar = () => {

    const { categories }: any = useQuiosco()

    return (
        <>
            <Image
                width={300}
                height={100}
                src="/assets/img/logo.svg"
                alt="logo brand" />

            <nav className="mt-10">
                {categories.map((category: any) => (
                    <Category
                        key={category.id}
                        category={category} />
                ))}
            </nav>
        </>
    )
}
export default Sidebar;