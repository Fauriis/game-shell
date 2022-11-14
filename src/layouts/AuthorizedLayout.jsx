import { useSelector } from "react-redux";

export const AuthorizedLayout = ({ children }) => {
  const { authenticated } = useSelector(({auth}) => {
const {authenticated} = auth;

return {authenticated}
  });

  if (!authenticated){
    return <div className="p-4 text-center">Please log in first</div>
  }

  return <>{children}</>
};
