import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const { isLoading } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>

      <NavLink className={css.link} to="/tweets">
        Tweets
      </NavLink>

      {/* {isLoading && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )} */}
    </nav>
  );
};
