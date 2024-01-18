import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import { Todo } from '../constants'
import { getTodos } from '../api';
import TodoItem from './TodoItem';
import { Box, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

const TodoApp = () => {
    const [todo,setTodo] = useState<Todo[]>([]);
    const [change, setChange] = useState<boolean>(false);

    useEffect(() =>{
        getTodos().then((res) => {
            setTodo(res);
        });
    },[]);
    console.log(todo);

    // const handleUpdate = () => {
    //     setChange(prev => !prev);
    // }

    const handleUpdate = (newTodo : Todo) => {
        setTodo((prev) => [...prev, newTodo])
    }

    const handleStatusUpdate = (res:Todo) => {
        setTodo(prev => {
            return prev.map(el => el.id === res.id ? res : el)
        })
    }
    const handleDelete = (id?: number) => {
        setTodo((prev) => prev.filter((el) => el.id !== id));
    };

  return (
    <Box mt={20}>
        <TodoInput handleUpdate = {handleUpdate}/>
        <TableContainer width={"50%"} m={"auto"} mt={20}>
                    <Table>
                      
                      <Thead>
                        <Tr>
                          <Th>Title</Th>
                          <Th>Status</Th>
                          <Th>Update Status</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
        {
            todo.map((el) => {
                return (
                    
                      
                    <TodoItem key={el.id} {...el} handleStatusUpdate = {handleStatusUpdate}  handleDelete={handleDelete}/>
                     
                )
            })
        }
        </Tbody>
        </Table>
    </TableContainer>
    </Box>
  )
}

export default TodoApp