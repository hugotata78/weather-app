
import './App.css';
import SearchBar from './components/SearchBar';
import Paragraph from './components/Paragraph';
import Swal from 'sweetalert2'
import { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from './components/Languages';
import { Route, Switch, useHistory } from 'react-router';
import { ContainerCity } from './page/containerCity';
import { ContainerCurrentData } from './page/containerCurrentdata';



const ContainerApp = () => {

  const [t, i18n] = useTranslation(['searchbar'])
  const [city, setCity] = useState('')
  const history = useHistory()

  const home = '/' || '/?lang=es' || '/?lang=en'
  const myLocation = '/my-location' || '/my-location?lang=es' || '/my-location?lang=en'
  const nameCity = '/:city' || '/:city?lang=es' || '/:city?lang=en'

  const handleChage = (e) => {
    setCity(e.target.value)
  }

  const onSearch = (e) => {
    e.preventDefault()
    if (city === '') {
      Swal.fire(t('msg-error'))
    } else {
      history.push(`/${city}`)
    }
  }


  const getInfoMyLocation = () => {
    history.push('/my-location')
  }


  const handleOnClick = (e) => {
    e.preventDefault()
    history.push('/')
    i18n.changeLanguage('es')
  }

  

  const handleOnClickEs = (e) => {
    e.preventDefault()
    i18n.changeLanguage('es')
    history.push(`${window.location.pathname}?lang=es`)
  }

  const handleOnClickEn = (e) => {
    e.preventDefault()
    i18n.changeLanguage('en')
    history.push(`${window.location.pathname}?lang=en`)
  }

  return (

    <div className='main'>
      <SearchBar
        onSearch={onSearch}
        getInfoMyLocation={getInfoMyLocation}
        handleChage={handleChage}
        handleOnClick={handleOnClick}
      />
      <div className="container">
        <Languages handleOnClickEs={handleOnClickEs} handleOnClickEn={handleOnClickEn} />
        <Switch>
          <Route exact path={home} component={Paragraph} />
          <Route path={myLocation} component={ContainerCurrentData} />
          <Route path={nameCity} component={ContainerCity} />
        </Switch>
      </div>
    </div>

  )
}

function App() {



  return (
    <Suspense fallback='Cargando Traducciones ....'>
      <ContainerApp />
    </Suspense>
  );
}

export default App;
