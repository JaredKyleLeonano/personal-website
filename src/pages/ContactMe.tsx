import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_gusbjy8",
        "template_na88q9q",
        e.target as HTMLFormElement,
        "t2uFcbNd_DbRgahH1"
      )
      .then(
        () => {
          toast.success("Email sent!");
          setIsSubmitting(false);
          setFormName("");
          setFormEmail("");
          setFormMessage("");
        },
        (error) => {
          toast.error("Error: " + error.text);
          setIsSubmitting(false);
        }
      );
  };

  // useEffect(() => {
  //   const isFormValid = () => {
  //     return (
  //       formName.trim() !== "" &&
  //       isEmailValid(formEmail) &&
  //       formMessage.trim() !== ""
  //     );
  //   };

  //   console.log(isFormValid());
  // }, [isEmailValid, formName, formEmail, formMessage]);

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
      className="flex justify-center items-center full-height-fix w-screen relative [background:radial-gradient(ellipse_100%_130%_at_2%_53%,#B37800_0%,black_40%)] snap-center"
    >
      <div
        ref={globeRef}
        className="flex-3 hidden xl:-translate-x-48 lg:block lg:scale-150 lg:static lg:h-full lg:w-full"
      ></div>
      <div className="flex-4 h-full w-full">
        <div className="flex h-full flex-col justify-center items-center pt-16 gap-2 md:gap-6 lg:gap-6">
          <div className="w-5/6 lg:p-6">
            <div className="flex flex-col items-center text-white font-Exo2 w-full lg:gap-4">
              <p className=" font-bold text-3xl md:text-4xl lg:text-5xl">
                Let's <span className="text-yellow-400">connect!</span>
              </p>
              <p className="text-base text-center md:text-xl lg:text-2xl">
                Feel free to reach out for collaborations or project inquiries
              </p>
            </div>
          </div>
          <div className=" border-2 p-6 bg-gray-950/70 border-[#364153] w-9/10 h-7/10 lg:w-full lg:h-100 rounded">
            <form
              className="flex flex-col h-full justify-between items-center text-white font-Exo2"
              onSubmit={sendEmail}
            >
              <div className="flex flex-col lg:flex-row w-full justify-between gap-6 md:gap-8 lg:gap-24">
                <div className="flex w-full flex-col gap-1 lg:gap-4">
                  <label className="text-gray-400 text-xs md:text-base lg:text-sm">
                    Your Name
                  </label>
                  <input
                    disabled={isSubmitting}
                    type="text"
                    name="name"
                    onChange={(e) => setFormName(e.target.value)}
                    value={formName}
                    placeholder="Enter your Name"
                    required
                    autoComplete="name"
                    className="placeholder-gray-400 appearance-none focus:outline-none focus:border-b-yellow-400 transition-colors duration-300 ease-out border-b-1 border-b-[#364153] pb-1 text-base md:text-xl lg:text-lg"
                  ></input>
                </div>
                <div className="flex w-full flex-col gap-1 lg:gap-4">
                  <label className="text-gray-400 text-xs md:text-base lg:text-sm">
                    Your Email
                  </label>
                  <input
                    disabled={isSubmitting}
                    type="email"
                    name="email"
                    onChange={(e) => setFormEmail(e.target.value)}
                    value={formEmail}
                    placeholder="Enter your Email"
                    required
                    autoComplete="email"
                    className="placeholder-gray-400 appearance-none focus:outline-none focus:border-b-yellow-400 transition-colors duration-300 ease-out border-b-1 border-b-[#364153] pb-1 text-base md:text-xl lg:text-lg"
                  ></input>
                </div>
              </div>
              <div className="flex w-full gap-4 flex-col ">
                <label className="text-gray-400 text-xs md:text-base lg:text-sm">
                  Enter your Message
                </label>
                <textarea
                  disabled={isSubmitting}
                  name="message"
                  onChange={(e) => setFormMessage(e.target.value)}
                  value={formMessage}
                  placeholder="Share your thoughts, feedback, or collaboration ideas..."
                  required
                  className="focus:outline-none border-b-1 resize-none border-b-[#364153] pb-1 placeholder-gray-400 focus:border-b-yellow-400 transition-colors duration-300 ease-out text-base md:text-xl lg:text-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className={`flex gap-2 items-center justify-center w-64 p-4 border-2 border-[#364153] transition-all duration-300 ease-out rounded ${
                  !isFormValid()
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-100 hover:cursor-pointer hover:border-yellow-400"
                }
                    ${isSubmitting ? "pointer-events-none" : ""}`}
              >
                <p className="font-bold text-base md:text-xl lg:text-base">
                  Send
                </p>
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-6 h-6 border-t-2 border-l-2 border-yellow-400 rounded-full"
                  ></motion.div>
                ) : (
                  <FontAwesomeIcon
                    className={`transition-colors duration-300 ease-out ${
                      !isFormValid() ? "text-[#364153]" : "text-yellow-400"
                    } text-base md:text-xl lg:text-base`}
                    icon={faPaperPlane}
                  ></FontAwesomeIcon>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:flex-1"> </div>
    </section>
  );
};

export default ContactMe;
