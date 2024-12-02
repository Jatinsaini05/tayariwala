import React, { useEffect, useState } from "react";

const SimpleFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Test both API endpoints
  const API_HOST_1 = "https://ihub.masterlearners.in";
  const API_HOST_2 = "https://v3.edkt.net";
  const API_KEY = "/api/s/frontpage/__home";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // First attempt with the first API
        let response = await fetch(`${API_HOST_1}${API_KEY}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        // If the first attempt fails, try the second API
        if (!response.ok) {
          response = await fetch(`${API_HOST_2}${API_KEY}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>API Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default SimpleFetch;