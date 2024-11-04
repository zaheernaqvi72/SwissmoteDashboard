import { useEffect, useState } from 'react';
import { api } from '../services/api';
import AssignmentCard from '../components/AssigmentCard';

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await api.getAssignments();
        setAssignments(response.data);
      } catch (err) {
        setError("Failed to fetch assignments. Please try again.", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Assignments</h1>
      {assignments.map((assignment, idx) => (
        <AssignmentCard key={idx} assignment={assignment} />
      ))}
    </div>
  );
};

export default Assignments;
