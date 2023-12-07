import react from 'react';
import './index.css';
import React, { useState } from "react";

function InputForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [steps, setSteps] = useState('');
  const [actual, setActual] = useState('');

  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [stepsError, setStepsError] = useState('');
  const [actualError, setActualError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const titleError = title ? '' : 'Title is required';
    const descriptionError = description ? '' : 'Description is required';
    const stepsError = steps ? '' : 'Steps are required';
    const actualError = actual ? '' : 'Actual result is required';
  
    setTitleError(titleError);
    setDescriptionError(descriptionError);
    setStepsError(stepsError);
    setActualError(actualError);

    if (titleError || descriptionError || stepsError || actualError) {
      return;
    }
  
    const storedFormData = JSON.parse(localStorage.getItem('formData') || "[]");
    const formData = { title, description, steps, actual };
    storedFormData.push(formData);
  
    localStorage.setItem('formData', JSON.stringify(storedFormData));
  
    console.log('Bug Report:', title, description, steps, actual);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Bug Title:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
          {titleError && <p>{titleError}</p>}
        </label>
        <label>
          Description:
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
          {descriptionError && <p>{descriptionError}</p>}
        </label>
        <label>
          Steps to Reproduce:
          <textarea value={steps} onChange={e => setSteps(e.target.value)} />
          {stepsError && <p>{stepsError}</p>}
        </label>
        <label>
          Actual Result:
          <textarea value={actual} onChange={e => setActual(e.target.value)} />
          {actualError && <p>{actualError}</p>}
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default InputForm;