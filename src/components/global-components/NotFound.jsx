import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg mt-2">
         {`The page you're looking for doesn't exist or has been moved.`}
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
