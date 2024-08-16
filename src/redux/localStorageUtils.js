// Save state to local storage
export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('todoState', serializedState);
    } catch (err) {
      console.error('Could not save state', err);
    }
  };
  
  // Load state from local storage
  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('todoState');
      if (serializedState === null) {
        return undefined; // Return undefined if no state is found
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error('Could not load state', err);
      return undefined;
    }
  };
  