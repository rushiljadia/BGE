import React, { useState } from "react";

function DrugInfo() {
  const [drugName, setDrugName] = useState("");
  const [drugInfo, setDrugInfo] = useState(null);
  const [error, setError] = useState("");

  // Function to handle the form submit and fetch data from the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      const response = await fetch(`http://localhost:8080/drug-info/rxnorm?name=${drugName}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setDrugInfo(data); // Set the fetched drug data
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Search for Drug Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={drugName}
          onChange={(e) => setDrugName(e.target.value)}
          placeholder="Enter drug name"
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {drugInfo && (
        <div>
          <h3>Drug Information</h3>
          <pre>{JSON.stringify(drugInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default DrugInfo;
