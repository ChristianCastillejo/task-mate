import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { withApollo } from '../../lib/apollo';
import { useTaskQuery } from '../../generated/graphql';

import UpdateTaskComponent from '../../components/updateTask/updateTask.component';

interface InitialProps {}

interface Props extends InitialProps {}

const UpdatePage: NextPage<Props, InitialProps> = () => {
  const router = useRouter();
  const id =
    typeof router.query.id === 'string' ? parseInt(router.query.id, 10) : NaN;

  const { loading, error, data } = useTaskQuery({
    variables: { id },
  });

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>An error occurred.</p>;
  }

  const task = data?.task;

  return task ? (
    <UpdateTaskComponent task={task} />
  ) : (
    <p>There are no tasks here.</p>
  );
};

export default withApollo(UpdatePage);
