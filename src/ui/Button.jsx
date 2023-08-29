import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const className =
    "  uppercase bg-yellow-400 text-stone-800 font-semibold tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300  focus:ring-offset-2 disabled:cursor-not-allowed  ";

  const styles = {
    primary: className + " py-3 px-4 sm:px-6 sm:py-4",
    small: className + " py-2 px-4 sm:px-5 sm:py-2.5 text-xs ",
    secondary:
      " text-sm uppercase border-2 border-stone-300  text-stone-500 font-semibold tracking-wide rounded-full  transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-300 focus:bg-stone-300  focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-4 hover:bg-stone-300 hover:text-stone-800 sm:px-6 sm:py-3.5  ",
    rounded: className + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
export default Button;
