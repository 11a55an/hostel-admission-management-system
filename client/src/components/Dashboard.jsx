import TopNav from "./TopNav"
import Header from "./Header"
import Pagination from "./Pagination"
import Footer from "./Footer"
import StudentDashboard from "./StudentDashboard"
import AdminDashboard from "./AdminDashboard"

function Dashboard() {
    const adminUser = window.localStorage.getItem("adminUser")
    console.log(adminUser)
    if (adminUser=="true") {
        return (   
            <div>
            <TopNav/>
            <Header/>
            <Pagination/>
            <AdminDashboard/>
            <Footer/>
            </div>
        )
    }
    else{
        return (   
            <div>
            <TopNav/>
            <Header/>
            <Pagination/>
            <StudentDashboard />
            <Footer/>
            </div>
        )
    }
}

export default Dashboard;