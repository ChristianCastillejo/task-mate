import React from 'react';

import TaskItem from '../taskItem/taskItem.component';
import { Task } from '../../generated/graphql';

interface ITaskList {
  tasks: Task[];
  onTaskDeleted: () => void;
}

const TaskList: React.FC<ITaskList> = ({ tasks, onTaskDeleted }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onTaskDeleted={onTaskDeleted} />
      ))}
    </ul>
  );
};

export default TaskList;
