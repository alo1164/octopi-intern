import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-5xl mx-auto p-6">
        <nav className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">👥 User Manager</h1>
          <Link
            to="/add"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            ➕ Add User
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<UserForm />} />
          <Route path="/edit/:id" element={<UserForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
