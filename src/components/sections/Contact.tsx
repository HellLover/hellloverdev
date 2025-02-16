import { useState } from "react";
import Hero from "../ui/Hero";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import emailjs from "emailjs-com";
import Toast from "../ui/Toast";

type Status = {
    type: "error" | "success",
    message: null | string;
}

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<Status>({ 
        type: "success", 
        message: null 
    });
    
    const handleSubmit = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            )
            .then(() => {
                setStatus({ 
                    type: "success", 
                    message: "Successfully sent the email!" 
                });
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                setStatus({ 
                    type: "error", 
                    message: "Failed to send the email!" 
                });
                setFormData({ name: "", email: "", message: "" });
                console.log(error);
            });
    };

    return (
        <Hero>
            <RevealOnScroll>
                <div className="border-1 border-gray-900 p-10 rounded-md shadow-md inset-shadow-gray-900">
                    <h1 className="text-4xl text-blue-600 font-bold text-center mb-5">Contact</h1>
                        <form className="w-full space-y-6" onSubmit={handleSubmit}>
                            <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name"
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                            />
                            </div>

                            <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                            </div>

                            <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message..."
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                            />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                </div>
            </RevealOnScroll>

            
            {status.message && (
                    <Toast type={status.type} message={status.message} duration={5000} />
            )}
        </Hero>
    )
}

export default Contact;