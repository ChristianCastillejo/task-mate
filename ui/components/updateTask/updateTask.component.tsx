import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { useUpdateTaskMutation, Task } from '../../generated/graphql';

interface IProps {
  task: Task;
}

const UpdateTaskComponent: React.FC<IProps> = ({ task }) => {
  const router = useRouter();

  const [title, setTitle] = useState(task?.title);

  const [updateTask, { loading, error }] = useUpdateTaskMutation({
    onCompleted: () => {
      router.push('/');
    },
  });

  const handleUpdateTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loading && title) {
      updateTask({
        variables: {
          input: { id: task.id, title },
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleUpdateTask} />
      <button disabled={loading} type="submit" />
    </form>
  );
};

export default UpdateTaskComponent;
