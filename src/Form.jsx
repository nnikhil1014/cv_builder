import React, { useState } from 'react';

function CVForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    workExperience: '',
    skills: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can send this data to your server or process it further here
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your CV</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Details */}
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Personal Details</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Education</h2>
            <div>
              <label htmlFor="education" className="block text-sm font-medium text-gray-700">Education</label>
              <textarea
                id="education"
                name="education"
                rows="4"
                placeholder="Enter your education details"
                value={formData.education}
                onChange={handleChange}
                className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
          </div>

          {/* Work Experience */}
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Work Experience</h2>
            <div>
              <label htmlFor="workExperience" className="block text-sm font-medium text-gray-700">Work Experience</label>
              <textarea
                id="workExperience"
                name="workExperience"
                rows="4"
                placeholder="Enter your work experience"
                value={formData.workExperience}
                onChange={handleChange}
                className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
          </div>

          {/* Skills */}
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Skills</h2>
            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
              <textarea
                id="skills"
                name="skills"
                rows="4"
                placeholder="Enter your skills (comma-separated)"
                value={formData.skills}
                onChange={handleChange}
                className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Submit CV
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CVForm;
