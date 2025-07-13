import { Link } from "react-router-dom";

const UserCard = ({ user, onDelete }) => {
  return (
    <div className="bg-white shadow p-4 rounded flex gap-4 items-center">
      <img
        src={user.image}
        alt={user.name}
        className="w-16 h-16 rounded-full object-cover border"
      />
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
        <p className="text-sm text-gray-600">{user.email}</p>
        <div className="text-sm text-gray-700">
          <strong>Skills:</strong> {user.skills}
        </div>
        <div className="text-sm text-gray-700">
          <strong>Education:</strong> {user.education}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          to={`/edit/${user._id}`}
          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-center"
        >
          Edit
        </Link>
        <button
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={() => onDelete(user._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
