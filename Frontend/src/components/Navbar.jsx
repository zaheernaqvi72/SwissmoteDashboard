
import { Box, Card, CardContent, Typography,  Grid, IconButton } from '@mui/material';
import { Person } from '@mui/icons-material';
import { BarChart, LineChart, PieChart } from './Charts';
import ApplicantTable from './ApplicantTable';

function Dashboard() {
  return (
    <Box className="p-4 bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center mb-4">
        <Typography variant="h6" className="font-bold">
          Good Morning, Eugene Lynch
        </Typography>
        <IconButton className="text-white bg-black p-2 rounded-full">
          <Person />
        </IconButton>
      </header>

      <Grid container spacing={2}>
        {/* Stats Cards */}
        <Grid item xs={12} md={4}>
          <Card className="bg-yellow-100 shadow-lg">
            <CardContent>
              <Typography variant="subtitle1">Total Applicants</Typography>
              <Typography variant="h4">592</Typography>
              <Typography variant="body2" color="textSecondary">
                ↑ 25%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="bg-red-100 shadow-lg">
            <CardContent>
              <Typography variant="subtitle1">Interview Schedule</Typography>
              <Typography variant="h4">142</Typography>
              <Typography variant="body2" color="textSecondary">
                ↓ 10%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="bg-orange-100 shadow-lg">
            <CardContent>
              <Typography variant="subtitle1">Profile Visited</Typography>
              <Typography variant="h4">483</Typography>
              <Typography variant="body2" color="textSecondary">
                ↑ 30%
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Working Type Chart */}
        <Grid item xs={12} md={6}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="subtitle1">Working Type</Typography>
              <PieChart />
            </CardContent>
          </Card>
        </Grid>

        {/* Not Qualified Overview */}
        <Grid item xs={12} md={6}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="subtitle1">Not Qualified Overview</Typography>
              <LineChart />
            </CardContent>
          </Card>
        </Grid>

        {/* Applicants Table */}
        <Grid item xs={12}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="subtitle1">Applicants</Typography>
              <ApplicantTable />
            </CardContent>
          </Card>
        </Grid>

        {/* Impressions Bar Chart */}
        <Grid item xs={12}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="subtitle1">Impressions</Typography>
              <BarChart />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
