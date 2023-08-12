const Input = ({ type, name, placeholder, children, classNameLabel, classNameInput, label, value, defaultValue, required, minlength, maxlength, disabled, tabIndex, onChange }) => {
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
        minlength={minlength}
        maxlength={maxlength}
        disabled={disabled}
        onChange={onChange} />
      {children}
    </label>
  )
}

export default Input;
