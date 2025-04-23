import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_icon from '../../assets/edusity_assets/mail-icon.png'
import phone_icon from '../../assets/edusity_assets/phone-icon.png'
import location_icon from '../../assets/edusity_assets/location-icon.png'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7f35a02f-57ec-4df9-9655-3fcc748a9ad1");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are 
                important to us as we strive to provide exceptional services to 
                our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" /> contact@edusity.dev</li>
                <li><img src={phone_icon} alt="" />+254 700-000-000</li>
                <li><img src={location_icon} alt="" /> 21st Street, Ngong Lane, Ngong Rd <br />Nairobi, Kenya</li>
            </ul>
        </div>
        <div className="contact-col">
            <form action="" onSubmit={onSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="" placeholder='Enter your name' required/>
                <label htmlFor="">Phone Number</label>
                <input type="tel" name="phone" id="" placeholder='Enter your mobile number' required />
                <label htmlFor="">Your Message</label>
                <textarea name="message" rows={6} placeholder='Type message...' required></textarea>
                <button type='submit' className="btn dark-btn">submit <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>        
    </div>
  )
}

export default Contact