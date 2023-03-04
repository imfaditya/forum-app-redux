import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { asyncAddThread } from '../states/threads/action';

function NewThreadForm() {
  const [title, setTitle] = useInput('');
  const [category, setCategory] = useInput('');
  const [content, setContent] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onContentChange = (event) => {
    setContent(event.target.innerHTML);
  };

  const onThreadSubmit = (event) => {
    event.preventDefault();
    dispatch(asyncAddThread({ title, category, content }));
    navigate('/');
  };

  return (
    <form className="new-thread-form" onSubmit={onThreadSubmit}>
      <input type="text" placeholder="Title..." value={title} onChange={setTitle} />
      <input type="text" placeholder="Category..." value={category} onChange={setCategory} />
      <div className="div-editable" contentEditable="true" onInput={onContentChange} />
      <button type="submit">Create</button>
    </form>
  );
}

export default NewThreadForm;
