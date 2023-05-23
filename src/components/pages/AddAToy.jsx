import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../provider/AuthProvider';
import useTitle from '../hooks/useTitle';
const AddAToy = () => {

    useTitle('AddAToy')
    const {user} = useContext(AuthContext)

    const hanldeAddAToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const seller = form.seller.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const email = form.user?.email;
        const rating = form.rating.value;

        const addedToy = { name, photoURL, email, seller, rating, category, price, quantity };
        console.log(addedToy)

        fetch('https://assignment-11-server-side-lovat.vercel.app/addatoy', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedToy)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Toy Added!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (

        <form onSubmit={hanldeAddAToy}>
            <div className="text-center mx-auto border w-6/12 px-6 mt-16 rounded-lg mb-16">
                {/* form name and seller row */}
                <div className="md:flex mx-auto mt-10 rounded-lg gap-5">
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="You name" name="name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="Seller" name="seller" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* form sub-category and price row */}
                <div className="md:flex mx-auto mt-10 rounded-lg gap-5">
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="PhotoURL" name="photoURL" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* form sub-category and price row */}
                <div className="md:flex mx-auto mt-10 rounded-lg gap-5">
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="Sub category" name="category" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2">
                        <input type="email" placeholder="Seller email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="md:flex mx-auto mt-10 rounded-lg gap-5">
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered w-full" />
                    </div>
                </div>

                <div>
                    <input type="submit" value="Add a toy" className="btn btn-primary my-10 w-full" />
                </div>
            </div>


        </form>

    );
};

export default AddAToy;