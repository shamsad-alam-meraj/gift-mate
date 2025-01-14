import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";

const ProductsPagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <Button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-4"
      >
        Previous
      </Button>
      <span className="text-sm font-medium">{`Page ${currentPage} of ${totalPages}`}</span>
      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4"
      >
        Next
      </Button>
    </div>
  );
};

ProductsPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default ProductsPagination;
