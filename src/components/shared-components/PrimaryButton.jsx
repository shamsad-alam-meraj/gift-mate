import PropTypes from "prop-types";

const PrimaryButton = ({
  title = "Click Me",
  onClick = () => {},
  height = "50px",
  width = "150px",
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        height,
        width,
        backgroundColor: "#4635B1",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s",
      }}
      className="hover:bg-blue-600 focus:outline-none"
    >
      {title}
    </button>
  );
};

PrimaryButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default PrimaryButton;
