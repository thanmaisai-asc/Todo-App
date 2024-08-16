import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { motion } from 'framer-motion';

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase();

    return todos.filter((todo) => {
      const matchesFilter = (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) ||
        filter === 'ALL';

      const matchesSearch = todo.title.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  return (
    <motion.ul
      className="p-4 bg-gray-50 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.li
        className="my-2 text-sm italic text-gray-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        All Your Notes Here...
      </motion.li>
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </motion.ul>
  );
};

export default TodoList;
