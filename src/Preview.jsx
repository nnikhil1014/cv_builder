import React from 'react';
import { useSelector } from 'react-redux';

function CVPage() {
  const personalDetails = useSelector((state) => state.cv.personalInfo);
  const education = useSelector((state) => state.cv.education);
  const workExperience = useSelector((state) => state.cv.workExperience);
  const skills = useSelector((state) => state.cv.skills);


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
            <h1 className="text-3xl font-bold">{personalDetails.name}</h1>
            <p className="text-gray-600">Based in India</p>
          </div>
        </header>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Contact Details</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={`mailto:${personalDetails.email}`}
                className="text-blue-600 hover:underline"
              >
                {personalDetails.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${personalDetails.phone}`}
                className="text-blue-600 hover:underline"
              >
                {personalDetails.phone}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                {personalDetails.address}
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Skills</h2>
        <ul className="mt-4 flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <li className="px-4 py-2 bg-blue-100 rounded-lg" key={index}><div>{skill}</div></li>
          ))}
        </ul>

        </section>

          {console.log(workExperience)}
        <section className="mt-6">
         <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Work Experience</h2>

         <ul className="mt-4 flex flex-wrap gap-4">
            {workExperience.map((work, index) => (
              <li className="px-4 py-2 bg-blue-100 rounded-lg" key={index}>
                <div>
                  <strong>Company:</strong> {work.company}
                </div>
                <div>
                  <strong>Role:</strong> {work.role}
                </div>
                <div>
                  <strong>Duration:</strong> {work.duration}
                </div>
              </li>
            ))}
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