import React, { useState } from "react"
import emailjs from '@emailjs/browser';
import "./Contact.css"
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }
  const HandleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_dvd9m18', 'template_ezgrw2w', Form.current, '3iG6lru6WjDmgyjgD')
      .then((result) => {
        alert("Thank you for Messaging I will reply you soon.");
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>

            <h2>Contact Me</h2>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>

                </div>
                <div className='details'>
                  <h4>Get in touch</h4>
                  <br />
                  <p>Sailesh Adhikari</p>
                  <p>I am available for freelance work. Connect with me via email.</p> <br />
                  <p>Phone: 9818575674</p>
                  <p>Email: saileshadhikari72@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>

                    <button className="btn_shadow">
                      <a href="https://twitter.com/saileshadh1"><i class="fa fa-twitter"></i></a>
                    </button>
                    <button className="btn_shadow">
                      <a href="https://github.com/saileshadh">
                        <i class="fa fa-github"></i></a>
                    </button>
                    <button className="btn_shadow"><a href="https://www.linkedin.com/in/sailesh-adhikari-10186a237/">
                      <i class="fa fa-linkedin"></i></a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <Form ref={Form} onSubmit={HandleSubmit}>

                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>

                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </Form>

            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Contact;
