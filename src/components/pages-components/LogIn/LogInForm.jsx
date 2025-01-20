import PropTypes from "prop-types";
import SignInWithGoogleBtn from "./SignInWithGoogleBtn";

const LogInForm = ({ formData, handleChange, errors, handleSubmit,signInWithGoogle }) => {
  return (
    <div>
      <div className="mb-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded bg-transparent"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded bg-transparent"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <button className="text-sm text-primary hover:text-primary-500 font-semibold">
          Forgot Password?
        </button>
      </div>
      <div className="mb-4 text-red-500 text-sm">
        {/* Show only the first error */}
        {Object.values(errors)[0] && <div>{Object.values(errors)[0]}</div>}
      </div>
      <button
        onClick={handleSubmit}
        className="w-full py-2 rounded mb-2 border text-sm bg-primary text-white font-semibold"
      >
        Log In
      </button>
      <SignInWithGoogleBtn signInWithGoogle={signInWithGoogle}/>
    </div>
  );
};

LogInForm.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string),
  handleSubmit: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
};

export default LogInForm;
