
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeatherData, getWeatherByCity } from './redux/actions';
import SearchBar from './components/SearchBar';
import CardCurrentData from './components/CardCurrentData';
import CardDataCity from './components/CardDataCity';
import Paragraph from './components/Paragraph';
import Swal from 'sweetalert2'
import CardLoading from './components/CardLoading';
import CardError from './components/CardError';

function App() {

  const dispatch = useDispatch()
  const current_data = useSelector(state => state.weatherReducers.current_data)
  const data_by_city = useSelector(state => state.weatherReducers.data_by_city)
  const error = useSelector(state => state.weatherReducers.error)
  const loading = useSelector(state => state.weatherReducers.loading)

  const onSearch = (e, city) => {
    e.preventDefault()
    city === '' ?
      Swal.fire('Enter data to make the query')
      :
      dispatch(getWeatherByCity(city))
  }


  const getLocation = position => {
    const { latitude, longitude } = position.coords
    dispatch(getCurrentWeatherData(latitude, longitude))
  }

  const getCurrentData = (e) => {
    e.preventDefault()
    navigator.geolocation.getCurrentPosition(getLocation)
  }

  return (
    <div>
      <SearchBar onSearch={onSearch} getCurrentData={getCurrentData} />
      <div className="container">
        {!current_data && !data_by_city && !error && !loading && <Paragraph />}
        {current_data && <CardCurrentData data={current_data} />}
        {loading && <CardLoading />}
        {data_by_city && <CardDataCity data={data_by_city} />}
        {error && <CardError />}
      </div>
    </div>
  );
}

export default App;
