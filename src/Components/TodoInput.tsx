import React, { useState } from 'react'
import { Todo } from '../constants';
import { addTodo } from '../api';
import { Button, Input } from '@chakra-ui/react';


interface TodoInputProps {
    handleUpdate: (res : Todo) => void,
}
const TodoInput = ({handleUpdate}:TodoInputProps) => {
  const [title,setTitle] = useState<string>("");
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo:Todo = {
        title : title,
        status : false
    }
    addTodo(newTodo).then((res) => {
        handleUpdate(res);
    });
    setTitle("");
  }

  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Input type="text" placeholder='Enter Your Task' variant='filled' value={title} onChange={handleChange} width={"40%"} mt={4}/>
            <Button ml={8} type='submit'>Add Task</Button>
        </form>
    </div>
  )
}

export default TodoInput