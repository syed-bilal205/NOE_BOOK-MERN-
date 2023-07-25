import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Book = () => {
  const baseUrl = "http://localhost:4000/api/books";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = baseUrl;
        if (category) {
          url += `?category=${category}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("ERROR FETCHING DATA PLEASE TRY AGAIN LATER");
      }
    };
    fetchData();
  }, [category]);

  return (
    <>
      <div>
        <h1>Books</h1>

        <div className="filters">
          <label>Categories</label>
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">All</option>
            <option value="romance">Romance</option>
            <option value="science">Science</option>
            <option value="crime">Crime</option>
            <option value="food">Food</option>
            <option value="adventure">Adventure</option>
            <option value="thriller">Thriller</option>
            <option value="fiction">Fiction</option>
            <option value="other">other</option>
          </select>
        </div>

        {loading ? (
          <p>Loading......</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul className="books">
            {data.map((item) => (
              <li key={item._id}>
                <Link to={`/books/${item.slug}`}>
                  <img
                    src={`http://localhost:4000/uploads/${item.thumbnail}`}
                    alt={item.title}
                  />
                  <h3>{item.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Book;
