import PropTypes from "prop-types";
import SignInWithGoogleBtn from "./SignInWithGoogleBtn";

const LogInForm = ({ formData, handleChange, errors, handleSubmit }) => {
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
          className="w-full mt-1 p-2 border rounded"
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
          className="w-full mt-1 p-2 border rounded"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <button className="text-blue-500 text-sm">Forgot Password?</button>
      </div>
      <div className="mb-4 text-red-500 text-sm">
        {/* Show only the first error */}
        {Object.values(errors)[0] && <div>{Object.values(errors)[0]}</div>}
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-primary text-white py-2 rounded mb-2"
      >
        Log In
      </button>
      <SignInWithGoogleBtn />
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
};

export default LogInForm;
