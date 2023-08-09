const Input = ({ type, name, placeholder, children, classNameLabel, classNameInput, label, value, required, min, max }) => {
  return (
    <label className={classNameLabel}>
      {label}
      <input className={classNameInput} type={type} name={name} placeholder={placeholder} value={value} required={required} min={min} max={max} />
      {children}
    </label>
  )
}

export default Input;
