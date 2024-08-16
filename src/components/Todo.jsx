import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { addTodo, updateSearchTerm } from '../redux/actions';
import { motion } from 'framer-motion';

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
        <motion.div
            className="max-w-4xl mx-auto sm:mt-8 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <motion.h2
                className="mt-3 mb-6 text-3xl font-bold text-center uppercase text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Personal TODO APP
            </motion.h2>
            
            <motion.div
                className="flex items-center mb-6 space-x-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
                <input
                    id="addTodoTitle"
                    className="flex-grow p-3 rounded-lg border-2 border-blue-300 focus:outline-none focus:border-purple-500 shadow-sm"
                    type="text"
                    placeholder="Add Todo Title"
                    value={newTodoTitle}
                    onChange={(e) => setNewTodoTitle(e.target.value)}
                />
                <input
                    id="addTodoDescription"
                    className="flex-grow p-3 rounded-lg border-2 border-blue-300 focus:outline-none focus:border-purple-500 shadow-sm"
                    type="text"
                    placeholder="Add Todo Description"
                    value={newTodoDescription}
                    onChange={(e) => setNewTodoDescription(e.target.value)}
                />
                <motion.button
                    className="ml-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:shadow-lg focus:outline-none"
                    onClick={handleAddTodoClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <BsPlus size={24} />
                </motion.button>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                <FilterButtons />
                <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                >
                    <input
                        className="flex-grow p-3 rounded-lg border-2 border-blue-300 focus:outline-none focus:border-purple-500 shadow-sm"
                        type="text"
                        placeholder="Search Todos"
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                    />
                    <motion.button
                        className="ml-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:shadow-lg focus:outline-none"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <BsSearch size={24} />
                    </motion.button>
                </motion.div>
            </div>

            <TodoList />
        </motion.div>
    );
};

export default Todo;
