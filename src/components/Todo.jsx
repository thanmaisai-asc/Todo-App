import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { addTodo, updateSearchTerm } from '../redux/actions';

const Todo = () => {
    const todos = useSelector((state) => state.todos);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [newTodoDescription, setNewTodoDescription] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddTodo = (title, description) => {
        dispatch(addTodo({ title, description }));
    };

    const handleAddTodoClick = () => {
        if (newTodoTitle.trim() !== '') {
            handleAddTodo(newTodoTitle.trim(), newTodoDescription.trim());
            setNewTodoTitle('');
            setNewTodoDescription('');
        }
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value));
    };

    return (
        <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>Personal TODO APP</h2>
            <div className="flex items-center mb-4">
                <input
                    id="addTodoTitle"
                    className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Add Todo Title"
                    value={newTodoTitle}
                    onChange={(e) => setNewTodoTitle(e.target.value)}
                />
                <input
                    id="addTodoDescription"
                    className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Add Todo Description"
                    value={newTodoDescription}
                    onChange={(e) => setNewTodoDescription(e.target.value)}
                />
                <button
                    className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                    onClick={handleAddTodoClick}
                >
                    <BsPlus size={20} />
                </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <FilterButtons />
                <div className="flex items-center mb-4">
                    <input
                        className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        type="text"
                        placeholder="Search Todos"
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                    />
                    <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                        <BsSearch size={20} />
                    </button>
                </div>
            </div>

            <TodoList />
        </div>
    );
};

export default Todo;
