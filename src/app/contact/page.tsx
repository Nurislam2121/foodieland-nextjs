'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    enquiryType: 'Advertising',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      enquiryType: 'Advertising',
      message: '',
    });
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <h1 className="text-center text-4xl font-bold tracking-tight text-black sm:text-5xl">
        Contact us
      </h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        <div className="relative hidden h-[500px] overflow-hidden rounded-[30px] bg-[#E7FAFE] lg:block">
          <Image
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
            alt="Contact Chef"
            fill
            className="object-cover"
          />
        </div>

        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  NAME
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Enter your name..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-[16px] border border-gray-200 px-4 py-3.5 text-sm text-black outline-none transition-colors focus:border-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  EMAIL ADDRESS
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Your email address..."
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-[16px] border border-gray-200 px-4 py-3.5 text-sm text-black outline-none transition-colors focus:border-black"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  SUBJECT
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Enter subject..."
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="rounded-[16px] border border-gray-200 px-4 py-3.5 text-sm text-black outline-none transition-colors focus:border-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="enquiryType" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  ENQUIRY TYPE
                </label>
                <select
                  id="enquiryType"
                  value={formData.enquiryType}
                  onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                  className="rounded-[16px] border border-gray-200 px-4 py-3.5 text-sm text-black outline-none transition-colors focus:border-black bg-white"
                >
                  <option value="Advertising">Advertising</option>
                  <option value="Partnership">Partnership</option>
                  <option value="General Query">General Query</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                MESSAGES
              </label>
              <textarea
                id="message"
                rows={6}
                required
                placeholder="Enter your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-[16px] border border-gray-200 p-4 text-sm text-black outline-none transition-colors focus:border-black resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-36 rounded-[16px] bg-black py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}