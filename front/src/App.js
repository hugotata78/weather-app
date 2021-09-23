
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeatherData, getWeatherByCity } from './redux/actions';
import SearchBar from './components/SearchBar';
import CardCurrentData from './components/CardCurrentData';
import CardDataCity from './components/CardDataCity';
import Paragraph from './components/Paragraph';
import Swal from 'sweetalert2'

function App() {

  const dispatch = useDispatch()
  const current_data = useSelector(state => state.weatherReducers.current_data)
  const data_by_city = useSelector(state => state.weatherReducers.data_by_city)

  const onSearch = (e, city) => {
    e.preventDefault()
    city === '' ?
      Swal.fire('Enter data to make the query')
      :
      Swal.fire({
        title: 'Please Wait !',
        html: 'data uploading',// add html attribute if you want or remove
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading()
        },
      });
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
        {!current_data && !data_by_city && <Paragraph />}
        {current_data && <CardCurrentData data={current_data} />}
        {data_by_city && <CardDataCity data={data_by_city} />}
      </div>
    </div>
  );
}

export default App;
