import './UserLogOut.css';
import { logOut } from '../../Utilities/users-service';



export default function UserLogOut({ user }) {
  function handleLogOut() {
    logOut();
    // setUser(null);
  }

  return (
    <div className="UserLogOut">
      <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
    </div>
  );
}
