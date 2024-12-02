import React, { useState } from 'react';

const AdminPanel = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'Classic Spaghetti', content: 'A delicious Italian dish.', date: '2024-12-01', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Grilled Chicken Salad', content: 'A healthy meal option.', date: '2024-11-30', imageUrl: 'https://via.placeholder.com/150' },
  ]);
  const [currentBlog, setCurrentBlog] = useState({ id: null, title: '', content: '', date: '', imageUrl: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentBlog({ ...currentBlog, [name]: value });
  };

  const handleAddBlog = () => {
    setBlogs([...blogs, { ...currentBlog, id: Date.now() }]);
    resetForm();
  };

  const handleEditBlog = (blog) => {
    setIsEditing(true);
    setCurrentBlog(blog);
  };

  const handleUpdateBlog = () => {
    setBlogs(blogs.map((blog) => (blog.id === currentBlog.id ? currentBlog : blog)));
    resetForm();
  };

  const handleDeleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const resetForm = () => {
    setCurrentBlog({ id: null, title: '', content: '', date: '', imageUrl: '' });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-900 text-white p-6">
        <h2 className="text-3xl font-bold mb-8">Admin Panel</h2>
        <ul className="space-y-4">
          <li className="hover:text-orange-400"><a href="#">Dashboard</a></li>
          <li className="hover:text-orange-400"><a href="#">Manage Blogs</a></li>
          <li className="hover:text-orange-400"><a href="#">Settings</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Manage Blogs</h2>

        {/* Blog Form */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">{isEditing ? 'Edit Blog' : 'Add Blog'}</h3>
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={currentBlog.title}
            onChange={handleInputChange}
            className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            name="content"
            placeholder="Blog Content"
            value={currentBlog.content}
            onChange={handleInputChange}
            className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
            rows="5"
          />
          <input
            type="date"
            name="date"
            value={currentBlog.date}
            onChange={handleInputChange}
            className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="url"
            name="imageUrl"
            placeholder="Image URL"
            value={currentBlog.imageUrl}
            onChange={handleInputChange}
            className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          {currentBlog.imageUrl && (
            <img src={currentBlog.imageUrl} alt="Blog Preview" className="mb-4 rounded-lg shadow-lg w-full h-64 object-cover" />
          )}
          <button
            onClick={isEditing ? handleUpdateBlog : handleAddBlog}
            className={`w-full py-3 rounded-lg font-semibold ${
              isEditing ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-orange-500 hover:bg-orange-600'
            } text-white transition`}
          >
            {isEditing ? 'Update Blog' : 'Add Blog'}
          </button>
        </div>

        {/* Blog List */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Blog List</h3>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Content</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="text-gray-600">
                  <td className="border px-4 py-2">
                    <img src={blog.imageUrl} alt={blog.title} className="w-20 h-20 object-cover rounded-lg" />
                  </td>
                  <td className="border px-4 py-2">{blog.title}</td>
                  <td className="border px-4 py-2">{blog.content}</td>
                  <td className="border px-4 py-2">{blog.date}</td>
                  <td className="border px-4 py-2 flex space-x-2">
                    <button
                      onClick={() => handleEditBlog(blog)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBlog(blog.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
