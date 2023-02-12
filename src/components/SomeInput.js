import { useState } from "react";

const SomeInput = props => {
  const [enteredName, setEnteredName] = useState("");
  const [wasNameInputTouched, setWasNameInputTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== "";
  const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;

  const nameInputChangeHandler = event => setEnteredName(event.target.value);
  const nameInputLostFocusHandler = event => {
    setWasNameInputTouched(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (!isEnteredNameValid) return;

    setEnteredName("");
    setWasNameInputTouched(false);
  };

  const nameInputClasses = isNameInputInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input
          onBlur={nameInputLostFocusHandler}
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
          value={enteredName}
        />
      </div>
      {isNameInputInvalid && <p className="error-text">Неверное имя</p>}
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
