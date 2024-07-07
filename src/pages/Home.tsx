import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import akshithImage from '../assets/Akshith_Animated_photo.png';

const Home: React.FC = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  // Sample news items for the slider
  const newsItems = [
    'Scored 800 AIR rank in GATE! 🎉',
    'Submitted a paper for IEEE conference. 📄',
    'Won Best Project of the year in IEEE YESIST12 Prelims 🎓',
    'Published My first blog on Quantum Computing. 📝',
    'Attended a workshop on Quantum Machine Learning. 🤖',
    'Completed a course on Quantum Computing. 🎓',
    // Add more news items as needed
  ];

  // Settings for react-slick slider
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000, // Adjust speed as needed
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    vertical: false,
    verticalSwiping: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div>
      {/* Section 1: Introduction */}
      <section className="bg-black text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Akshith</h2>
          <p className="text-2xl mb-6">Let's create solutions that make a difference.</p>
          <p className="text-lg mb-4">
            A Computer Science graduate and software engineer with experience in various programming languages and technologies.
          </p>
          <p className="text-lg mb-4">
            <strong>Key skills:</strong> Software development, quantum computing, and machine learning.
          </p>
          <p className="text-lg mb-4">
            Currently, I am a Quantum Software Development Intern at BosonQ PSI, where I'm exploring the quantum realm with a touch of humor and interactivity.
          </p>
        </div>
      </section>

      {/* Section 2: News Scroll using react-slick */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-red-600">Latest Achievements</h2>
          <Slider {...sliderSettings}>
            {newsItems.map((item, index) => (
              <div key={index} className="text-xl">
                {item}
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Section 3: Digital Visiting Card */}
      <section className="bg-black text-white py-12 px-4 rounded-lg shadow-xl z-10 ">
          <div className="max-w-4xl mx-auto flex items-center">
            <div className="w-1/2 pr-8">
              <img className="rounded-lg shadow-xl" src={akshithImage} alt="Akshith's Profile" />
            </div>
            <div className="w-1/2 rounded-lg bg-white shadow-xl p-6 text-black">
              <h2 className="text-3xl font-bold mb-2">Akshith Chowdary</h2>
              <p className="text-lg mb-4">Quantum Software Engineer</p>
              <ul className="text-lg list-disc pl-4">
                <li>ISOC member</li>
                <li>4-star coder at Codechef</li>
                {/* Add more bullet points as needed */}
              </ul>
            </div>
          </div>
      </section>

      {/* Section 4: Contact Form using Formik */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              // Handle form submission here
              console.log(values);
              resetForm();
            }}
          >
            <Form className="flex flex-col">
              <Field type="text" name="name" placeholder="Your Name" className="py-2 px-3 border rounded mb-4" />
              <ErrorMessage name="name" component="div" className="text-red-600" />

              <Field type="email" name="email" placeholder="Your Email" className="py-2 px-3 border rounded mb-4" />
              <ErrorMessage name="email" component="div" className="text-red-600" />

              <Field as="textarea" name="message" placeholder="Not integrated with backend your messages wont raech me use my socials to connect with me. This issue will be addressed latter." rows={4} className="py-2 px-3 border rounded mb-4" />
              <ErrorMessage name="message" component="div" className="text-red-600" />

              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Send Message
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default Home;
