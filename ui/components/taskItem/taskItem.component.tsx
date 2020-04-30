import React from 'react';
import Link from 'next/link';
import { Task, useDeleteTaskMutation } from '../../generated/graphql';

interface IProps {
  task: Task;
  onTaskDeleted: () => void;
}

const TaskItem: React.FC<IProps> = ({ task, onTaskDeleted }) => {
  const [deleteTask, { loading, error }] = useDeleteTaskMutation({
    onCompleted: () => {
      onTaskDeleted();
    }
  });

  const handleDeleteTask = () => {
    deleteTask({
      variables: { id: task.id }
    });
  };

  return (
    <li>
      <Link href="/update/[id]" as={`/update/${task.id}`}>
        <a>{task.title}</a>
      </Link>
      <button onClick={handleDeleteTask}>x</button>
    </li>
  );
};

export default TaskItem;
