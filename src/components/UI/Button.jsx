const Button = ({ children, className, ...restProps }) => {
  const style =
    "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded";
  const classes = className ? style + " " + className : style;

  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
