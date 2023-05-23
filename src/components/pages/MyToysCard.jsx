import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysCard = ({ myToy, allMyToys, setAllMyToys }) => {
    const { _id, name, photoURL, email, seller, rating, price, quantity } = myToy;

    const handleDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-side-lovat.vercel.app/addatoy/${_id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const reamaining = allMyToys.filter((toy) => toy._id !== _id);
                            setAllMyToys(reamaining)

                        }
                    })


            }
        })
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl border">
            <figure className="px-10 pt-10">
                <img src={photoURL} alt={photoURL} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Email: {email}</p>
                <p>Price $: {price}</p>
                <p>Seller: {seller}</p>
                <p>rating: {rating}</p>
                <p>Quantity: {quantity}</p>
                <div className="card-actions">

                    <Link to={`/updateatoy/${_id}`}>
                        <button className="btn btn-primary">Update</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyToysCard;