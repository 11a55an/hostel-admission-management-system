import TopNav from "./TopNav"
import Header from "./Header"
import Pagination from "./Pagination"
import Footer from "./Footer"
import AdminRejection from "./AdminAdmission"
import RejectApplication from "./RejectApplication"

function AdmissionRejection() {
    return (   
        <div>
        <TopNav/>
        <Header/>
        <Pagination/>
        <RejectApplication/>
        <Footer/>
        </div>
    )
}

export default AdmissionRejection;