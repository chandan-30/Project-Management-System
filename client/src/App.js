import { Container } from "./containers";
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Tickets } from './components'
function App() {
  return (
    <>
      <Routes>
            <Route path="/" element={<Container />}>
              <Route index element={<Dashboard />} />
              <Route path="tickets" element={<Tickets />} />
            </Route>
      </Routes>
    </>
  );
}

export default App;
