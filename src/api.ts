import axios from "axios";
import { Todo } from "./constants";

export const addTodo = async(newTodo:Todo) => {
    let res = await axios.post("http://localhost:8080/todos", newTodo);
    return res.data;
}

export const getTodos = async() => {
    let res = await axios.get("http://localhost:8080/todos");
    return res.data;
}

export const toggleTodo = async(status : boolean,id?: number) => {
    let res = await axios.patch(`http://localhost:8080/todos/${id}`, {status});
    return res.data;
}

export const deleteTodo = async (id?: number) => {
    let res = await axios.delete(`http://localhost:8080/todos/${id}`);
    return res.data;
};
  