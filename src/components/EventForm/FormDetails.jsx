/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { PointedArrowIcon } from '../../assets/icons';

export default function FormDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState('');

  const options = [
    'Wedding',
    'Anniversary',
    'Birthday',
    'Corporate',
    'Consultation',
    'Others',
  ];
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
    services: [],
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

  const handleCheckboxChange = (option) => {
    setForm((prev) => {
      if (prev.services.includes(option)) {
        // remove if already selected
        return {
          ...prev,
          services: prev.services.filter((s) => s !== option),
        };
      } else {
        // add if not selected
        return { ...prev, services: [...prev.services, option] };
      }
    });
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
    formData.append('services', form.services.join(', ')); // send as comma-separated string

    try {
      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbzTU-ST4NJ7Dz9MmpYY3EGE7qdfcPCGgF26rGw9nNHzCOmillT2EQ0chaYg_FMNS5vTzw/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formData,
        }
      );

      const text = await res.text();
      showAlert('Your message has been sent successfully!', 'success');

      setForm({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        services: [],
      });
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="mb-[200px] font-lato px-2 md:px-[100px]  w-full ">
      {alert.show && (
        <div
          className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white text-sm transition-opacity duration-500 z-50 ${
            alert.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {alert.message}
        </div>
      )}

      <div className="h-full rounded-lg px-2 py-10 md:p-10 border-1 border-[#E3E3E3] bg-white">
        <form onSubmit={handleSubmit} className="flex-col w-full flex gap-6 ">
          <div className="flex flex-col w-full md:flex-row gap-4 ">
            <div className="w-full flex flex-col ">
              <label className="font-medium text-[#4B4D4A]">First Name*</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="h-[56px] border-[#00000014] px-2 border focus:outline-none rounded-md"
                required
              />
            </div>
            <div className="w-full flex flex-col ">
              <label className="font-medium text-[#4B4D4A]">Last Name*</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="h-[56px] border-[#00000014] px-2 border focus:outline-none rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:flex-row gap-4 ">
            <div className="w-full flex flex-col ">
              <label className="font-medium text-[#4B4D4A]">
                Phone Number*
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="h-[56px] border-[#00000014] px-2 border focus:outline-none rounded-md"
                required
              />
            </div>
            <div className="w-full flex flex-col ">
              <label className="font-medium text-[#4B4D4A]">
                Email Address*
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="h-[56px] border-[#00000014] px-2 border focus:outline-none rounded-md"
                required
              />
            </div>
          </div>
          <div>
            <label className="block font-medium mb-2">
              What Services Can We Assist You With*
            </label>
            <div className="grid gap-2">
              {options.map((option) => (
                <label
                  key={option}
                  className={`flex justify-between items-center p-3 border rounded-lg cursor-pointer ${
                    form.services.includes(option)
                      ? 'border-[#722F37] bg-blue-50'
                      : 'border-gray-300'
                  }`}
                >
                  <span>{option}</span>
                  <input
                    type="checkbox"
                    name="services"
                    value={option}
                    checked={form.services.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="hidden"
                  />
                  <span
                    className={`w-5 h-5 flex items-center justify-center rounded-full border ${
                      form.services.includes(option)
                        ? 'bg-[#722F37] border-[#722F37]'
                        : 'border-gray-400'
                    }`}
                  >
                    {form.services.includes(option) && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-[#4B4D4A]">
              Describe Your Project*
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="h-[200px]  border-[#00000014] p-3 px-2 border rounded-md focus:outline-none"
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
    </div>
  );
}
