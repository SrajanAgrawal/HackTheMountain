import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

const SubmitProject = () => {
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    fullDescription: '',
    imgUrl: '',
    previewUrl: '',
    price: '',
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validate and sanitize form data if necessary

    // Store the submitted project data in your data store
    const newProject = { id: generateUniqueId(), ...formData }; // You need a function to generate unique IDs
    console.log(newProject);

    // Add the new project to your projectsData array or database

    // Redirect to a success page or back to the project listing page
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 rounded-lg shadow-md bg-white">
      <h1 className="text-3xl font-semibold mb-6">Sell your Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-600">
            Short Description:
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fullDescription" className="block text-sm font-medium text-gray-600">
            Full Description:
          </label>
          <textarea
            id="fullDescription"
            name="fullDescription"
            value={formData.fullDescription}
            onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imgUrl" className="block text-sm font-medium text-gray-600">
            Image URL:
          </label>
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            value={formData.imgUrl}
            onChange={(e) => setFormData({ ...formData, imgUrl: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="previewUrl" className="block text-sm font-medium text-gray-600">
            Preview URL:
          </label>
          <input
            type="text"
            id="previewUrl"
            name="previewUrl"
            value={formData.previewUrl}
            onChange={(e) => setFormData({ ...formData, previewUrl: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-600">
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white rounded-lg py-2 hover:bg-blue-600 focus:outline-none"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default SubmitProject;
// function generateUniqueId() {
//     throw new Error('Function not implemented.');
// }

const generateUniqueId = () => {
    return uuidv4();
  };

    const uuidv4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line no-mixed-operators
        const r = (Math.random() * 16) | 0,
            // eslint-disable-next-line no-mixed-operators
            v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
        });
    };

