import useFetch from '../hooks/useFetch'
const useFetchComponent = () => {
  const [data] = useFetch('https://pokeapi.co/api/v2/pokemon/ditto')
  return (
    <div>
      {data ? (
        <img src={data.sprites.front_default} alt={data.species.name} />
      ) : (
        <p>Pokemon not found</p>
      )}
    </div>
  )
}

export default useFetchComponent
