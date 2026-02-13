function Dashboard({ totalJobs, appliedCount, remainingJobs }) {
  return (
    <div>
      <h2>Dashboard</h2>

      <p>Total Jobs: {totalJobs}</p>

      <p>Applied Jobs: {appliedCount}</p>

      <p>Remaining Jobs: {remainingJobs}</p>
    </div>
  );
}

export default Dashboard;
