import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from 'routes';
import Header from './Layout/Header/Header';
import Footer from 'Layout/Footer/Footer';
import { useDispatch } from 'react-redux'
import Loading from 'features/Loading/Loading';
import { data } from 'redux/dataSlice';
import './App.css';


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch('https://fe21-db.herokuapp.com/hekto')
    .then(response => {
      return response.json();
    }) 
    .then(async (dataList) => {
      
      dispatch(data(dataList))
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
