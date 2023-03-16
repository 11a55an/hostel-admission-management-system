import '../styles/header.css'

function Header() {
    return (
        <header>
            <div id="header">
                <h1>UOG Boys Hostel</h1>
            </div>
            <ul id="menu">
                <li><a href="">Home</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Signup</a></li>
                <li><a href="#skills">Location</a></li>
            </ul>
        </header>
    );
}


export default Header;