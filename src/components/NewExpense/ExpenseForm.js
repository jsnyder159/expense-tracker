import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Below is the difference between multiple states vs singular states.

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Using a singular state
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // Using a singular state
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //Use this function if your new state depends on previous state.
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // setUserInput((prevState) => {
    //     return {
    //       ...prevState,
    //       enteredAmount: event.target.value,
    //     };
    //   });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // setUserInput((prevState) => {
    //     return {
    //       ...prevState,
    //       enteredDate: event.target.value,
    //     };
    //   });
  };

  const submitHandler = (event) => {
      event.preventDefault();
      
      const expenseData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate),
      };

      // Passing the information from Child to a Parent from point to function
      props.onSaveExpenseData(expenseData);
      
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
