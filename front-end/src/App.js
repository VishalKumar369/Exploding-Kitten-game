import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import MainNavBar from './shared/components/MainNavBar';
import Home from './features/home/Home';
import LeaderBoard from './features/leader-Board/LeaderBoard';
import PlayGame from './features/play-ground/PlayGround';
import UserForm from './features/user/user-form/UserForm';
import store from './shared/applications/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store = {store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainNavBar />}>
              <Route index element={<Home />} />
              <Route path='user_form' element={<UserForm />} />
              <Route path='play' element={<PlayGame />} />
              <Route path='leader_board' element={<LeaderBoard />} />
            </Route>
            <Route path='*' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
