import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const AllToysCard = ({ allToy }) => {

    const { user } = useContext(AuthContext)

    const { _id, name, photoURL, seller, category, price, quantity } = allToy;

    return (

        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photoURL} alt="photo" />
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{name}</div>
            </td>
            <td>
                <p>{seller}</p>
            </td>
            <td>
                <p>{category}</p>
            </td>
            <td>{price}</td>
            <td>
                <p>{quantity}</p>
            </td>
            <th>

                {
                    user ?
                        <Link>
                            <button className="btn btn-tiny btn-xs">details</button>
                        </Link>
                        :
                        <Link to='/login'>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </Link>
                }

            </th>
        </tr>

    );
};

export default AllToysCard;