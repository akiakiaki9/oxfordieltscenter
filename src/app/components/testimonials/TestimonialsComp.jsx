'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from '@/app/utils/reviews';
import { FaBook } from "react-icons/fa";

export default function TestimonialsComp() {
    return (
        <div className="testimonials">
            <div className="testimonial-container">
                <div className="testimonial__header">
                    <FaBook className='testimonial__header__icon' />
                    <p>OUR STUDENTS TESTIMONIALS</p>
                </div>

                <h1>Students Say’s About Us!</h1>

                <div className="slider-container">

                    <Splide
                        options={{
                            perPage: 1,
                            autoplay: true,
                            speed: 1000,
                            rewind: true,
                            rewindByDrag: true,
                            arrows: false
                        }}
                    >
                        {reviews.map((review) => (
                            <SplideSlide key={review.id}>
                                <img className="review-img" src={review.image} alt={`Oxford IELTS Center testimonial ${review.id}`} />
                                <div className="content">
                                    <p className="text">{review.text}</p>
                                    <div className="info">
                                        <div className="rating">
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                        </div>
                                        <h3 className="user">{review.name}</h3>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </div>
    );
};