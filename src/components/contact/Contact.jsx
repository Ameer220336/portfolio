import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT_INFO } from "../../constants/data";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gsisx7q",
        "template_ukqc5ts",
        form.current,
        "e5CRfGhlomEeKte9E"
      )
      e.target.reset();
  };

  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="container mx-auto max-w-5xl">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Get In Touch</h2>
            <span className="text-slate-500">Contact Me</span>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="grid gap-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center md:text-left">Talk to me</h3>
                
                <div className="bg-white border border-slate-100 p-6 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <i className="bx bx-mail-send text-3xl text-slate-900 mb-2"></i>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <span className="text-sm text-slate-500 mb-4">{CONTACT_INFO.email}</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-slate-500 flex items-center gap-1 hover:text-slate-900 transition-colors">
                        Write me <i className="bx bx-right-arrow-alt"></i>
                    </a>
                </div>

                <div className="bg-white border border-slate-100 p-6 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <i className="bx bxl-whatsapp text-3xl text-slate-900 mb-2"></i>
                    <h3 className="font-semibold text-slate-900">Whatsapp</h3>
                    <span className="text-sm text-slate-500 mb-4">{CONTACT_INFO.phone}</span>
                    <a href={CONTACT_INFO.whatsapp_link} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 flex items-center gap-1 hover:text-slate-900 transition-colors">
                        Write me <i className="bx bx-right-arrow-alt"></i>
                    </a>
                </div>

                <div className="bg-white border border-slate-100 p-6 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <i className="bx bxl-messenger text-3xl text-slate-900 mb-2"></i>
                    <h3 className="font-semibold text-slate-900">Messenger</h3>
                    <span className="text-sm text-slate-500 mb-4">{CONTACT_INFO.messenger_user}</span>
                    <a href={CONTACT_INFO.messenger_link} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 flex items-center gap-1 hover:text-slate-900 transition-colors">
                        Write me <i className="bx bx-right-arrow-alt"></i>
                    </a>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6 text-center md:text-left">Chat about your Project</h3>

                <form ref={form} onSubmit={sendEmail} className="grid gap-6">
                    <div className="relative">
                        <label className="absolute -top-3 left-4 bg-white px-2 text-xs font-semibold text-slate-500">Name</label>
                        <input type="text" name="name" placeholder="Full Name" className="w-full border border-slate-300 rounded-xl px-6 py-4 outline-none focus:border-slate-900 transition-colors" />
                    </div>

                    <div className="relative">
                        <label className="absolute -top-3 left-4 bg-white px-2 text-xs font-semibold text-slate-500">Email</label>
                        <input type="email" name="email" placeholder="Contact Email" className="w-full border border-slate-300 rounded-xl px-6 py-4 outline-none focus:border-slate-900 transition-colors" />
                    </div>

                    <div className="relative">
                        <label className="absolute -top-3 left-4 bg-white px-2 text-xs font-semibold text-slate-500">Project</label>
                        <textarea name="project" cols="30" rows="6" placeholder="Write your project" className="w-full border border-slate-300 rounded-xl px-6 py-4 outline-none focus:border-slate-900 transition-colors resize-none"></textarea>
                    </div>

                    <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition-colors flex items-center gap-2 justify-center w-max">
                        Send Message
                         <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
                    </button>
                </form>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Contact;
