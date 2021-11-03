
import './App.css';
import SearchBar from './components/SearchBar';
import Paragraph from './components/Paragraph';
import Swal from 'sweetalert2'
import { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch, useHistory } from 'react-router';
import { ContainerCity } from './page/containerCity';
import { ContainerCurrentData } from './page/containerCurrentdata';




const ContainerApp = () => {

  const [t, i18n] = useTranslation(['searchbar'])
  const [city, setCity] = useState('')
  const history = useHistory()

  const handleChage = (e) => {
    setCity(e.target.value)
  }

  console.log(window.location.pathname)
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
    
  }

  const handleOnClickEn = (e) => {
    e.preventDefault()
    i18n.changeLanguage('en')
    
  }

  return (

    <div className='main'
    onClick={console.log('hiciste click')}
    >
      <SearchBar
        onSearch={onSearch}
        getInfoMyLocation={getInfoMyLocation}
        handleChage={handleChage}
        handleOnClickEn={handleOnClickEn}
        handleOnClickEs={handleOnClickEs}
      />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Paragraph} />
          <Route path='/my-location' component={ContainerCurrentData} />
          <Route path='/:city' component={ContainerCity} />
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
