import React, { useState } from 'react';
import { useCreateTaskMutation } from '../../generated/graphql';

interface IProps {
  onTaskCreated: () => void;
}

const CreateTaskInputComponent: React.FC<IProps> = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [createTask, { loading, error }] = useCreateTaskMutation({
    onCompleted: () => {
      onTaskCreated();
      setTitle('');
    }
  });

  const handleNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loading && title) {
      createTask({
        variables: {
          input: { title }
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <span>An error occured.</span>}
      <input
        name="newTask"
        value={title}
        type="text"
        placeholder="Type something..."
        onChange={handleNewTask}
        autoComplete="off"
      />
      <button disabled={loading} />
    </form>
  );
};

export default CreateTaskInputComponent;
