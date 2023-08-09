const Input = ({ type, name, placeholder, children, classNameLabel, classNameInput, label }) => {
  return (
    <label className={classNameLabel}>
      {label}
      <input className={classNameInput} type={type} name={name} placeholder={placeholder} />
      {children}
    </label>
  )
}

export default Input;
