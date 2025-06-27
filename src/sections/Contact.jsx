import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      setSuccess(true);
      toast.success("Message sent successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.", {
        position: "bottom-right",
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
          <TitleHeader
            title="Get in Touch – Let’s Connect"
            sub="💬 Have questions or ideas? Let’s talk! 🚀"
          />
          <div className="grid-12-cols mt-10">
            <div className="xl:col-span-5 contact">
              <div className="glassCard flex-center card-border rounded-xl px-10 py-5">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-7"
                >
                  <div>
                    <label htmlFor="name">Your name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Please enter your name?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What’s your email address?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows="5"
                      required
                    />
                  </div>

                  {!success && (
                    <button
                      type="submit"
                      disabled={loading}
                      className={`cta-button group flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-white text-black transition-colors duration-500
    ${
      loading
        ? "bg-white cursor-not-allowed opacity-70"
        : "bg-white hover:bg-black hover:text-white"
    }`}
                    >
                      {loading ? (
                        <ClipLoader size={24} color="black" />
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  )}
                </form>
              </div>
            </div>
            <div className="xl:col-span-7 min-h-96">
              <div className="w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                <HeroExperience />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ zIndex: 9999 }}
      />
    </>
  );
};

export default Contact;
