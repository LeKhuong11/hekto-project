import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from 'routes';
import './App.css';
import Header from './Layout/Header/Header';
import Footer from 'Layout/Footer/Footer';
import Loading from 'features/Loading/Loading';

function App() {
  
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
