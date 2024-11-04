import PropTypes from "prop-types";

const JobCard = ({ job }) => (
  <div className="p-4 bg-white rounded-lg shadow-md mb-4">
    <h2 className="font-bold">{job.title}</h2>
    <p>{job.description}</p>
    <button className="btn mt-4">Apply</button>
  </div>
);

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobCard;
