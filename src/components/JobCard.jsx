function JobCard(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.company}</p>
            <p>{props.location}</p>
            <p>{props.salary}</p>
            <button
                onClick={props.onApply}
                disabled={props.isApplied}
            >
                {props.isApplied ? "Applied ✅" : "Apply"}
            </button>
            
            <hr />
        </div>
    );
}

export default JobCard;