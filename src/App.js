import Header from './Layout/Header/Header';
import Loading from 'features/Loading/Loading';
import { lazy, Suspense } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from 'routes';
import Footer from 'Layout/Footer/Footer';
// const Notfound = lazy(() => import('./components/Notfound/Notfound'))

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
