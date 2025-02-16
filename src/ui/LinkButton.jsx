/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const clasNames = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';

  if (to === '-1')
    return (
      <button onClick={() => navigate(-1)} className={clasNames}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={clasNames}>
      {children}
    </Link>
  );
}

export default LinkButton;
