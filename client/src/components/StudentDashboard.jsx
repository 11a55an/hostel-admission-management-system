import "../styles/studentdashboard.css"

function StudentDashboard() {
    const userName = window.localStorage.getItem("userName")
    return (   
        <div id="stdBoard-container">
            <div id="stdBoard">
                <div className="welcomeText">
                    <h1>Welcome {userName}</h1>
                </div>
                <div className="tab1" href="/">
                <i class="fa-solid fa-right-to-bracket"></i>
                    <a href="/admission">Apply For Admission</a>
                </div>
                <div className="tab2">
                <i className="fa-solid fa-magnifying-glass"></i>
                    <a href="/admissioncheck">Check Admission Status</a>
                </div>
                <div className="tab3">
                <i className="fa-solid fa-user"></i>
                    <a href="/profile">Check Your Profile</a>
                </div>
            </div>
        </div>
    )
}

export default StudentDashboard;