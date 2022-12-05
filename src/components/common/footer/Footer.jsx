import { Link } from "react-router-dom";
import AuthorizedInline from "../../auth/AuthorizedInline";


export const Footer = () => {
  return (
    <div className="mx-auto container px-4 flex items-center justify-between">
      <span>Copyright</span>

      <ul>
        <AuthorizedInline>
          <li>
            <Link to="/profile" title="Profile">
              Profile
            </Link>
          </li>

          <li>
            <Link to="/play" title="Play">
              Play
            </Link>
          </li>
        </AuthorizedInline>

        <li>
          <Link to="/ranks" title="Ranks">
            Ranks
          </Link>
        </li>
      </ul>
    </div>
  );
};
