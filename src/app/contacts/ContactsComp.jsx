'use client';
import React, { useState } from 'react';
import YandexComp from '../components/YandexComp';
import GoogleMaps from '../components/GoogleMaps';
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";

export default function ContactsComp() {

  const [formData, setFormData] = useState({
    message: '',
    fullname: '',
    course: '',
    phone: '',
    email: ''
  });

  const courses = ['IELTS', 'CEFR'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mpwaljag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thanks for your request.!');
        setFormData({
          firstName: '',
          lastName: '',
          tel: '',
          age: '',
          gender: '',
          examType: '',
          body: ''
        });
      } else {
        alert('Error submitting form.');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting form.');
    }
  };

  return (
    <>
      <div className="contacts">
        <div className="contacts-blok">
          <div className="contacts-blok__section-1">
            <div className="contacts-blok__section-1__header">
              <h1>Have Any Questions?</h1>
              <div className="contacts-blok__section-1__header__line"></div>
              <p>Have some feedback for us? Fill out the form below to contact our team.</p>
            </div>
            <div className="contacts-blok__section-1-part">
              <div className="contacts-blok__section-1-part-icon">
                <SlLocationPin className='contacts-blok__section-1-part__icon' />
              </div>
              <div className="contacts-blok__section-1-part__container">
                <h3>Our Address</h3>
                <p>Mustaqillik 19</p>
                <p>Bukhara, Uzbekistan</p>
              </div>
            </div>
            <div className="contacts-blok__section-1-part">
              <div className="contacts-blok__section-1-part-icon">
                <BsTelephone className='contacts-blok__section-1-part__icon' />
              </div>
              <div className="contacts-blok__section-1-part__container">
                <h3>Phone Number</h3>
                <p><a href="tel:+998770047766">+998 77 004-77-66</a></p>
              </div>
            </div>
            <div className="contacts-blok__section-1-part">
              <div className="contacts-blok__section-1-part-icon">
                <FaRegClock className='contacts-blok__section-1-part__icon' />
              </div>
              <div className="contacts-blok__section-1-part__container">
                <h3>Hours of Operation</h3>
                <p>Monday - Saturday: 8:00 - 20:00</p>
                <p>Dinner Time: 13:00 - 14:00</p>
              </div>
            </div>
          </div>
          <div className="contacts-blok__section-2">
            <div className="contacts-blok__section-2__header">
              <p className='contacts-blok__section-2__header-p1'>CONTACTS WITH US!</p>
              <h1>Get In Touch</h1>
              <div className='contacts-blok__section-2__header-line'></div>
              <p className='contacts-blok__section-2__header-p2'>Fill in all fields if you want to enroll in courses</p>
            </div>
            <form onSubmit={handleSubmit} className='contacts-form'>
              <div className="contacts-form__section">
                <textarea placeholder='Message' name='message' id='message' required value={formData.message} onChange={handleInputChange}>
                </textarea>
              </div>
              <div className="contacts-form__section">
                <input placeholder='Full Name' name="fullname" required type="text" value={formData.fullname} onChange={handleInputChange} />
                <input placeholder='Your Age' name="age" required type="number" />
              </div>
              <div className="contacts-form__section">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>Select Course Type</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                  ))}
                </select>
                <input placeholder='Phone Number' name="phone" required type="text" value={formData.phone} onChange={handleInputChange} />
              </div>
              <div className="contacts-form__section">
                <input placeholder='Your Email' name="email" required type="text" value={formData.email} onChange={handleInputChange} />
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div >
      <div className="contacts-yandex">
        <YandexComp />
      </div>
      <div className="map">
        <GoogleMaps />
      </div>
    </>
  );
};