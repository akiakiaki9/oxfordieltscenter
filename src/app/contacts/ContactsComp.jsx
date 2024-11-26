'use client'

import React from 'react';
import axios from 'axios';
import { useState } from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import GoogleMaps from '../components/GoogleMaps';

export default function ContactsComp() {

  const [formData, setFormData] = useState({
    fullname: '',
    age: '',
    course: '',
    phone: '',
    email: '',
    message: ''
  });
  const courses = ['IELTS', 'CEFR'];
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/contacts-form', { ...formData });
      alert('Thank you for contacting us, we will definitely contact you.');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message)
      alert('Error Registration')
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="map">
        <GoogleMaps />
      </div>
      <div className="contacts">
        <div className="contacts-blok">
          <div className="contacts-blok__section-1">
            <div className="contacts-blok__section-1__header">
              <h1>Have Any Questions?</h1>
              <div className="contacts-blok__section-1__header__line"></div>
              <p>Have a inquiry or some feedback for us? Fill out the form below to contact our team.</p>
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
                <p><a href="tel:+998912469665">+998 91 246-96-65</a></p>
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
                <textarea placeholder='Message' name='message' id='message' required value={formData.message} onChange={handleChange}>
                </textarea>
              </div>
              <div className="contacts-form__section">
                <input placeholder='Your Full Name' name="fullname" required type="text" value={formData.fullname} onChange={handleChange} />
                <input placeholder='Your Age' name="age" required type="number" />
              </div>
              <div className="contacts-form__section">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Course Type</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                  ))}
                </select>
                <input placeholder='Your Phone Number' name="phone" required type="text" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="contacts-form__section">
                <input placeholder='Your Email' name="email" required type="text" value={formData.email} onChange={handleChange} />
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div >
    </>
  )
};