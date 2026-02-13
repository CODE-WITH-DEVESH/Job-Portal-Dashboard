function AppliedJobs({ appliedJobs, handleRemove }) {

  return (
    <div>

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

export default AppliedJobs;