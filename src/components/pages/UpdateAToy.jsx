import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";

const UpdateAToy = () => {
    useTitle('UpdateAToy')

    const updateAToy = useLoaderData()

    const { _id, name, photoURL, email, seller, rating, category, price, quantity } = updateAToy;

    const hanldeUpdateAToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const seller = form.seller.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const email = form.email.value;
        const rating = form.rating.value;

        const updatedToy = { name, photoURL, email, seller, rating, category, price, quantity };

        console.log(photoURL)

        fetch(`http://localhost:5000/addatoy/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Toy Updated successfully!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (
        <form onSubmit={hanldeUpdateAToy}>
            <div className="text-center mx-auto border w-6/12 px-6 mt-16 rounded-lg mb-16">
                {/* form name and seller row */}
                <div className="md:flex mx-auto mt-10 rounded-lg gap-5">
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="You name" name="name" defaultValue={name} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="Seller" name="seller" defaultValue={seller} className="input input-bordered w-full" />
                    </div>
                </div>
                {/* form sub-category and price row */}
                <div className="md:flex mx-auto mt-10 rounded-lg gap-5">
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="PhotoURL" name="photoURL" defaultValue={photoURL} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="Price" name="price" defaultValue={price} className="input input-bordered w-full" />
                    </div>
                </div>
                {/* form sub-category and price row */}
                <div className="md:flex mx-auto mt-10 rounded-lg gap-5">
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="Sub category" name="category" defaultValue={category} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2">
                        <input type="email" placeholder="Seller email" name="email" defaultValue={email} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="md:flex mx-auto mt-10 rounded-lg gap-5">
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="Rating" name="rating" defaultValue={rating} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="Quantity" name="quantity" defaultValue={quantity} className="input input-bordered w-full" />
                    </div>
                </div>

                <div>
                    <input type="submit" value="Update a toy" className="btn btn-primary my-10 w-full" />
                </div>
            </div>
        </form>
    );
};

export default UpdateAToy;