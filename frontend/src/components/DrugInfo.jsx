import React, { useState } from "react"; // Importing React and the useState hook
import axios from "axios"; // Importing Axios for making HTTP requests

function DrugInfo() {
  // State to hold the drug name input by the user
  const [drugName, setDrugName] = useState("");
  // State to hold the fetched drug information
  const [drugInfo, setDrugInfo] = useState(null);
  // State to hold any error messages during the fetch process
  const [error, setError] = useState("");

  // Function to handle the form submission and fetch drug data from the backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setError(""); // Clear any previous error messages

    try {
      // Making a GET request to the backend API using Axios
      const response = await axios.get(`http://localhost:8080/drug-info/rxnorm`, {
        params: { name: drugName }, // Sending the drug name as a query parameter
      });

      // Setting the fetched drug data in state
      setDrugInfo(response.data);
    } catch (err) {
      // Handling errors that occur during the request
      // If there's a response from the server, use that; otherwise, show the error message
      setError(err.response ? err.response.data : err.message);
    }
  };

  return (
    <div>
      <h2>Search for Drug Information</h2>
      {/* Form to search for drug information */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={drugName} // Binding the input value to the state
          onChange={(e) => setDrugName(e.target.value)} // Updating state on input change
          placeholder="Enter drug name" // Placeholder text for the input
        />
        <button type="submit">Search</button> {/* Button to submit the form */}
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message if exists */}

      {drugInfo && (
        <div>
          <h3>Drug Information</h3>
          {/* Displaying the fetched drug information in a formatted way */}
          <pre>{JSON.stringify(drugInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default DrugInfo;
