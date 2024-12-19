import React, { useState } from 'react';

function CVForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    skills: [],
    workExperience: [],
    education: [],
    skillInput: '',
    workExperienceInput: {
      companyName: '',
      role: '',
      startDate: '',
      endDate: '',
    },
    educationInput: {
      institutionName: '',
      degree: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSkillAdd = () => {
    if (formData.skillInput.trim() !== '') {
      setFormData({
        ...formData,
        skills: [...formData.skills, formData.skillInput],
        skillInput: '',
      });
    }
  };

  const handleSkillRemove = (index) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleWorkExperienceAdd = () => {
    const { companyName, role, startDate, endDate } = formData.workExperienceInput;
    if (companyName && role && startDate && endDate) {
      setFormData({
        ...formData,
        workExperience: [...formData.workExperience, { companyName, role, startDate, endDate }],
        workExperienceInput: { companyName: '', role: '', startDate: '', endDate: '' },
      });
    }
  };

  const handleEducationAdd = () => {
    const { institutionName, degree } = formData.educationInput;
    if (institutionName && degree) {
      setFormData({
        ...formData,
        education: [...formData.education, { institutionName, degree }],
        educationInput: { institutionName: '', degree: '' },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your CV</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Details */}
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Personal Details</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
              <textarea
                name="address"
                rows="3"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
          </div>

          {/* Education */}
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Education</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="institutionName"
                  placeholder="Institution Name"
                  value={formData.educationInput.institutionName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      educationInput: { ...formData.educationInput, institutionName: e.target.value },
                    })
                  }
                  className="p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="text"
                  name="degree"
                  placeholder="Degree"
                  value={formData.educationInput.degree}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      educationInput: { ...formData.educationInput, degree: e.target.value },
                    })
                  }
                  className="p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <button
                type="button"
                onClick={handleEducationAdd}
                className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Add Education
              </button>
            </div>
            <ul className="mt-4 space-y-2">
              {formData.education.map((edu, index) => (
                <li key={index} className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-sm">
                    <strong>{edu.institutionName}</strong> — {edu.degree}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Experience */}
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Work Experience</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.workExperienceInput.companyName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      workExperienceInput: {
                        ...formData.workExperienceInput,
                        companyName: e.target.value,
                      },
                    })
                  }
                  className="p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Role"
                  value={formData.workExperienceInput.role}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      workExperienceInput: {
                        ...formData.workExperienceInput,
                        role: e.target.value,
                      },
                    })
                  }
                  className="p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  name="startDate"
                  placeholder="Start Date"
                  value={formData.workExperienceInput.startDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      workExperienceInput: {
                        ...formData.workExperienceInput,
                        startDate: e.target.value,
                      },
                    })
                  }
                  className="p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="date"
                  name="endDate"
                  placeholder="End Date"
                  value={formData.workExperienceInput.endDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      workExperienceInput: {
                        ...formData.workExperienceInput,
                        endDate: e.target.value,
                      },
                    })
                  }
                  className="p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <button
                type="button"
                onClick={handleWorkExperienceAdd}
                className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Add Work Experience
              </button>
            </div>
            <ul className="mt-4 space-y-2">
              {formData.workExperience.map((work, index) => (
                <li key={index} className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-sm">
                    <strong>{work.companyName}</strong> — {work.role} ({work.startDate} to {work.endDate})
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Skills</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="skillInput"
                placeholder="Add a skill"
                value={formData.skillInput}
                onChange={(e) => setFormData({ ...formData, skillInput: e.target.value })}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={handleSkillAdd}
                className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Add Skill
              </button>
            </div>
            <ul className="mt-4 space-y-2">
              {formData.skills.map((skill, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm"
                >
                  {skill}
                  <button
                    onClick={() => handleSkillRemove(index)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

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
