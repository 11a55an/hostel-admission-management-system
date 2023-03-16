import TopNav from "./TopNav"
import Header from "./Header"
import Pagination from "./Pagination"
import Footer from "./Footer"
import AdmissionStatus from "./AdmissionStatus"
import AdmissionPortal from "./AdmissionPortal"

function Admission() {
    const adminUser = window.localStorage.getItem("adminUser")
    if (adminUser=="true") {
        return (   
            <div>
            <TopNav/>
            <Header/>
            <Pagination/>
            <AdmissionPortal/>
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
            <AdmissionStatus />
            <Footer/>
            </div>
        )
    }
}

export default Admission;