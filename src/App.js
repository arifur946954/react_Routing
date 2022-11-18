
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Friend from './Component/Friend/Friend';
import Notfound from './Component/Notfound/Notfound';
import Header from './Component/Header/Header';
import FriendDetail from './Component/FriendDetail/FriendDetail';
import Post from './Component/Posts/Post';
import PostDetails from './Component/PostDetails/PostDetails';
import Country from './Component/Country/Country';
import CountryDetails from './Component/CountryDetails/CountryDetails';


function App() {
  return (
    <div className="App">
 <Header></Header>
   <Routes>
    <Route path="/" element={<Home></Home>}> </Route> 
      <Route path="/about" element={<About></About>}></Route>
      <Route path='/friend' element={<Friend></Friend>}></Route>
      <Route path='/friend/:friendID' element={<FriendDetail></FriendDetail>}></Route>
      <Route path='/post' element={<Post></Post>}>
        <Route path=':postId' element={<PostDetails></PostDetails>}></Route>
      </Route>
      <Route path='/country' element={<Country></Country>}> </Route>
      <Route path='/countries/:countrydetails' element={<CountryDetails></CountryDetails>}></Route>
     
      <Route path='*' element={<Notfound></Notfound>}></Route>

   
   </Routes>
    </div>
  );
}

export default App;
