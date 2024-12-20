import './index.css';
import AppRouter from './router/AppRouter';
import Navbar from './components/Navbar';
import { AuthProvider } from './services/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
