import { useState, useRef } from "react";
import { authBlock_index } from "@/constant";
import { loginSchema, signUpSchema } from "@/validation/loginValidations";
import { gsap } from "gsap";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import Tabs from "./Tabs";
import PropTypes from "prop-types";

const LogIn = ({signInWithGoogle}) => {
  const [activeTab, setActiveTab] = useState(authBlock_index.LOGIN_BLOCK);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    retypePassword: "",
  });
  const [errors, setErrors] = useState({});
  const tabPanelRef = useRef(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const schema =
      activeTab === authBlock_index.LOGIN_BLOCK ? loginSchema : signUpSchema;

    try {
      // Basic email validation
      if (!emailRegex.test(formData.email)) {
        throw {
          errors: [{ path: ["email"], message: "Invalid email address" }],
        };
      }

      schema.parse(formData);
      setErrors({});
      console.log("Form Submitted:", formData);
    } catch (err) {
      const fieldErrors = {};
      err.errors.forEach((error) => {
        if (!fieldErrors[error.path[0]]) {
          fieldErrors[error.path[0]] = error.message;
        }
      });
      setErrors(fieldErrors);
    }
  };

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setErrors({});
      setActiveTab(tab);

      // GSAP animation
      gsap.fromTo(
        tabPanelRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  };

  return (
    <div
      className={`flex justify-center items-center ${
        activeTab === authBlock_index.LOGIN_BLOCK
          ? "show_middle_with_navbar"
          : "min-h-screen"
      }`}
    >
      <div className="w-full max-w-md border border-secondary shadow-lg rounded-xl p-6">
        {/* Tabs */}
        <Tabs
          activeTab={activeTab}
          authBlock_index={authBlock_index}
          handleTabChange={handleTabChange}
        />

        <div ref={tabPanelRef}>
          {activeTab === authBlock_index.LOGIN_BLOCK && (
            <LogInForm
              formData={formData}
              handleChange={handleChange}
              errors={errors}
              handleSubmit={handleSubmit}
              signInWithGoogle={signInWithGoogle}
            />
          )}

          {activeTab === authBlock_index.REGISTRATION_BLOCK && (
            <SignUpForm
              formData={formData}
              handleChange={handleChange}
              errors={errors}
              handleSubmit={handleSubmit}
              signInWithGoogle={signInWithGoogle}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
LogIn.propTypes = {
  signInWithGoogle: PropTypes.func.isRequired, // Function to sign in with Google
};