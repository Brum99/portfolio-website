'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import { useTheme } from '../context/ThemeContext'; // adjust path as needed

const Contact = () => {
  const { isDarkMode } = useTheme(); 
  const [result, setResult] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('none');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const formData = new FormData(event.target);

    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    if (result === 'Form Submitted Successfully') {
      const timer = setTimeout(() => setResult(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  useEffect(() => {
    if (isDarkMode) {
      setBackgroundImage('none');
    } else {
      const timeout = setTimeout(() => {
        setBackgroundImage('url("/footer-bg-color.png")');
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, [isDarkMode]);

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20"
      style={{
        backgroundImage: backgroundImage,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '90% auto',
      }}
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <input type="hidden" name="access_key" value="77f7b36e-96f6-4697-a5ac-261ec753971c" />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md"
            style={{
              backgroundColor: '#ffffff',
              color: '#000000',
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md"
            style={{
              backgroundColor: '#ffffff',
              color: '#000000',
            }}
          />
        </div>

        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6"
          style={{
            backgroundColor: '#ffffff',
            color: '#000000',
          }}
        ></textarea>

        <button
          type="submit"
          className="px-10 py-3 border rounded-full flex items-center gap-2 transition-colors duration-300 mx-auto w-max"
          style={{
            backgroundColor: 'var(--text-color)',
            color: 'var(--bg-color)',
            borderColor: 'var(--text-color)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = isDarkMode ? '#fcf4ff' : '#2a004a';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--text-color)';
          }}
        >
          Submit now
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14m-7-7l7 7-7 7"
              stroke="var(--bg-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {result && <p className="mt-4 text-center">{result}</p>}
      </form>
    </div>
  );
};

export default Contact;
