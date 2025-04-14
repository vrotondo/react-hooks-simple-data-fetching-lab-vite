import React, { useState, useEffect } from "react";

function App() {
    const [dogImage, setDogImage] = useState(null); // State to store the dog image URL
    const [loading, setLoading] = useState(true); // State to handle loading status

    // Fetch a random dog image when the component mounts
    useEffect(() => {
        fetchDogImage();
    }, []);

    // Function to fetch a random dog image
    const fetchDogImage = async () => {
        setLoading(true); // Set loading to true before fetching
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            setDogImage(data.message); // Update state with the image URL
        } catch (error) {
            console.error("Error fetching dog image:", error);
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Random Dog Image</h1>
            {loading ? (
                <p>Loading...</p> // Display loading message while fetching
            ) : (
                <img
                    src={dogImage}
                    alt="A Random Dog"
                    style={{ width: "300px", height: "300px", objectFit: "cover" }}
                />
            )}
            <br />
            <button onClick={fetchDogImage} style={{ marginTop: "20px" }}>
                Fetch New Dog
            </button>
        </div>
    );
}

export default App;