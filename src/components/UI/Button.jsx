const Button = ({ children, className, ...restProps }) => {
  const style =
    "bg-primary hover:bg-secondary text-white hover:font-bold py-2 px-4 rounded";
  const classes = className ? style + " " + className : style;

  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
