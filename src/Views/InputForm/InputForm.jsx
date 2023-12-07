import './InputForm.css';
import React, { useState } from "react";

function InputForm({setData}) {
  const initialFormState = {
    title: '',
    description: '',
    steps: '',
    actual: '',
    errors: {
      title: '',
      description: '',
      steps: '',
      actual: ''
    }
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {
      title: formState.title ? '' : 'Title is required',
      description: formState.description ? '' : 'Description is required',
      steps: formState.steps ? '' : 'Steps are required',
      actual: formState.actual ? '' : 'Actual result is required'
    };

    if (Object.values(errors).some(error => error)) {
      setFormState({ ...formState, errors });
      return;
    }

    const localStorageData = localStorage.getItem('formData');
    const storedFormData = JSON.parse(localStorageData || "[]");
    storedFormData.push(formState);
    localStorage.setItem('formData', JSON.stringify(storedFormData));
    setData(JSON.parse(localStorageData));
    setFormState(initialFormState);

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Bug Title:
          <input type="text" value={formState.title} onChange={e => setFormState({ ...formState, title: e.target.value })} />
          {formState.errors.title && <p>{formState.errors.title}</p>}
        </label>
        <label>
          Description:
          <textarea value={formState.description} onChange={e => setFormState({ ...formState, description: e.target.value })} />
          {formState.errors.description && <p>{formState.errors.description}</p>}
        </label>
        <label>
          Steps to Reproduce:
          <textarea value={formState.steps} onChange={e => setFormState({ ...formState, steps: e.target.value })} />
          {formState.errors.steps && <p>{formState.errors.steps}</p>}
        </label>
        <label>
          Actual Result:
          <textarea value={formState.actual} onChange={e => setFormState({ ...formState, actual: e.target.value })} />
          {formState.errors.actual && <p>{formState.errors.actual}</p>}
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default InputForm;