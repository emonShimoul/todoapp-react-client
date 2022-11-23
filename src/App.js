import './App.css';
import Home from './components/Home/Home';
import TodoList from './components/TodoList/TodoList';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Home></Home>
        <TodoList></TodoList>
      </AuthProvider>
    </div>
  );
}

export default App;
