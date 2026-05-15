import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-between px-10 items-center bg-purple-200 py-5">
      <img className="rounded-full" width="80px" src="https://tse1.mm.bing.net/th/id/OIP.srNFFzORAaERcWvhwgPzVAHaHa?pid=Api&P=0&h=180" alt="" />
      <ul className="flex gap-6 text-2xl">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "bg-purple-500 text-lime-50 rounded-xl p-2 shadow" : "")}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/adduser"
            className={({ isActive }) => (isActive ? "bg-purple-500 text-lime-50 rounded-2xl p-2" : "")}
          >
            AddUser
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/userslist"
            className={({ isActive }) => (isActive ? "bg-purple-500 text-lime-50 rounded-2xl p-2" : "")}
          >
            UsersList
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;