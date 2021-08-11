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
        <div className="upout">  
          {/* <label htmlFor="search"></label>
          <input type="text" value={} onChange={} /> */}
          &nbsp;&nbsp;<span>Welcome, {user.name}</span>
          {/* &nbsp;&nbsp;<Link to="/profile">Profile</Link> */}
          {/* &nbsp;&nbsp;<Link to="/upload">Upload</Link> */}
          &nbsp;&nbsp;<Link onClick={handleLogOut} to="">Log Out</Link>
        </div>  
      }
      <Logo />
    </nav>
  );
}
    