import '../styles/header.css'

function Header() {
    return (
        <div id='header-wrapper'>
            <div id='header'>
                <div id="header-left">
                    <h1>Hostel Management System</h1>
                </div>
                <ul id="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about-wrapper">About</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}


export default Header;