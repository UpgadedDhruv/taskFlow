import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await api.get("/tasks");
      setTasks(res.data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Task title cannot be empty");
      return;
    }

    try {
      await api.post("/tasks", { title: title.trim(), completed: false });
      setTitle("");
      setError("");
      await fetchTasks();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add task");
    }
  };

  const updateTask = async (id, updates) => {
    try {
      await api.put(`/tasks/${id}`, updates);
      setEditingId(null);
      setEditTitle("");
      setError("");
      await fetchTasks();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update task");
    }
  };

  const deleteTask = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await api.delete(`/tasks/${id}`);
        setError("");
        await fetchTasks();
      } catch (err) {
        setError(err.response?.data?.message || "Failed to delete task");
      }
    }
  };

  const toggleTask = async (task) => {
    await updateTask(task._id, { completed: !task.completed });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Filter and search tasks
  useEffect(() => {
    let filtered = tasks;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (filterStatus === "completed") {
      filtered = filtered.filter((task) => task.completed);
    } else if (filterStatus === "pending") {
      filtered = filtered.filter((task) => !task.completed);
    }

    setFilteredTasks(filtered);
  }, [tasks, searchTerm, filterStatus]);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">📋 My Tasks</h1>
          <p className="text-gray-600">
            Organize, manage, and track your daily tasks
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-6 flex items-start gap-3">
            <span className="text-xl mt-1">⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Add Task Form */}
          <div className="bg-linear-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-200">
            <form onSubmit={addTask} className="space-y-3">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Add a new task..."
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
                />
                <button
                  type="submit"
                  className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 flex items-center gap-2"
                >
                  <span>+</span>
                  Add Task
                </button>
              </div>
            </form>
          </div>

          {/* Filters and Search */}
          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Filter
                </label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
                >
                  <option value="all">All Tasks</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>

            {/* Task Statistics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-linear-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-600 text-sm font-semibold mb-1">
                  Total Tasks
                </p>
                <p className="text-3xl font-bold text-blue-700">
                  {tasks.length}
                </p>
              </div>
              <div className="bg-linear-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                <p className="text-green-600 text-sm font-semibold mb-1">
                  Completed
                </p>
                <p className="text-3xl font-bold text-green-700">
                  {tasks.filter((t) => t.completed).length}
                </p>
              </div>
              <div className="bg-linear-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                <p className="text-orange-600 text-sm font-semibold mb-1">
                  Pending
                </p>
                <p className="text-3xl font-bold text-orange-700">
                  {tasks.filter((t) => !t.completed).length}
                </p>
              </div>
            </div>
          </div>

          {/* Tasks List */}
          <div className="p-6">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block text-4xl mb-3">⏳</div>
                <p className="text-gray-500 font-medium">Loading tasks...</p>
              </div>
            ) : filteredTasks.length === 0 ? (
              <div className="text-center py-12">
                <div className="inline-block text-5xl mb-3">📭</div>
                <p className="text-gray-500 font-medium">
                  {tasks.length === 0
                    ? "No tasks yet. Create one to get started!"
                    : "No tasks match your filters."}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredTasks.map((task) => (
                  <div
                    key={task._id}
                    className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-blue-50 rounded-lg border border-gray-200 hover:border-blue-300 transition duration-200 group"
                  >
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task)}
                      className="w-5 h-5 text-blue-600 rounded cursor-pointer"
                    />

                    {editingId === task._id ? (
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        onBlur={() =>
                          updateTask(task._id, { title: editTitle })
                        }
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            updateTask(task._id, { title: editTitle });
                          }
                        }}
                        autoFocus
                        className="flex-1 px-3 py-1 border-2 border-blue-500 rounded focus:outline-none"
                      />
                    ) : (
                      <span
                        className={`flex-1 cursor-pointer font-medium transition ${
                          task.completed
                            ? "text-gray-400 line-through"
                            : "text-gray-800 group-hover:text-blue-700"
                        }`}
                        onClick={() => {
                          setEditingId(task._id);
                          setEditTitle(task.title);
                        }}
                      >
                        {task.title}
                      </span>
                    )}

                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {editingId !== task._id && (
                        <button
                          onClick={() => {
                            setEditingId(task._id);
                            setEditTitle(task.title);
                          }}
                          className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded transition duration-200"
                          title="Edit task"
                        >
                          ✏️
                        </button>
                      )}
                      <button
                        onClick={() => deleteTask(task._id)}
                        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded transition duration-200"
                        title="Delete task"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
