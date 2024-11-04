import axios from 'axios';

// const API_URL = 'https://api.trollgold.org/persistventures/assignment/docs';

// export const api = {
//   postFullTimeJob: () => axios.post(`${API_URL}/make_Job`),
//   postInternship: () => axios.post(`${API_URL}/make_Internship`),
//   postUnpaidInternship: () => axios.post(`${API_URL}/make_undpaid`),
//   getListings: () => axios.post(`${API_URL}/get_listings`),
//   automateListing: () => axios.post(`${API_URL}/automate_Listing`),
//   getAssignments: () => axios.post(`${API_URL}/getAssignments`),
//   addAssignment: (data) => axios.put(`${API_URL}/add_assignment`, data),
//   addReview: (data) => axios.put(`${API_URL}/add_review`, data),
//   announcement: (data) => axios.post(`${API_URL}/announcement`, data),
//   getMessages: () => axios.get(`${API_URL}/getMessage`),
//   setMessage: (message) => axios.post(`${API_URL}/setMessage`, { message }),
//   getUpdates: () => axios.get(`${API_URL}/getUpdates`),
//   replyToDaily: (data) => axios.post(`${API_URL}/reply_daily`, data),
//   getQuestions: () => axios.get(`${API_URL}/getQuestions`),
//   replyToQuestion: (data) => axios.post(`${API_URL}/reply_question`, data),
//   hireCandidate: (candidateId) => axios.post(`${API_URL}/hire_candidate`, { candidateId }),
//   getChat: () => axios.get(`${API_URL}/get_chat`),
//   sendMessage: (message) => axios.post(`${API_URL}/send_message`, { message })
// };

const API_URL = 'http://localhost:5000/api';

export const api = {
  postFullTimeJob: (data) => axios.post(`${API_URL}/jobs`, data),
  postInternship: (data) => axios.post(`${API_URL}/jobs`, data),
  postUnpaidInternship: (data) => axios.post(`${API_URL}/jobs`, data),
  getListings: () => axios.get(`${API_URL}/jobs`),
  automateListing: () => axios.post(`${API_URL}/jobs`),
  getAssignments: () => axios.get(`${API_URL}/assignments`),
  addAssignment: (data) => axios.post(`${API_URL}/assignments`, data),
  addReview: (data) => axios.post(`${API_URL}/reviews`, data),
  announcement: (data) => axios.post(`${API_URL}/announcements`, data),
  getMessages: () => axios.get(`${API_URL}/messages`),
  setMessage: (message) => axios.post(`${API_URL}/messages`, message),
  getUpdates: () => axios.get(`${API_URL}/dailyUpdates`),
  replyToDaily: (data) => axios.post(`${API_URL}/dailyUpdates`, data),
  getQuestions: () => axios.get(`${API_URL}/questions`),
  replyToQuestion: (data) => axios.post(`${API_URL}/questions`, data),
  hireCandidate: (candidateId) => axios.post(`${API_URL}/candidates`, { candidateId }),
  getChat: () => axios.get(`${API_URL}/chats`),
  sendMessage: (message) => axios.post(`${API_URL}/chats`, message)
};