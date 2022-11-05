import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from 'routes';
import './App.css';
import Header from './Layout/Header/Header';
import Footer from 'Layout/Footer/Footer';
import Loading from 'features/Loading/Loading';
import { fetchApiAction } from 'action/fetchApiAction';
import { useDispatch} from 'react-redux'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fe21-db.herokuapp.com/hekto')
    .then(response => {
      return response.json();
    }) 
    .then(async (data) => {
      const action = fetchApiAction(data)
      dispatch(action)
      })
    }, [dispatch])
    
    
  return (
    <div className="App">
       <Header />
        
        <Suspense fallback={<Loading />}>
          <div className='app-body'>
              <Routes>
                {publicRoutes.map((route, index) => {
                  const Page = route.component;
                  return <Route key={index} path={route.path} element={<Page />} />
                }) }
              </Routes>
          </div>
        </Suspense>
       <Footer />
    </div>
  );
}

export default App;
