import React from 'react';
import { Todo } from '../constants';
import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { deleteTodo, toggleTodo } from '../api';

interface TodoItemProps extends Todo{
  handleStatusUpdate : (addTodo : Todo) => void;
  handleDelete: (id?:number) => void;
}


const TodoItem = ({id,title,status,handleStatusUpdate,handleDelete}:TodoItemProps) => {
  const handleToggle = () => {
      toggleTodo(!status, id).then((res) => {
        handleStatusUpdate(res);
      });   
  }
  const handleDeleteClick = () => {
    deleteTodo(id).then(() => {
      handleDelete(id);
    });
  };

  return (
      <Tr>
        <Td>{title}</Td>
        <Td>{status ? "True" : "False"}</Td>
        <Td><Button onClick={handleToggle}>{status ? "Make Incomplete" : "Make Complete"}</Button></Td>
        <Td><Button colorScheme="red" ml={2} onClick={handleDeleteClick}>
          Delete
        </Button></Td>
        
      </Tr>
  
  )
}

export default TodoItem