// import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredExpenseDate) => {
    const eventData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };

    props.onSubmitNewExpense(eventData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
