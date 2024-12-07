import './index.css';
import AppRouter from './router/AppRouter';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;
