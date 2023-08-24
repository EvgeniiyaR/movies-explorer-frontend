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
  checked,
  onFocus,
  onBlur,
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
        checked={checked}
        onFocus={onFocus}
        onBlur={onBlur} />
      {children}
    </label>
  )
}

export default Input;
