
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './component/movies/home/home';

import Nopage from './component/movies/nopages';
import Detailpage from './component/movies/details/detailpage';
import Popular from './component/movies/popular/popular';
import Upcoming from './component/movies/upcoming/upcoming';
import Toprated from './component/movies/toprated/toprated';
import TvDetailpage from './component/movies/details/tvdetail';

function App() {
  return (
    <div className='App'>
       <BrowserRouter>
        <Routes>
          <Route path='/' >
            <Route index element={<Home/>}/>
            <Route path="movie/:id" element={<Detailpage />} />
            <Route path="movies/popular" element={<Popular/>} />
            <Route path="movies/upcoming" element={<Upcoming />} />
            <Route path="movies/toprated" element={<Toprated />} />
            <Route path="series/:id" element={<TvDetailpage />} />
            <Route path='*' element={<Nopage/>}/>
          </Route>
        </Routes>
       </BrowserRouter>
       
    </div>
  );
}

export default App;
