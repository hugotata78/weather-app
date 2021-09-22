import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeatherData } from './redux/actions';
import { useCallback, useEffect } from 'react';
import SearchBar from './components/SearchBar';

function App() {

  const dispatch = useDispatch()
  const current_data = useSelector(state => state.weatherReducers.current_data)

  const getLocation = useCallback((position) => {
    const { latitude, longitude } = position.coords
    dispatch(getCurrentWeatherData(latitude, longitude))
  }, [dispatch])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getLocation)
  }, [getLocation])

  return (
    <div>
      <SearchBar/>
      <div class="container">
        {current_data && <Card data={current_data} />}
      </div>
    </div>
  );
}

export default App;
