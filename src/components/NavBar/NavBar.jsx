import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import Logo from '../Logo/Logo';

// Not destructuring props this time
export default function NavBar({user, setUser}) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      { !user ?
        <>
          <Link to="/login">Login</Link>
          &nbsp; | &nbsp;
          <Link to="/signup">Sign Up</Link>
        </>  
      :
        <>  
          &nbsp;&nbsp;<span>Welcome, {user.name}</span>
          &nbsp;&nbsp;<Link onClick={handleLogOut} to="">Log Out</Link>
        </>  
      }
      <Logo />
    </nav>
  );
}
    