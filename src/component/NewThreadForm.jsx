import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function NewThreadForm({ onThreadSubmit }) {
  const [title, setTitle] = useInput('');
  const [category, setCategory] = useInput('');
  const [content, setContent] = React.useState('');

  const onContentChange = (event) => {
    setContent(event.target.innerHTML);
  };

  return (
    <form className="new-thread-form">
      <input type="text" placeholder="Title..." value={title} onChange={setTitle} />
      <input type="text" placeholder="Category..." value={category} onChange={setCategory} />
      <div className="div-editable" data-testid="content" contentEditable="true" onInput={onContentChange} />
      <button type="button" onClick={() => onThreadSubmit({ title, category, content })}>Create</button>
    </form>
  );
}

NewThreadForm.propTypes = {
  onThreadSubmit: PropTypes.func.isRequired,
};

export default NewThreadForm;
