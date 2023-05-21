import { useLoaderData } from "react-router-dom";
import MyToysCard from "./MyToysCard";
import { useState } from "react";
import useTitle from "../hooks/useTitle";

const MyToys = () => {
    const loadedAllMyToys = useLoaderData()

    useTitle('MyToys')

    const [allMyToys, setAllMyToys] = useState(loadedAllMyToys)

    return (
        <div className="container mx-auto mb-10">
            <h2 className="text-center font-bold py-5 text-3xl">Total Added Toys: {allMyToys.length}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    allMyToys.map((myToy) => <MyToysCard
                        key={myToy._id}
                        myToy={myToy}
                        allMyToys={allMyToys}
                        setAllMyToys={setAllMyToys}
                    ></MyToysCard>)
                }
            </div>

        </div>
    );
};

export default MyToys;