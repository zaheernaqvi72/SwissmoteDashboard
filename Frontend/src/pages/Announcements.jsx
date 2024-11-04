import { useState } from 'react';
import { api } from '../services/api';

const Announcements = () => {
  const [announcement, setAnnouncement] = useState("");

  const handlePost = () => {
    api.announcement({ message: announcement });
    setAnnouncement("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Announcements</h1>
      <textarea
        value={announcement}
        onChange={(e) => setAnnouncement(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        rows="4"
      />
      <button onClick={handlePost} className="btn">Post Announcement</button>
    </div>
  );
};

export default Announcements;
