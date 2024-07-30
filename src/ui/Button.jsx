function Button({ children, disabled, type }) {
  const base =
    ' bg-yellow-400 text-stone-800  uppercase font-semibold  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-all disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' w-44 p-2',
    small: base + ' w-32 p-1  ',
    secondary: 'w-32 p-2 text-sm border border-2 border-stone-200 rounded-full uppercase hover:bg-stone-200 transition-all'
  };

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
