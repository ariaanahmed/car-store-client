import useTitle from "../hooks/useTitle";

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            {/* quetion 1 */}
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <p>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                </div>
                <div className="collapse-content">
                    <p>
                        <span className="font-bold">Access token</span>: An access token is a credential that grants access to a user to use the protected resources.
                        <br />
                        <span className="font-bold">Refresh token</span>: Refresh token is a token used to give access to access tokens without reauthentication.</p>
                    <span className="font-bold">How do they work</span>: When user give the credential to the server the server gives a access token to user. these access token has a time accessibility. so when the access token got expired the that time refresh token is use to create a new access token to authenticate the user if access token and refresh token both are expired then the user need to give their crediential once more.
                    <br />
                    <span className="font-bold">Where should we store them on the client-side</span>: Access tokens and refresh tokens should be stored securely on the client-side. Common storage options include encrypted HTTP-only cookies, localStoreage etc.
                </div>
            </div>
            {/* quetion 2 */}
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <p>2. Compare SQL and NoSQL databases?</p>
                </div>
                <div className="collapse-content">
                    <p>
                        <span className="font-bold">SQL</span>: This databases are structured, use predefined schemas, and are good for complex queries.
                        <br />
                        <span className="font-bold">NoSQL</span>: databases are unstructured, have flexible schemas, scale horizontally, and are suitable for handling large amounts of data and frequent read/write operations.
                    </p>
                </div>
            </div>
            {/* question 3 */}
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <p>3. What is express js? and What is Nest JS?</p>
                </div>
                <div className="collapse-content">
                    <p>
                        <span className="font-bold">ExpressJS</span>: Express.js is a minimalistic web application framework for Node.js, providing a set of features for building web applications and APIs.
                        <br />
                        <span className="font-bold">NestJS</span>: Nest.js is a progressive TypeScript-based framework built on top of Express.js, offering a modular and scalable architecture for building server-side applications.
                    </p>
                </div>
            </div>
            {/* question 4 */}
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <p>4. What is MongoDB aggregate and how does it work?</p>
                </div>
                <div className="collapse-content">
                    <p>
                        <span className="font-bold">MongoDB aggregate</span>:
                        MongoDB aggregate is a framework used for data aggregation operations. It enables to perform complex transformations and computations on data.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;