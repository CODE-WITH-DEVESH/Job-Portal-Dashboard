function JobCard(props) {
  return (
    <div>
      <h3>{props.title}</h3>

      <p>Company: {props.company}</p>

      <p>Location: {props.location}</p>

      <p>Salary: {props.salary}</p>

      <button onClick={props.onApply} disabled={props.isApplied}>
        {props.isApplied ? "Applied ✅" : "Apply"}
      </button>

      <hr />
    </div>
  );
}

export default JobCard;
