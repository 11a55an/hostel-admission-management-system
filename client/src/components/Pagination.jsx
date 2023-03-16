import {useLocation } from "react-router-dom";
import '../styles/pagination.css'

function Pagination() {
    const All = () => {
        const location = useLocation();
        return <div>{location.pathname}</div>;
      };
    return (
        <div id='page-wrapper'>
            <div id='page'>
                <h1><All/></h1>
            </div>
        </div>
    );
}


export default Pagination;