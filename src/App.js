import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import NotFound from './Components/Not Found/NotFound';
import Header from './Components/Header/Header';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/Posts/PostDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
        <Route path='/posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetails></PostDetails>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
