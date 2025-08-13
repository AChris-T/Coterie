import React, { useState } from 'react';
import { PointedArrowIcon } from '../../assets/icons';

export default function Storey() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: 'success',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new URLSearchParams();
    formData.append('firstName', form.firstName);
    formData.append('lastName', form.lastName);
    formData.append('phone', form.phone);
    formData.append('email', form.email);
    formData.append('message', form.message);

    fetch(
      'https://script.google.com/macros/s/AKfycbzTU-ST4NJ7Dz9MmpYY3EGE7qdfcPCGgF26rGw9nNHzCOmillT2EQ0chaYg_FMNS5vTzw/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      }
    )
      .then((res) => res.text())
      .then((text) => {
        if (text.includes('success')) {
          showAlert('Your story has been sent successfully!', 'success');
          setForm({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            message: '',
          });
        } else {
          showAlert('Something went wrong. Please try again.', 'error');
          setIsLoading(false);
        }
      })
      .catch(() => alert('Error sending story'));
  };

  return (
    <div className="lg:px-24 pb-56 w-full bg-[#EDD4D7] md:px-10 py-10 px-3 font-playfair flex flex-col gap-10">
      {alert.show && (
        <div
          className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white text-sm transition-opacity duration-500 z-50 ${
            alert.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {alert.message}
        </div>
      )}
      <div className="flex gap-10 md:flex-row flex-col justify-center items-center">
        <div className="w-full flex flex-col items-center">
          <h3 className="text-2xl flex font-extrabold md:text-[60px]">
            Tell Us Your Story
          </h3>
          <p className="text-[#17090B]">We’ll tailor a plan just for you.</p>
          <div className="flex justify-center items-center mt-4">
            <button className="bg-[#722F37] py-3 text-white px-16 font-lato rounded-lg cursor-pointer">
              Download Our Planning Kit
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 w-full bg-white rounded-lg p-6"
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              <label>First Name*</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="h-[56px] border-1 rounded-md border-[#00000014]"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Last Name*</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="h-[56px] border-1 rounded-md border-[#00000014]"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Phone Number*</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="h-[56px] border-1 rounded-md border-[#00000014]"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email Address*</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="h-[56px] border-1 rounded-md border-[#00000014]"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label>Message*</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="h-[156px] border-1 rounded-md border-[#00000014]"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#722F37] h-full font-medium flex gap-1 mt-10 items-center py-3 justify-center text-white px-16 font-lato rounded-lg cursor-pointer"
          >
            {isLoading ? (
              'Submitting...'
            ) : (
              <h3 className="flex cursor-pointer w-full justify-center">
                Send my story
                <h3 className="flex items-center mt-1 justify-center">
                  <PointedArrowIcon />
                </h3>
              </h3>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
