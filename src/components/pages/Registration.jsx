const Registration = () => {
    return (
        <form>
           <input type="text" name="name" id="name" placeholder="Name" />
           <input type="email" name="email" id="email" placeholder="Your email" />
           <input type="password" name="password" id="password" placeholder="Your password" />
           <input type="text" name="photoURL" id="photoURL" placeholder="Photo URL" />
        </form>
    );
};

export default Registration;