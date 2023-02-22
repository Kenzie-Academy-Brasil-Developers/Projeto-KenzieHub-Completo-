import React from "react";

const Input = ({label, id, type, name, error, register, placeholder}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        {...register(id)}
      />
      {error ? <p>{error}</p> : null}
    </div>
    
  );
};

export default Input;
