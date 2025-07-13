import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const initialForm = {
  name: "",
  email: "",
  image: "",
  skills: "",
  education: "",
};

const UserForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Edit mode - fetch existing user data
      fetch(`https://wesoftin-backend.vercel.app/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setFormData({
            name: data.name || "",
            email: data.email || "",
            image: data.image || "",
            skills: data.skills || "",
            education: data.education || "",
          });
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      // Update existing user
      await fetch(`https://wesoftin-backend.vercel.app/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } else {
      // Add new user
      await fetch("https://wesoftin-backend.vercel.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    }

    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-700">
        {id ? "Edit User" : "Add New User"}
      </h2>
      <input
        className="w-full border p-2 rounded mb-3"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        className="w-full border p-2 rounded mb-3"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        className="w-full border p-2 rounded mb-3"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />
      <input
        className="w-full border p-2 rounded mb-3"
        name="skills"
        placeholder="Skills (comma separated)"
        value={formData.skills}
        onChange={handleChange}
      />
      <input
        className="w-full border p-2 rounded mb-4"
        name="education"
        placeholder="Education"
        value={formData.education}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {id ? "Update User" : "Submit"}
      </button>
    </form>
  );
};

export default UserForm;
