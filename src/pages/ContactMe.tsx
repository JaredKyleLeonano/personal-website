import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_gusbjy8",
      "template_na88q9q",
      e.target as HTMLFormElement,
      "t2uFcbNd_DbRgahH1"
    )
    .then(
      () => toast.success("Email sent!"),
      (error) => toast.error("Error: " + error.text)
    );
};

const ContactMe = ({
  sectionRef,
  globeRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  globeRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const isEmailValid = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const isFormValid = () => {
    return (
      formName.trim() !== "" &&
      isEmailValid(formEmail) &&
      formMessage.trim() !== ""
    );
  };

  return (
    <section
      ref={sectionRef}
      className="flex justify-center items-center h-screen w-screen relative [background:radial-gradient(ellipse_100%_130%_at_2%_53%,#B37800_0%,black_40%)] snap-center"
    >
      <div ref={globeRef} className="flex-3 h-full w-full"></div>
      <div className="flex-4 h-full w-full">
        <div className="flex h-full flex-col gap-6 justify-center items-center">
          <div className="w-180 p-6">
            <div className="flex flex-col items-center gap-4 text-white font-Exo2">
              <p className=" font-bold text-5xl">
                Let's <span className="text-yellow-400">connect!</span>
              </p>
              <p className=" text-2xl">
                Feel free to reach out for collaborations or project inquiries
              </p>
            </div>
          </div>
          <div className="w-full h-100 border-2 p-6 border-[#364153]">
            <form
              className="flex flex-col h-full justify-between items-center text-white font-Exo2"
              onSubmit={sendEmail}
            >
              <div className="flex w-full justify-between gap-24">
                <div className="flex w-full gap-4 flex-col ">
                  <label className="text-sm text-gray-400">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Enter your Name"
                    required
                    autoComplete="name"
                    className="placeholder-gray-400 appearance-none text-lg focus:outline-none focus:border-b-yellow-400 transition-colors duration-300 ease-out border-b-1 border-b-[#364153] pb-1"
                  ></input>
                </div>
                <div className="flex w-full gap-4 flex-col">
                  <label className="text-sm text-gray-400">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="Enter your Email"
                    required
                    autoComplete="email"
                    className="placeholder-gray-400 appearance-none text-lg focus:outline-none focus:border-b-yellow-400 transition-colors duration-300 ease-out border-b-1 border-b-[#364153] pb-1"
                  ></input>
                </div>
              </div>
              <div className="flex w-full gap-4 flex-col ">
                <label className="text-sm text-gray-400">
                  Enter your Message
                </label>
                <textarea
                  name="message"
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Share your thoughts, feedback, or collaboration ideas..."
                  required
                  className="focus:outline-none border-b-1 resize-none border-b-[#364153] pb-1 placeholder-gray-400 text-lg focus:border-b-yellow-400 transition-colors duration-300 ease-out"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`flex gap-2 items-center justify-center w-64 p-4 border-2 border-[#364153] transition-all duration-300 ease-out ${
                  !isFormValid()
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-100 hover:cursor-pointer hover:border-yellow-400"
                }`}
              >
                <p className="font-bold">Send</p>
                <FontAwesomeIcon
                  className={`transition-colors duration-300 ease-out ${
                    !isFormValid() ? "text-[#364153]" : "text-yellow-400"
                  }`}
                  icon={faPaperPlane}
                ></FontAwesomeIcon>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex-1"> </div>
    </section>
  );
};

export default ContactMe;
