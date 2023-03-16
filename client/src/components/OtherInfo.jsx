

const OtherInfo = ({ page, setPage, formData, setFormData }) => {
  const validate = (formData, page, setPage) => {
    if (!formData.department) {
      alert("Department is required!")
      return
    }
    for (var i=0; i<formData.department.length; i++){
      if (!((formData.department[i]>="a" && formData.department[i] <="z") || (formData.department[i]>="A" && formData.department[i] <="Z"))) {
        alert("Invalid Department Format")
        return
      }
    }
    if (!formData.semester) {
      alert("Semester is required!")
      return
    }
    if (!((formData.semester>=1 && formData.semester <=8))) {
      alert("Invalid Semester")
      return
    }
    if (!formData.cgpa) {
      alert("CGPA is required!")
      return
    } 
    if (!((formData.cgpa>=1 && formData.cgpa <=4))) {
      alert("Invalid CGPA")
      return
    }
    setPage(page + 1);
  };
  return (
      <div className="card">
        <h1>SignUp</h1>
        <input
          type="text"
          placeholder="Department" 
          value={formData.department}
          onChange={(e) =>
            setFormData({ ...formData, department: e.target.value })
          }
        />
        <input
          type="number"
          min={1}
          max={8}
          placeholder="Semester"
          value={formData.semester}
          onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
        />
        <input
          type="number"
          min={1}
          max={4}
          placeholder="CGPA"
          value={formData.cgpa}
          onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })}
        />
        <div className="firstButton">
        <button onClick={() => {
          setPage(page + 1);
        }}>
        Submit
      </button>
      </div>
      <div className="secondButton">
      <button
        onClick={() => {
          setPage(page - 1);
        }}>
        Previous
      </button>
      </div>
      </div>
    );
  };
  
  export default OtherInfo;