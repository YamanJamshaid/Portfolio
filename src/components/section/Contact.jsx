import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'


export const Contact = () => {

    const [FormData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
   
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent Successfully");
            setFormData({name : "", email: "", message: ""});
        }).catch((error) => alert("An error occured, Please try again"));
    };


    return <section id="contact" className="min-h-screen flex items-center justify-center py-2"> 

    <RevealOnScroll>
        <div className="px-4 w-150 container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-cyan-500/80 bg-clip-text text-transparent text-center">Contact Me</h2>
            <form action="" className="space-y-6" onSubmit={sendEmail}>
                <div className="relative">
                    <input type="text" id="name" name="name" required value={FormData.name} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-emerald-600 focus:bg-cyan-500/10"
                    placeholder="Name"
                    onChange={(e) => setFormData({...FormData, name: e.target.value})}
                    />

                </div>
                <div className="relative">
                    <input type="text" id="email" name="email" required value={FormData.email} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-emerald-600 focus:bg-cyan-500/10"
                    placeholder="Your Email"
                    onChange={(e) => setFormData({...FormData, email: e.target.value})}
                    />

                </div>
                <div className="relative">
                    <textarea type="text" id="message" name="message" required value={FormData.message} rows={5} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-emerald-600 focus:bg-cyan-500/10"
                    placeholder="Type Your Message"
                    onChange={(e) => setFormData({...FormData, message: e.target.value})}
                    />

                </div>
                <button type="submit" className="w-full bg-emerald-500/70 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 over:shadow-[0_0_15px_rgba(43, 127, 255, 0.4)]">
                    Submit Message
                </button>

            </form>
            
        </div>
    </RevealOnScroll>

    </section>
}