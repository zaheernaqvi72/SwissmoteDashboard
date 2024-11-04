import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const applicants = [
  { id: 1, name: 'William Olguin', role: 'UI Designer', status: 'Full Time', date: '06.05.2024' },
  { id: 2, name: 'Nicolas Williamson', role: 'Mobile Dev', status: 'Part Time', date: '07.05.2024' },
  { id: 3, name: 'Sara Cunningham', role: 'HTML Dev', status: 'Part Time', date: '08.05.2024' },
  { id: 4, name: 'Laurel Lawson', role: 'UX Designer', status: 'Full Time', date: '09.05.2024' },
];

function ApplicantTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {applicants.map((applicant) => (
            <TableRow key={applicant.id}>
              <TableCell>{applicant.id}</TableCell>
              <TableCell>{applicant.name}</TableCell>
              <TableCell>{applicant.role}</TableCell>
              <TableCell>{applicant.status}</TableCell>
              <TableCell>{applicant.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ApplicantTable;
