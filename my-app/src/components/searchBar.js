import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../App';

export default function SearchBar() {
  const { register, handleSubmit } = useForm();
  const { setSearchTerm } = useContext(AppContext);

  const onSubmit = (data) => {
    setSearchTerm(data.text);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('text')} />
      <button>Search</button>
    </form>
  );
}
