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
      {/* Section 1: Introduction background noise animation.*/}
      {/* <svg width="0" height="0">
        <filter id="turbulence">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="10" seed="0" result="turbulence">
            <animate attributeName="seed" from="0" to="100" dur="20s" repeatCount="indefinite"/>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="20"/>
          <feColorMatrix in="turbulence" type="hueRotate" values="0">
            <animate attributeName="values" from="0" to="360" dur="20s" repeatCount="indefinite"/>
          </feColorMatrix>
        </filter>
      </svg> */}
      {/* Section 1: Introduction */}
      {/* <section className="relative text-white py-20 px-10" style={{ background: 'black' }}>
        <div className="absolute inset-0 w-full h-full" style={{ filter: 'url(#turbulence)', backgroundColor: 'black', opacity: 0.8 }}></div>
        <div className="relative z-10 bg-black">
          <h1 className="text-5xl font-bold z-15 text-purple">Hi, I'm Akshith</h1>
          <h2 className="text-3xl mt-2">Let's create solutions that make a difference.</h2>
          <p className="mt-4 text-xl">
            A Computer Science graduate and software engineer with experience in various programming languages and technologies. 
            <br />
            works on Software development, quantum computing, and machine learning. 
            <br />
            Currently a Quantum Software Development Intern at BosonQ PSI.
          </p>
        </div>
      </section> */}
    <section className="relative text-white py-20 px-10 bg-black">
      <svg width="0" height="0">
        <filter id="turbulence">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="10" seed="0" result="turbulence">
            <animate attributeName="seed" from="0" to="100" dur="20s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="20" />
          <feColorMatrix in="turbulence" type="hueRotate" values="0">
            <animate attributeName="values" from="0" to="360" dur="20s" repeatCount="indefinite" />
          </feColorMatrix>
        </filter>
      </svg>

      <div
        className="absolute inset-0 w-full h-full stars"
        style={{ filter: 'url(#turbulence)', backgroundColor: 'black', opacity: 0.8 }}
      ></div>
      <div className="relative bg-black p-10 rounded-lg">
        <h1 className="text-5xl font-bold text-pink-500 font-cursive text-shadow-md">Hi, I'm Akshith</h1>
        <h2 className="text-3xl mt-2 text-lime-400 font-comic text-shadow">Building solutions that make a difference.</h2>
        <p className="mt-4 text-xl text-cyan-400 font-mono leading-relaxed">
        Tech wizard by day, quantum dreamer by night! I craft websites, teach machines, and dabble in quantum mysteries at BosonQ PSI. 
        <br></br>When not decoding the universe, I'm probably lost in sci-fi realms or chasing the next big idea.
        <br></br>Ready to sprinkle some digital stardust and make the impossible possible?
        
        </p>
      </div>
    </section>

      {/* Section 2: News Scroll using react-slick */}
      <section className="bg-white py-16 px-4">
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
                <li>IEEE BIT CS Student branch General secretary</li>
                <li>Gate Qualified AIR -800</li>
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
