import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content mt-auto mx-auto">
            <div>
                <p className="font-bold text-3xl">ToyzStore</p>
                <p>By Toy Bazar<br />Kochukhet, Dhaka, 1000</p>
            </div>
            <div>
                <span className="footer-title">Find us</span>
                <div className="grid grid-flow-col gap-4">
                    <Link to="https://www.facebook.com" target="_blank">facebook</Link>
                    <Link to="https://www.twitter.com" target="_blank">twitter</Link>
                    <Link to="https://www.youtube.com" target="_blank">youtube</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;