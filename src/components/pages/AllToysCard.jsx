import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const AllToysCard = ({ allToy }) => {

    const { user } = useContext(AuthContext)

    const { name, photoURL, seller, category, price, quantity } = allToy;
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <tbody>
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
                                    <button className="btn btn-tiny btn-xs">details</button>
                                    :
                                    <Link to='/login'>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </Link>
                            }

                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllToysCard;