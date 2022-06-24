import type { NextPage } from 'next';
import Link from 'next/link';
import { GetAllPostsQuery, useGetAllPostsQuery } from '../generated/graphql';
import graphqlRequestClient from '../lib/client/graphqlRequestClient';
import formatDate from '../utils/formatDate';
import {
  Button,
  Checkbox,
  Input,
  Modal,
  Row,
  Table,
  Text,
} from '@nextui-org/react';
import React from 'react';

const Home: NextPage = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  const { data, error, isLoading } = useGetAllPostsQuery<
    GetAllPostsQuery,
    Error
  >(graphqlRequestClient, {});

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Table
        lined
        shadow={false}
        selectionMode="multiple"
        aria-label="Example static bordered collection table"
        css={{
          height: 'auto',
          minWidth: '80%',
        }}
      >
        <Table.Header>
          <Table.Column>ID</Table.Column>
          <Table.Column>TITLE</Table.Column>
          <Table.Column>BODY</Table.Column>
          <Table.Column>CREATED AT</Table.Column>
        </Table.Header>
        <Table.Body items={data?.posts || []}>
          {item => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.body}</Table.Cell>
              <Table.Cell>{formatDate(item.createdAt)}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={7}
          onPageChange={page => console.log({ page })}
        />
      </Table>
      <Button auto shadow onClick={handler}>
        Open modal
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
