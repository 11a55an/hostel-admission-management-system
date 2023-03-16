import "../styles/contact.css";
function Contact() {
    return (
        <div id="contact-wrapper">
            <div id="contact">
				<div className="tab1">
					<i className="fa-solid fa-phone"></i>
					<p>+92-303-462-4939</p>
				</div>
				<div className="tab2">
					<i className="fa-solid fa-location-dot"></i>
					<p>University of Gujrat, Jalalpur Jattan Road, Gujrat</p>
				</div>
				<div className="tab3">
					<i className="fa-solid fa-envelope-open"></i>
					<p>20021519-083@uog.edu.pk</p>
				</div>
			</div>
        </div>
    );
}

export default Contact;