import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import CustomCursor from './components/Global/Cursor/CustomCursor';
import { IoIosArrowUp } from "react-icons/io";
import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import HOME1 from './components/Home1/Home1';
import Movie from './components/Movie/Movie';
import TvShow from './components/TvShow/TvShow';
import Contact from './components/Contact/Contact';
import Register from './components/SignUp/Register';
import Login from './components/SignUp/Login';
import PrivateRouting from './components/PrivateRouting/PrivateRouting';
import Profile from './components/Profile/Profile';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Review from './components/Review/Review';
import MovieListCat from './components/MovieListCat/MovieListCat';
import TvShowDetail from './components/TvShowDetail/TvShowDetail';
import useAutoRefresh from './components/Global/AutoRefresh/AutoRefresh';
import WatchList from './components/Global/WatchList/WatchList';
import NotFound from './components/Global/NotFound/NotFound';
import UpdateProfile from './components/Profile/UpdateProfile';


function App() {
  useAutoRefresh();
  const scrollref = useRef();

  window.onscroll = function () {
    let height = document.documentElement.scrollTop
    if (height > 90) {
      scrollref.current.style.opacity = "1";
    } else {
      scrollref.current.style.opacity = "0";
    }
  }

  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      <div style={{ position: "relative" }}>
        <CustomCursor />

        <Routes>
          <Route index element={<HOME1 />} />
          <Route path='/index' element={<HOME1 />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<PrivateRouting />}>
            <Route path='/home' element={<Home />} />
            <Route path='/movie' element={<Movie />} />
            <Route path='/movieDetail/:name' element={<MovieDetail />} />
            <Route path='/tvshowDetail/:name' element={<TvShowDetail />} />
            <Route path='/tvshow' element={<TvShow />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/updprofile/:username' element={<UpdateProfile />} />
            <Route path='/review' element={<Review />} />
            <Route path='/movielistcat/:genre' element={<MovieListCat />} />
            <Route path='/watchlist' element={<WatchList />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>


        <div ref={scrollref} onClick={scrollup} style={{ width: "50px", height: "50px", background: "linear-gradient(to right, #A80D65 0%, #871ABB 50%, #A80D65 100%)", position: "fixed", bottom: "3%", right: "3%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "30px", borderRadius: "10px", color: "white", opacity: "0" }}><IoIosArrowUp /></div>
      </div>
    </>
  )
}

export default App
