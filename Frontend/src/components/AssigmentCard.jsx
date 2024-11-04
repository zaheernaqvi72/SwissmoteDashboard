import PropTypes from "prop-types";

const AssignmentCard = ({ assignment }) => (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold">{assignment.title}</h2>
      <p className="text-gray-700">{assignment.description}</p>
    </div>
  );

AssignmentCard.propTypes = {
    assignment: PropTypes.object.isRequired,
  };
  
  export default AssignmentCard;
  