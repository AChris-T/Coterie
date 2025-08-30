import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What types of projects do you specialize in?',
      answer:
        'We focus on three areas: Corporate Events (brand launches, summits, leadership dinners), Consulting (event strategy, service design, and process improvement for organizations), and Cultural & Community Events (heritage celebrations, festivals, inclusive milestones). Each service is designed with insight, care, and intention.',
    },
    {
      question: 'Do you only plan events, or do you also consult?',
      answer:
        'We do both. For clients who want hands-on event management, we design and deliver the full experience. For organizations and creative teams, we also offer consulting in event strategy, service delivery improvement, and brand activations. This can include training, process reviews, and strategic guidance to reduce uncertainty and deliver measurable results.',
    },
    {
      question: 'Can you handle hybrid or virtual events?',
      answer:
        'Yes. We design seamless online experiences that mirror the energy of live events. From streaming and moderation to digital guest engagement, we ensure virtual attendees feel fully connected to the program.',
    },
    {
      question: 'How early should we book your services?',
      answer:
        'Ideally, we recommend reaching out 3–6 months before your event for the best planning and vendor availability. For consulting or smaller-scale projects, shorter timelines may also be possible.',
    },
    {
      question: 'Do you work with all budgets?',
      answer:
        'We believe in affordable elegance. That means we design impactful experiences without unnecessary excess. Every project starts with understanding your objectives and budget realities, and then we create a tailored plan to maximize value and results.',
    },
    {
      question:
        'Do you only work in the UK, or are you open to international projects?',
      answer:
        'Our core focus is the UK, but we are open to select international collaborations, especially in partnership with cultural or hospitality organizations.',
    },
    {
      question:
        'Do you advise on partnerships or sponsorships for cultural projects?',
      answer:
        'We occasionally provide guidance on partnership opportunities as part of cultural and community projects. Our core focus remains event design, consulting, and delivery, but where relevant we may share advice or connections that help strengthen long-term sustainability.',
    },
    {
      question: 'How do you measure success after a project?',
      answer:
        'We use both feedback and data-driven insights. Every engagement includes a review phase where we capture responses, evaluate what worked well, and provide recommendations for continuous improvement.',
    },
    {
      question:
        'What makes Coterie Experience different from other event planners or consultants?',
      answer:
        "We are research-informed and human-centered. Our approach blends academic insight with creative strategy, ensuring every detail is both operationally sound and emotionally resonant. In short, we don't just plan events or offer advice, we create experiences and strategies with lasting impact.",
    },
    {
      question: 'How do I get started?',
      answer:
        "It begins with a conversation. Simply contact us through our Start Your Experience form, and we'll arrange a discovery call to understand your goals, audience, and vision. From there, we'll recommend the best way to bring your event or initiative to life.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-20 lg:px-[100px] px-2 my-20">
      <div className="text-center">
        <h2 className="text-[#17090B] font-bold text-3xl md:text-5xl font-playfair mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-[#17090B] font-lato text-lg max-w-3xl mx-auto">
          Find answers to common questions about our services, process, and
          approach to creating memorable experiences.
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
              >
                <h3 className="text-[#17090B] font-semibold text-lg font-lato pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-[#722F37] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-[#17090B] font-lato leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-[#17090B] font-lato text-lg mb-6">
          Still have questions? We'd love to hear from you.
        </p>
        <NavLink
          to="/contact-us"
          className="bg-[#722F37] text-white px-8 py-3 rounded-lg font-lato font-semibold hover:bg-[#5a252c] transition-colors duration-200"
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}
