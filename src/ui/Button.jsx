import { Link } from 'react-router';
// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, type, onclick }) {
  const base =
    'cursor-pointer text-sm rounded-full bg-yellow-400  font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 ease-in-out hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ';

  const styles = {
    primary: base + ' md:px-6 md:py-4 px-4 py-3',
    small: base + 'md:px-5 sm:py-2.5 px-4 py-2 text-xs',
    round: base + 'md:px-3.5 sm:py-2 px-2.5 py-1 text-sm ',
    secondary:
      'cursor-pointer text-sm rounded-full border border-stone-300 font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 ease-in-out hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed md:px-6 md:py-3.5 px-4 py-2.5',
  };

  if (onclick) {
    return (
      <button onClick={onclick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

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
