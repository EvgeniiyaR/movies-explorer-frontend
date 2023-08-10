const Input = ({ type, name, placeholder, children, classNameLabel, classNameInput, label, value, required, min, max, disabled }) => {
  return (
    <label className={classNameLabel}>
      {label}
      <input className={classNameInput} type={type} name={name} placeholder={placeholder} value={value} required={required} min={min} max={max} disabled={disabled} />
      {children}
    </label>
  )
}

export default Input;
