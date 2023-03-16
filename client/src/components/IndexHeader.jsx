import '../styles/indexheader.css'

function IndexHeader() {
    return (
        <div id='iheader-wrapper'>
            <header>
                <div id="iheader">
                    <h1>Hostel Management System</h1>
                </div>
                <ul id="imenu">
                    <li><a href="#about-wrapper">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Signup</a></li>
                </ul>
            </header>
            <div id="welcomeText">
                <h1><strong>Welcome to Hostel Management System</strong></h1>
                <p>
                    <button className="sliderBtn login" href="/login">Login</button>
                    <button className="sliderBtn signup" href="/signup">Signup</button>
                </p>
            </div>
        </div>
    );
}


export default IndexHeader;