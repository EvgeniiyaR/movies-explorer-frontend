const Button = ({ className, type, text, children, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
      {children}
    </button>
  )
}

export default Button;
