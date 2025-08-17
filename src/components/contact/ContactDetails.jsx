import React, { useState } from 'react';
import {
  EmailIcon,
  FacebooksIcon,
  InstagramIcon,
  MessageIcon,
  PhoneNumberIcon,
  PointedArrowIcon,
  TwittersIcon,
} from '../../assets/icons';

export default function ContactDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: 'success',
  });
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const showAlert = (message, type = 'success') => {
    setAlert({ show: true, message, type });

    setTimeout(() => {
      setAlert({ ...alert, show: false });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new URLSearchParams();
    formData.append('firstName', form.firstName);
    formData.append('lastName', form.lastName);
    formData.append('phone', form.phone);
    formData.append('email', form.email);
    formData.append('message', form.message);

    try {
      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbzTU-ST4NJ7Dz9MmpYY3EGE7qdfcPCGgF26rGw9nNHzCOmillT2EQ0chaYg_FMNS5vTzw/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData,
        }
      );

      const text = await res.text();
      console.log(text); // you can check GAS response

      showAlert('Your message has been sent successfully!', 'success');

      setForm({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      showAlert('Something went wrong. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="mt-20 mb-40 w-full md:px-[100px] px-4 flex flex-col lg:flex-row justify-between items-center gap-10">
      {alert.show && (
        <div
          className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white text-sm transition-opacity duration-500 z-50 ${
            alert.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {alert.message}
        </div>
      )}

      <div className="flex flex-2/3 flex-col gap-[44px]">
        <div className="flex flex-col gap-4">
          <h3 className="text-[#17090B] font-lato font-semibold text-[32px]">
            Leave a comment
          </h3>
          <p className="text-[#17090B] font-lato text-sm">
            Your email address will not be published. Required fields are marked
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex-col  flex gap-6 ">
          <div className="flex flex-col w-full md:flex-row gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label>First name *</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="h-[56px] px-2 border focus:outline-none rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label>Last name *</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="h-[56px] px-2 border focus:outline-none rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex flex-col w-full md:flex-row gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label>Phone Number*</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="h-[56px] px-2 border focus:outline-none rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label>Email address*</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="h-[56px] px-2 border focus:outline-none rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label>Your message*</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="h-[200px] p-3 px-2 border rounded-md focus:outline-none"
              required
            />
          </div>
          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="px-9 py-5 cursor-pointer bg-[#722F37] text-white rounded-md"
            >
              {isLoading ? (
                'Submitting...'
              ) : (
                <div className="flex gap-3 items-center">
                  <h3>Submit</h3>
                  <div className="mt-1">
                    <PointedArrowIcon fill={'#fff'} />
                  </div>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="flex-1/3 bg-[#722f37] h-full flex flex-col gap-[37px] w-full rounded-lg text-white px-[34px] py-[59px]">
        <h3>Hi, we are always here to help you.</h3>
        <div className="flex flex-col gap-6">
          <div className="bg-[#FFFFFF1A] px-6 py-4 flex items-center font-lato font-semibold gap-3 rounded-lg">
            <PhoneNumberIcon />
            <div>
              <h3>Phone Number</h3>
              <p>+2348123456789</p>
            </div>
          </div>
          <div className="bg-[#FFFFFF1A] px-6 py-4 flex items-center font-lato font-semibold gap-3 rounded-lg">
            <MessageIcon />
            <div>
              <h3>Sms/Whatsapp</h3>
              <p>+2348123456789</p>
            </div>
          </div>
          <div className="bg-[#FFFFFF1A] px-6 py-4 flex items-center font-lato font-semibold gap-3 rounded-lg">
            <EmailIcon />
            <div>
              <h3>Sms/Whatsapp</h3>
              <p>+2348123456789</p>
            </div>
          </div>
          <hr className="text-white " />
          <div className="flex flex-col gap-2">
            <h2 className="font-lato font-semibold text-[18px]">
              Connect with us
            </h2>
            <div className="flex gap-3">
              <InstagramIcon />
              <FacebooksIcon />
              <TwittersIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
