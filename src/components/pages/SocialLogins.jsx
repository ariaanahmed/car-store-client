import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const SocialLogins = () => {

    const { googleSignIn } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn().then((result) => {
            console.log(result.user);
        }).catch((error) => {
            console.log(error.message)
        })
    }


    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">G</button>
            </div>
        </div>
    );
};

export default SocialLogins;