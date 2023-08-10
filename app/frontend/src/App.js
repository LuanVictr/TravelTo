import { Route, Routes } from 'react-router-dom'
import loginPage from './pages/loginPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={loginPage} />
    </Routes>
  );
}

export default App;
