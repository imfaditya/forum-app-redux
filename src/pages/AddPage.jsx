import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import loadable from '@loadable/component';
import { asyncAddThread } from '../states/threads/action';

const NewThreadForm = loadable(() => import('../component/NewThreadForm'));

function AddPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onThreadSubmit = ({ title, category, content }) => {
    dispatch(asyncAddThread({ title, category, content }));
    navigate('/');
  };

  return (
    <section className="new-thread">
      <h2>Create New Thread</h2>
      <NewThreadForm onThreadSubmit={onThreadSubmit} />
    </section>
  );
}

export default AddPage;
