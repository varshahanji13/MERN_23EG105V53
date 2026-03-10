import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar.jsx";
import CountryList from "./components/CountryList.jsx";

function App() {

  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  // Fetch all countries
  useEffect(() => {
    async function getCountries() {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
        );

        const data = await res.json();
        setCountries(data);
      } catch (error) {
        setErr("Failed to fetch countries");
      } finally {
        setLoading(false);
      }
    }

    getCountries();
  }, []);

  // Filter countries
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <h2 className="text-center mt-10">Loading...</h2>;
  if (err) return <h2 className="text-center text-red-500">{err}</h2>;

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center font-bold mb-6">
        Country Explorer
      </h1>

      <SearchBar onSearch={setQuery} />

      <CountryList countries={filteredCountries} />
    </div>
  );
}

export default App;