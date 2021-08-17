import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AboutPage from '../AboutPage/AboutPage';
import HomePage from '../HomePage/HomePage';
import LoginForm from '../../components/LoginForm/LoginForm';
import NavBar from '../../components/NavBar/NavBar';
import ProfilePage from '../ProfilePage/ProfilePage';
import UploadPage from '../UploadPage/UploadPage';
import BookmarkPage from '../BookmarkPage/BookmarkPage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route path="/signup">
          <AuthPage setUser={setUser} />
        </Route>
        <Route path="/login">
          <LoginForm setUser={setUser} />
        </Route>
        <Route exact path="/">
          <AboutPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/upload">
          <UploadPage />
        </Route>
        <Route path="/editprofile">
          <EditProfilePage />
        </Route>
        <Route path="/bookmark">
          <BookmarkPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
  );
}