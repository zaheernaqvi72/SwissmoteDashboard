import { useEffect, useState } from 'react';
import { api } from '../services/api';

const CandidateManagement = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [replyMessage, setReplyMessage] = useState("");

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await api.getCandidates(); // Assuming an endpoint exists to fetch candidates
        setCandidates(response.data);
      } catch (err) {
        setError("Failed to fetch candidates. Please try again.", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  const handleReply = async (candidateId) => {
    try {
      await api.replyCandidate({ id: candidateId, message: replyMessage });
      alert("Reply sent successfully!");
      setReplyMessage(""); // Clear the reply message after sending
    } catch (err) {
      alert("Failed to send reply. Please try again.", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Candidate Management</h1>
      <div>
        {candidates.map((candidate) => (
          <div key={candidate.id} className="p-4 bg-white rounded-lg shadow-md mb-4">
            <h2 className="font-bold text-lg">{candidate.name}</h2>
            <p className="text-gray-600">Email: {candidate.email}</p>
            <textarea
              className="w-full border p-2 mt-2"
              placeholder="Type your reply here..."
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
            />
            <button
              onClick={() => handleReply(candidate.id)}
              className="btn mt-2"
            >
              Reply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateManagement;
