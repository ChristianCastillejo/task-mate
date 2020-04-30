import React from 'react';
import { NextPage } from 'next';

import { withApollo } from '../lib/apollo';
import { useTasksQuery, TaskStatus } from '../generated/graphql';

import TaskList from '../components/taskList/taskList.component';
import CreateTaskInputComponent from '../components/createTaskInput/createTaskInput.component';

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = () => {
  const { loading, error, data, refetch } = useTasksQuery({
    variables: { status: TaskStatus.Active }
  });

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>An error occurred.</p>;
  }
  const tasks = data?.tasks;

  return (
    <>
      <CreateTaskInputComponent onTaskCreated={refetch} />
      {tasks && tasks.length ? (
        <TaskList tasks={tasks} onTaskDeleted={refetch} />
      ) : (
        <p>There are no tasks here.</p>
      )}
    </>
  );
};

export default withApollo(IndexPage);
