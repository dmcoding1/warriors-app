import { useState } from 'react';

const useForm = submitHandler => {
  const [state, setState] = useState({});

  const handleChange = e => {
    e.persist();
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitHandler();
  };

  const handleCancel = e => {
    e.preventDefault();
    setState({});
  };

  return [state, handleChange, handleSubmit, handleCancel];
};

export default useForm;
