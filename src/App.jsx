import { useState } from "react";
import Navbar from "./components/navbar";
import JobCard from "./components/JobCard";
import jobsData from "./data/jobsData";

function App() {

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [searchText, setSearchText] = useState("");


  const totalJobs = jobsData.length;
  const appliedCount = appliedJobs.length;
  const remainingJobs = totalJobs - appliedCount;

 
  function handleApply(job) {

    const alreadyApplied = appliedJobs.find(
      (item) => item.id === job.id
    );

    if (alreadyApplied) {
      alert("You already applied for this job");
      return;
    }

    setAppliedJobs([...appliedJobs, job]);

  }

  function handleRemove(jobId) {

    const updatedJobs = appliedJobs.filter(
      (job) => job.id !== jobId
    );

    setAppliedJobs(updatedJobs);

  }


  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>

    
      <Navbar />

   
      <h2>Dashboard</h2>

      <div>
        <p>Total Jobs: {totalJobs}</p>
        <p>Applied Jobs: {appliedCount}</p>
        <p>Remaining Jobs: {remainingJobs}</p>
      </div>



      <input
        type="text"
        placeholder="Search Jobs..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />


      
      <h2>Available Jobs</h2>

      {filteredJobs.map((job) => (

        <JobCard
          key={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          salary={job.salary}
          onApply={() => handleApply(job)}
          isApplied={appliedJobs.some(
            (item) => item.id === job.id
          )}
        />

      ))}



      <h2>Applied Jobs List</h2>

      {appliedJobs.length === 0 ? (
        <p>No jobs applied yet</p>
      ) : (
        appliedJobs.map((job) => (

          <div key={job.id}>

            <p>
              {job.title} - {job.company}

              <button
                onClick={() => handleRemove(job.id)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>

            </p>

          </div>

        ))
      )}

    </div>
  );
}

export default App;