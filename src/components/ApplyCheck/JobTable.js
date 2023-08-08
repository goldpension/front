const JobTable = ({ jobData }) => {
  return (
    <div>
      <table
        style={{
          border: "none",
          borderCollapse: "collapse",
          width: "800px",
          fontWeight: "bold",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <thead style={{ borderBottom: "2px solid #07236B" }}>
          <tr>
            <th style={{ padding: "10px" }}>구인상태</th>
            <th>직종</th>
            <th>기업</th>
            <th>근무지역</th>
          </tr>
        </thead>
        <tbody style={{ borderBottom: "2px solid #07236B" }}>
          {jobData.map((job, index) => (
            <tr key={index} style={{ borderBottom: "1px 80% solid #575757" }}>
              <td
                style={{
                  color: "#ffffff",
                  backgroundColor:
                    job.status === "구인 중"
                      ? "#2400FF"
                      : job.status === "구인 완료"
                      ? "#E89C31"
                      : "white",
                  borderRadius: "50px",
                }}
              >
                {job.status}
              </td>
              <td style={{ padding: "10px" }}>{job.jobType}</td>
              <td>{job.company}</td>
              <td>{job.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
