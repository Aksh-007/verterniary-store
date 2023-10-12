import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "../styles/CustomerDetails.css";
const CustomerDetails = () => {
  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/customer`);
      const data = await response.json();
      console.log(data);
      setEmpData(data);
    } catch (error) {
      console.log(`Error Occur ${error}`);
    }
  };

  //  Delete employee function
  // const deleteEmployee = async (id) => {
  //   try {
  //     if (window.confirm(`Do you want to delete the user?`)) {
  //       const response = await fetch(`http://localhost:8000/employee/${id}`, {
  //         method: "DELETE",
  //       });
  //       if (response.ok) {
  //         alert(`User with ID ${id} removed successfully.`);
  //         // Refresh the employee list after deletion
  //         fetchData();
  //       } else {
  //         alert("Failed to delete user.");
  //       }
  //     }
  //   } catch (error) {
  //     console.log(`Error in ${error}`);
  //   }
  // };

  return (
    <section className="customer-container">
      <div>
        <div>
          <h2 className="custom-h2">
            Customer <span>Listing</span>
          </h2>
        </div>
        <div className="card-body custom-card-body">
          {/* <div className="divbtn custom-divbtn">
            <Link
              to="/employee/create"
              className="custom-button custom-success-button"
            >
              Add Employee(+)
            </Link>
          </div> */}
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {empData.map((employee) => (
                <tr key={employee?.id}>
                  <td>{employee?.id}</td>
                  <td>{employee?.name}</td>
                  <td>{employee?.email}</td>
                  <td>{employee?.phone}</td>
                  {/* <td>
                    <Link
                      to={`/employee/edit/${employee.id}`}
                      className="custom-button custom-success-button mx-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteEmployee(employee.id)}
                      className="custom-button custom-danger-button mx-1"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/employee/details/${employee.id}`}
                      className="custom-button custom-primary-button mx-1"
                    >
                      Details
                    </Link>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CustomerDetails;
