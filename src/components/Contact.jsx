import "../styles/contact.css";
function Contact() {
    return (
        <div id="contact-wrapper">
            <div className="contact">
                <h1>Contact</h1>
                <div className="social">
                <ul>
                    <li>
                        <a href="#"><i class="fa-brands fa-twitter twitter"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa-brands fa-whatsapp whatsapp"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa-brands fa-instagram instagram"></i></a>
                    </li>
                </ul>
                </div>
                <div class="contact1">
		<div class="container-contact1">
			<form class="contact1-form validate-form">
				<div class="wrap-input1 validate-input" data-validate = "Name is required">
					<input class="input1" type="text" name="name" placeholder="Name"/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input class="input1" type="text" name="email" placeholder="Email"/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Subject is required">
					<input class="input1" type="text" name="subject" placeholder="Subject"/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea class="input1" name="message" placeholder="Message"></textarea>
					<span class="shadow-input1"></span>
				</div>

				<div class="container-contact1-form-btn">
					<button class="contact1-form-btn">
						<span>
							Send Email
							<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>
            </div>
        </div>
    );
}

export default Contact;