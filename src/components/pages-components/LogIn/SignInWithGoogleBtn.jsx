/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

const SignInWithGoogleBtn = ({ signInWithGoogle }) => {
  return (
    <button
      onClick={() => signInWithGoogle()}
      className="w-full bg-red-500 text-white py-2 rounded"
    >
      Sign In with Google
    </button>
  );
};

SignInWithGoogleBtn.propTypes = {
  signInWithGoogle: PropTypes.func.isRequired, // Function to sign in with Google
};

export default SignInWithGoogleBtn;
