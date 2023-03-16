import "../styles/admindashboard.css"

function AdminDashboard() {
    const userName = window.localStorage.getItem("userName")
    return (   
        <div id="adBoard-container">
            <div id="adBoard">
                <div className="welcomeText">
                    <h1>Welcome {userName}</h1>
                </div>
                <div className="tab1" href="/">
                <i className="fa-solid fa-magnifying-glass"></i>
                    <a href="/admissioncheck">Check Applications</a>
                </div>
                <div className="tab2">
                <i className="fa-solid fa-circle-check"></i>
                    <a href="/admissionapproval">Approve Applications</a>
                </div>
                <div className="tab3">
                <i className="fa-solid fa-circle-xmark"></i>
                    <a href="/admissionrejection">Reject Applications</a>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;