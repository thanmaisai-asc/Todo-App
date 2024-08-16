import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeTodo,
  markCompleted,
  markIncomplete,
  updateTodo,
} from '../redux/actions';
import { MdCheckCircle, MdCancel, MdEdit, MdDelete } from 'react-icons/md';
import { motion } from 'framer-motion';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(updateTodo(index, editedTitle, editedDescription));
    setIsEditing(false);
  };

  return (
    <motion.li
      className={`flex flex-col p-4 mb-4 rounded-lg shadow-lg ${
        todo.completed ? 'bg-gray-200 text-gray-600 opacity-70' : 'bg-white text-gray-900'
      }`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center mb-2 sm:mb-0">
          <div className="flex items-center">
            <span className="mr-3 font-bold text-lg">
              {index + 1}.
            </span>
            <div>
              {isEditing ? (
                <>
                  <motion.input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="mr-4 p-2 border border-blue-300 rounded-lg shadow-inner"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    placeholder="Title"
                  />
                  <motion.input
                    type="text"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    className="text-sm p-2 border border-blue-300 rounded-lg shadow-inner"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    placeholder="Description"
                  />
                </>
              ) : (
                <>
                  <motion.span
                    className={`block text-lg font-medium mb-1 ${
                      todo.completed ? 'line-through text-gray-500' : ''
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {todo.title}
                  </motion.span>
                  <motion.span
                    className={`text-sm ${
                      todo.completed ? 'line-through text-gray-500' : ''
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {todo.description}
                  </motion.span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center mt-2 sm:mt-0">
          {!todo.completed && (
            <motion.button
              className="text-sm px-3 py-1 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none"
              onClick={() => dispatch(markCompleted(index))}
              whileTap={{ scale: 0.9 }}
            >
              <MdCheckCircle size={24} />
            </motion.button>
          )}
          {todo.completed && (
            <motion.button
              className="text-sm px-3 py-1 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 focus:outline-none ml-2"
              onClick={() => dispatch(markIncomplete(index))}
              whileTap={{ scale: 0.9 }}
            >
              <MdCancel size={24} />
            </motion.button>
          )}
          <motion.button
            className="text-sm px-3 py-1 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none ml-2"
            onClick={() => dispatch(removeTodo(index))}
            whileTap={{ scale: 0.9 }}
          >
            <MdDelete size={24} />
          </motion.button>
          {isEditing ? (
            <motion.button
              className="text-sm px-3 py-1 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none ml-2"
              onClick={handleSaveClick}
              whileTap={{ scale: 0.9 }}
            >
              Save
            </motion.button>
          ) : (
            <motion.button
              className="text-sm px-3 py-1 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none ml-2"
              onClick={handleEditClick}
              whileTap={{ scale: 0.9 }}
            >
              <MdEdit size={24} />
            </motion.button>
          )}
        </div>
      </div>
    </motion.li>
  );
};

export default TodoItem;
