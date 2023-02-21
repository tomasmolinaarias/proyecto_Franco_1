import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar bg-light ">
      <ul>
        <li>
          <NavLink
            to="/"
            className="text-dark rounded py-2 w-100 d-inline-block px-3"
          >
            <FaIcons.FaHome className="me-2" /> Métricas
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="/sales"
            className="text-dark rounded py-2 w-100 d-inline-block px-3"
          >
            <FaIcons.FaRegChartBar className="me-2" /> Grafico
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="/clients"
            className="text-dark rounded py-2 w-100 d-inline-block px-3"
          >
            <FaIcons.FaUserFriends className="me-2" /> Proyecciones
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
