const PersonalInfo = ({ page, setPage, formData, setFormData }) => {
  const validate = (formData, page, setPage) => {
    if (!formData.firstName) {
      alert("First Name is required!")
      return
    }
    for (var i=0; i<formData.firstName.length; i++){
      if (!((formData.firstName[i]>="a" && formData.firstName[i] <="z") || (formData.firstName[i]>="A" && formData.firstName[i] <="Z"))) {
        alert("Invalid First Name Format")
        return
      }
    }
    if (!formData.lastName) {
      alert("Last Name is required!")
      return
    } 
    for (var i=0; i<formData.lastName.length; i++){
      if (!((formData.lastName[i]>="a" && formData.lastName[i] <="z") || (formData.lastName[i]>="A" && formData.lastName[i] <="Z"))) {
        alert("Invalid Last Name Format")
        return
      }
    }
    setPage(page + 1);
  };
  return (
      <div className="card">
        <h1>SignUp</h1>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
        <div className="firstButton">
        <button
        onClick={() => {
          {validate(formData,page,setPage)}
        }}>
        Next
      </button>
      </div>
      <div className="secondButton">
      <button
        onClick={() => {
          setPage(page-1)
        }}>
        Previous
      </button>
      </div>
      </div>
    );
  };
  
  export default PersonalInfo