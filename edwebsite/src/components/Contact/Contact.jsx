import React from 'react'
import './Contact.css'
import contact from '../../assets/contact.png'
import mail from '../../assets/mail.png'
import loc from '../../assets/loc.png'
const Contact = () => {
      const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4d895548-66ec-48b6-b1a5-a7abd73d6240");

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
    <div className='contact' id='Contact'>
        <div className="contactcolumn">
            <h3>Leave us a message</h3>
            <p>Whether you have questions, feedback, or just want to say hello, feel free to reach out. Our team is here to assist you with any inquiries and ensure your experience is smooth and meaningful. Simply use the contact form below or get in touch via email or phone—we’re always happy to connect!</p>
        <ul>
            <li><img src={mail} alt=''/>Contact :sutman219@gmail.com</li>
            <li><img src={contact} alt=''/>+977 9849614508</li>
            <li><img src={loc} alt=''/>Kupondole Road ,Lalitpur</li>
        </ul>
        </div>
            <div className="contactcolumn">
                <form onSubmit={onSubmit}>
                <label>Name:</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your name' required/>
                <label>Write your description</label>
                <textarea name='message' rows='6' placeholder='Enter your message ' required/>
                <button type='submit' className='btn dark-btn'>Submit</button>
                </form>
                <span></span>
            </div>
    </div>
  )
}

export default Contact