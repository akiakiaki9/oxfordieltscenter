'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import GoogleMaps from '../components/GoogleMaps';
import YandexComp from '../components/YandexComp';

export default function ContactsComp() {
  const [formData, setFormData] = useState({
    fullname: '',
    age: '',
    course: '',
    phone: '+998', // Начальное значение для номера телефона
    email: '',
    message: ''
  });
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/courses/');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error.message);
        setError('Failed to load courses');
      }
    };

    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://oxfordstudycenter-production.up.railway.app/api/contact-form/', {
        fullname: formData.fullname,
        age: formData.age,
        course: formData.course, // Отправляем id курса
        phone_number: formData.phone,
        email: formData.email,
        message: formData.message
      });
      alert('Thank you for contacting us!');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formattedValue = value.startsWith('+998')
        ? '+998' + value.slice(4).replace(/\D/g, '')
        : '+998';

      setFormData({ ...formData, phone: formattedValue });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
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
          {/* Форма */}
          <div className="contacts-blok__section-2">
            <div className="contacts-blok__section-2__header">
              <p className='contacts-blok__section-2__header-p1'>CONTACTS WITH US!</p>
              <h1>Get In Touch</h1>
              <div className='contacts-blok__section-2__header-line'></div>
              <p className='contacts-blok__section-2__header-p2'>Fill in all fields if you want to enroll in courses</p>
            </div>
            <form onSubmit={handleSubmit} className='contacts-form'>
              <div className="contacts-form__section">
                <textarea placeholder='Message' name='message' id='message' required value={formData.message} onChange={handleChange}></textarea>
              </div>
              <div className="contacts-form__section">
                <input placeholder='Your Full Name' name="fullname" required type="text" value={formData.fullname} onChange={handleChange} />
                <input placeholder='Your Age' name="age" required type="number" value={formData.age} onChange={handleChange} />
              </div>
              <div className="contacts-form__section">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Course Type</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>{course.name}</option>
                  ))}
                </select>
                <input
                  placeholder="Your Phone Number"
                  name="phone"
                  required
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={13} // Учитываем длину номера с +998
                  onFocus={(e) => {
                    if (!formData.phone) {
                      setFormData({ ...formData, phone: '+998' });
                    }
                  }}
                />
              </div>
              <div className="contacts-form__section">
                <input placeholder='Your Email' name="email" required type="text" value={formData.email} onChange={handleChange} />
                <button type='submit'>Submit</button>
              </div>
              {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            </form>
          </div>
        </div>
      </div>
      <div className="contacts-yandex">
        <YandexComp />
      </div>
      <div className="map">
        <GoogleMaps />
      </div>
    </>
  );
};