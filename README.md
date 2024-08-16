# React-Redux Todo App

A powerful and visually appealing Todo app built with React, Redux, and styled with Tailwind CSS. This application provides users with features to manage their tasks efficiently and interactively, using modern front-end technologies and animations.

## App Flow

1. **Home Page**: 
   - Users are greeted with a well-designed interface, thanks to Tailwind CSS and Framer Motion animations.
   - The main section includes an input area to add new todo items, search functionality, and priority filters.

2. **Adding Todos**:
   - Users can input a title and description for a new todo item and click the add button.
   - Newly added todos will appear in the list with default settings.

3. **Viewing Todos**:
   - Todos are displayed in a list format with their title, description, and completion status.
   - Each todo item has a priority label and interactive buttons for editing, marking as completed, or removing.

4. **Editing Todos**:
   - Users can toggle the edit mode to update the title, description, or priority of an existing todo item.

5. **Filtering Todos**:
   - Users can filter todos based on completion status using "Complete" and "Incomplete" buttons.
   - A search input allows users to filter todos by title or description.

6. **Animations**:
   - Framer Motion is used to add smooth animations for adding, editing, and removing todos, enhancing user experience.

## Features Implemented

- **CRUD Operations**: 
  - **Create**: Add new todos with a title and description.
  - **Read**: View a list of todos with their current status.
  - **Update**: Edit the title, description, and priority of existing todos.
  - **Delete**: Remove todos from the list.

- **Completion Filters**:
  - Filter todos based on their completion status (Completed or Incomplete).

- **Search Functionality**:
  - Search todos by title or description to quickly find specific tasks.

- **Animations**:
  - Enhanced user interface with smooth animations using Framer Motion.
  - Tailwind CSS for responsive and visually appealing design.

## Architecture

The application follows the following architecture:

- **Frontend**:
  - **React**: For building the user interface and managing state with hooks.
  - **Redux**: For state management and implementing actions and reducers.
  - **Tailwind CSS**: For responsive and modern UI design.
  - **Framer Motion**: For adding animations to UI components.

- **Components**:
  - **Todo**: Manages the main todo list interface, including adding and searching todos.
  - **TodoItem**: Displays individual todo items with options to edit, mark as completed, or delete.
  - **FilterButtons**: Provides buttons for filtering todos based on completion status.

- **Redux**:
  - **Actions**: Defined for adding, updating, removing todos, and filtering based on completion status.
  - **Reducers**: Handle state changes and manage the todos list, search term, and filters.
 
## Usage
- Add a Todo: Enter a title and description, then click the add button.
- Search Todos: Use the search input to filter todos by title.
- Edit a Todo: Click the edit button on a todo item to modify its details.
- Mark as Completed: Use the checkmark button to mark a todo as completed.
- Mark as Incomplete: Use the cancel button to mark a todo as incomplete.
- Delete a Todo: Click the delete button to remove a todo from the list.

## Preview

<div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center;">
  <img src="https://github.com/user-attachments/assets/15522922-19c7-4a26-a0eb-c6718d20f29a" alt="Screenshot 1" style="width: 50%; max-width: 300px;" />
  <img src="https://github.com/user-attachments/assets/5cd3604c-d140-4b18-9249-02a110ede90b" alt="Screenshot 2" style="width: 50%; max-width: 300px;" />
  <img src="https://github.com/user-attachments/assets/5ff72779-3a8e-45a9-a5ae-49fdcb661552" alt="Screenshot 3" style="width: 50%; max-width: 300px;" />
  <img src="https://github.com/user-attachments/assets/bea4e474-2c72-446d-8113-db116036b7fb" alt="Screenshot 4" style="width: 50%; max-width: 300px;" />
  <img src="https://github.com/user-attachments/assets/af276e70-dcb6-45db-af2f-61a5174ca2f8" alt="Screenshot 5" style="width: 50%; max-width: 300px;" />
</div>
