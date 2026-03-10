function CountryCard({ country }) {

  const { name, capital, population, region, flags } = country;

  return (
    <div className="border p-4 rounded shadow">

      <img src={flags.png} alt={name.common} width="150" />

      <h2>{name.common}</h2>

      <p>Capital: {capital}</p>

      <p>Population: {population}</p>

      <p>Region: {region}</p>

    </div>
  );
}

export default CountryCard