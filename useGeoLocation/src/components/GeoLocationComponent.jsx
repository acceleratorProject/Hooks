import useGeolocation from '../hooks/useGeoLocation'
const GeoLocationComponent = () => {
  const {
    data: { latitude, longitude }
  } = useGeolocation()
  return (
    <div>
      <p>
        Latitude: {latitude} | Longitude: {longitude}
      </p>
    </div>
  )
}

export default GeoLocationComponent
