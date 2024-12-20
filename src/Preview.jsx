import React from 'react';

function CVPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white p-10 shadow-lg">
        <header className="flex items-center space-x-4 border-b pb-4">
          <img
            src="profile-picture.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full border"
          />
          <div>
            <h1 className="text-3xl font-bold">Aspiring Frontend Developer</h1>
            <p className="text-gray-600">Based in India</p>
          </div>
        </header>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Contact Details</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="mailto:aspiringfe@helloworld.com"
                className="text-blue-600 hover:underline"
              >
                aspiringfe@helloworld.com
              </a>
            </li>
            <li>
              <a
                href="tel:+910000000000"
                className="text-blue-600 hover:underline"
              >
                +91 00000 00000
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aspiringfe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn Profile
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aspiringfe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub Profile
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Skills</h2>
          <ul className="mt-4 flex flex-wrap gap-4">
            <li className="px-4 py-2 bg-blue-100 rounded-lg">JavaScript</li>
            <li className="px-4 py-2 bg-blue-100 rounded-lg">React</li>
            <li className="px-4 py-2 bg-blue-100 rounded-lg">CSS</li>
            <li className="px-4 py-2 bg-blue-100 rounded-lg">TailwindCSS</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Projects</h2>
          <ul className="mt-4 space-y-4">
            <li className="p-4 border rounded-lg shadow-sm">
              <h3 className="text-lg font-bold">Project Name</h3>
              <p className="text-gray-600">A brief description of the project.</p>
              <a
                href="https://github.com/project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on GitHub
              </a>
            </li>
            {/* Add more projects as needed */}
          </ul>
        </section>

        <footer className="mt-10 text-center text-gray-500">
          <p>&copy; 2024 Aspiring Frontend Developer. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default CVPage;