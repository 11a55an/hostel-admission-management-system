import { useNavigate } from 'react-router-dom'
import '../styles/topnav.css'

function TopNav() {
    const navigate = useNavigate()
    const handleClick = async e=>{
        e.preventDefault()
        window.localStorage.removeItem("adminUser")
        window.localStorage.removeItem("isLoggedIn")
        window.localStorage.removeItem("userName")
        navigate("/")
      }
    return (
        <div id='top-wrapper'>
            <div id="topNav">
                <div className='contactInfo'>
					<i className="fa-solid fa-phone"></i>
					<p>+92-303-462-4939</p>
					<p><i className="fa-solid fa-envelope-open"></i><a href="mailto:20021519-083@uog.edu.pk">20021519-083@uog.edu.pk</a></p>
                </div>
                <div className='loginSignup'>
                    <p>
                        <i className="fa-solid fa-right-to-bracket"></i>
                        <a href="/" onClick={handleClick}>Signout</a>
                    </p>
                </div>
            </div>
        </div>
    );
}


export default TopNav;