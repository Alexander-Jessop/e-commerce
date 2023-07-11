const Card = ({ children, className }) => {
  const style = "shadow-lg mx-auto rounded-lg p-6";
  const classes = className ? style + " " + className : style;
  return <div className={classes}>{children}</div>;
};

export default Card;
