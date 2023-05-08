import React, { useRef } from 'react';
import './OtpVerification.css'

const OtpVerfication = () => {
  const digit1Ref = useRef(null);
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const digit4Ref = useRef(null);
  const digit5Ref = useRef(null);
  const digit6Ref = useRef(null);

  const handleInput = (event, nextInputRef) => {
    const input = event.target.value;
    const isNumber = /^[0-9]+$/.test(input);
    if (!isNumber) {
      event.target.value = '';
      return;
    }
    if (nextInputRef) {
      nextInputRef.current.focus();
    } else {
      event.target.blur();
    }
  };

  const handleKeyDown = (event, prevInputRef) => {
    const key = event.key;
    if (key === 'Backspace') {
      event.preventDefault();
      event.target.value = '';
      if (prevInputRef) {
        prevInputRef.current.focus();
      }
    } else if (key === 'ArrowLeft' && prevInputRef) {
      prevInputRef.current.focus();
    } else if (key === 'ArrowRight' && event.target.nextElementSibling) {
      event.target.nextElementSibling.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text');
    if (/^[0-9]{6}$/.test(pastedText)) {
      digit1Ref.current.value = pastedText[0];
      digit2Ref.current.value = pastedText[1];
      digit3Ref.current.value = pastedText[2];
      digit4Ref.current.value = pastedText[3];
      digit5Ref.current.value = pastedText[4];
      digit6Ref.current.value = pastedText[5];
    }
  };

  return (
    <div className='input_field'>
      <input
        type="text"
        maxLength="1"
        ref={digit1Ref}
        onInput={(event) => handleInput(event, digit2Ref)}
        onKeyDown={(event) => handleKeyDown(event, null)}
        onPaste={handlePaste}
      />
      <input
        type="text"
        maxLength="1"
        ref={digit2Ref}
        onInput={(event) => handleInput(event, digit3Ref)}
        onKeyDown={(event) => handleKeyDown(event, digit1Ref)}
        onPaste={handlePaste}
      />
      <input
        type="text"
        maxLength="1"
        ref={digit3Ref}
        onInput={(event) => handleInput(event, digit4Ref)}
        onKeyDown={(event) => handleKeyDown(event, digit2Ref)}
        onPaste={handlePaste}
      />
      <input
        type="text"
        maxLength="1"
        ref={digit4Ref}
        onInput={(event) => handleInput(event, digit5Ref)}
        onKeyDown={(event) => handleKeyDown(event, digit3Ref)}
        onPaste={handlePaste}
      />
      <input
        type="text"
        maxLength="1"
        ref={digit5Ref}
        onInput={(event) => handleInput(event, digit6Ref)}
        onKeyDown={(event) => handleKeyDown(event, digit4Ref)}
        onPaste={handlePaste}
      />
      <input className='last_input'
        type="text"
        maxLength="1"
        ref={digit6Ref}
        onInput={(event) => handleInput(event, null)}
        onKeyDown={(event) => handleKeyDown(event, digit5Ref)}
        onPaste={handlePaste}
      />
    </div>
  );
};

export default OtpVerfication;
