import { Link } from "react-router-dom";

function Button({ children, disabled, type, to, onClick }) {
  const base =
    " bg-yellow-400 text-stone-800  uppercase font-semibold  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-all disabled:cursor-not-allowed";

  const styles = {
    primary: base + " w-auto p-3",
    small: base + " w-auto p-3 text-sm  ",
    plusMinus: base + ' w-8 p-1' ,
    secondary:
      "w-32 p-2 text-sm border border-2 border-stone-200 rounded-full uppercase hover:bg-stone-200 transition-all",
  };

  if (to)
    return (
      <Link to={to} disabled={disabled} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick}  disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
