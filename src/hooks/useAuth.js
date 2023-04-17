import { useSelector } from "react-redux";
import { userSelector, selectLoading } from "../redux/userSelector";

export const useAuth = () => {
   const isLoading = useSelector(selectLoading);
  // const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(userSelector);

  return {
    isLoading,
    // isRefreshing,
    user,
  };
};
