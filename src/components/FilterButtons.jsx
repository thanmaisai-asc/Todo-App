import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos, markAllCompleted } from '../redux/actions';
import { motion } from 'framer-motion';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <motion.div
      className="flex space-x-4 items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <select
          className="text-sm px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={currentFilter}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="ALL">Default</option>
          <option value="COMPLETED">Completed</option>
          <option value="INCOMPLETE">Incomplete</option>
        </select>
      </motion.div>

      <motion.button
        className="text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg shadow-md ml-2"
        onClick={() => dispatch(markAllCompleted())}
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95, rotate: -2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Mark All Completed
      </motion.button>
    </motion.div>
  );
};

export default FilterButtons;
