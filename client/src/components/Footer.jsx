import "../styles/footer.css";
function Footer() {
    return (
        <div id="footer-wrapper">
            <div className="footer">
                <h1>Hostel Management System</h1>
                <div className="social">
                    <button href=""><i className="fa-brands fa-facebook-f"></i></button>
                    <button><i className="fa-brands fa-twitter"></i></button>
                    <button><i className="fa-brands fa-instagram"></i></button>
                </div>
                <p>Copyright © Hassan Tahir, All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;