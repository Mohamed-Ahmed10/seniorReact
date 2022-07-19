import { Link } from "react-router-dom";
import "../App.scss";
const Nav = () => {
    return (
        <>
            <ul>
                <li>
                    {/* <a href="/sessionOne">Home</a> */}
                    <Link to= "/sessionOne">Home</Link>
                </li>
                <li>
                    {/* <a href="/test">About</a> */}
                    <Link to="/test">About</Link>
                </li>
                <li>
                    <a href="/data">contact</a>
                </li>
                <li>
                    <a href="/bootstrap">test</a>
                </li>
            </ul>
        </>
        
    );
};

export default Nav;


// stateless function components

//sfc