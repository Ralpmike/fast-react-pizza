import { Link } from 'react-router';
// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, type }) {
  const base =
    'cursor-pointer rounded-full bg-yellow-400  font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 ease-in-out hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ';

  const styles = {
    primary: base + ' md:px-6 md:py-4 px-4 py-3',
    small: base + 'md:px-5 sm:py-2.5 px-4 py-2 text-xs',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
