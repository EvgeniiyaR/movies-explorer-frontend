const Input = ({
  type,
  name,
  placeholder,
  children,
  classNameLabel,
  classNameInput,
  label,
  value,
  required,
  minLength,
  maxLength,
  disabled,
  tabIndex,
  onChange,
  checked
}) => {
  return (
    <label
      className={classNameLabel}
      tabIndex={tabIndex} >
      {label}
      <input
        className={classNameInput}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        onChange={onChange}
        checked={checked} />
      {children}
    </label>
  )
}

export default Input;
