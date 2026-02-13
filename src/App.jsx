import { useState, useEffect } from "react";

import Navbar from "./components/navbar";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";
import AppliedJobs from "./components/Applied";

function App() {
  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);

  const [appliedJobs, setAppliedJobs] = useState(() => {
    const savedJobs = localStorage.getItem("appliedJobs");

    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function loadJobs() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await res.json();

        const jobData = data.map((user) => ({
          id: user.id,
          title: "Frontend Developer",
          company: user.company.name,
          location: user.address.city,
          salary: "5 LPA",
        }));

        setJobs(jobData); // ✅ FIXED
        setLoading(false);
      } catch (err) {
        console.log("Error loading jobs");
      }
    }

    loadJobs();
  }, []);

  useEffect(() => {
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
  }, [appliedJobs]);

  function handleApply(job) {
    const alreadyApplied = appliedJobs.find((item) => item.id === job.id);

    if (alreadyApplied) {
      alert("Already applied");
      return;
    }

    setAppliedJobs([...appliedJobs, job]);
  }

  function handleRemove(jobId) {
    const updatedJobs = appliedJobs.filter((job) => job.id !== jobId);

    setAppliedJobs(updatedJobs);
  }

  const filteredJobs = jobs.filter(
    (
      job, // ✅ FIXED
    ) => job.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const totalJobs = jobs.length; // ✅ FIXED
  const appliedCount = appliedJobs.length;
  const remainingJobs = totalJobs - appliedCount;

  return (
    <div>
      <Navbar />

      <Dashboard
        totalJobs={totalJobs}
        appliedCount={appliedCount}
        remainingJobs={remainingJobs}
      />

      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      {loading ? (
        <h3>Loading jobs...</h3>
      ) : (
        <JobList
          jobs={filteredJobs}
          handleApply={handleApply}
          appliedJobs={appliedJobs}
        />
      )}

      <JobList
        jobs={filteredJobs}
        handleApply={handleApply}
        appliedJobs={appliedJobs}
      />

      <AppliedJobs appliedJobs={appliedJobs} handleRemove={handleRemove} />
    </div>
  );
}

export default App;
