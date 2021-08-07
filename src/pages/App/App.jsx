import { useState } from 'react';
// import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
// import AuthPage from '../AuthPage/AuthPage';
import Home from '../Home/Home'
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Home />
      {/* { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/orders/new">
              <NewOrderPage />
            </Route>
            <Route path="/orders">
              <OrderHistoryPage />
            </Route>
            <Redirect to="/orders" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      } */}
    </main>
  );
}