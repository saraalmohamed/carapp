import React from 'react';

function Button(props) {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      {props.label}
    </button>
  );
}

export default Button;