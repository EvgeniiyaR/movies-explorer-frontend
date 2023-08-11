const Input = ({ type, name, placeholder, children, classNameLabel, classNameInput, label, value, defaultValue, required, min, max, disabled, tabIndex, onChange }) => {
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
        defaultValue={defaultValue}
        value={value}
        required={required}
        min={min}
        max={max}
        disabled={disabled}
        onChange={onChange} />
      {children}
    </label>
  )
}

export default Input;
