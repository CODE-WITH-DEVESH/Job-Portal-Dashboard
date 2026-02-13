import JobCard from "./JobCard";

function JobList({ jobs, handleApply, appliedJobs }) {
  return (
    <div>
      <h2>Available Jobs</h2>



      {jobs.map((job) => (
        <JobCard
          key={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          salary={job.salary}
          onApply={() => handleApply(job)}
          isApplied={appliedJobs.some((item) => item.id === job.id)}
        />
      ))}
    </div>
  );
}

export default JobList;
