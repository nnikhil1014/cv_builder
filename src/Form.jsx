import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    updatePersonalInfo,
    addEducation,
    addWorkExperience,
    addSkill,
} from './app/cvSlice';
import Input from './Input';

function CVForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


    // Local states for each section
  const [personalDetails, setPersonalDetails] = useState({
      name: '',
      email: '',
      phone: '',
      address: '',
    });

    const [education, setEducation] = useState([{ degree: '', institution: '', year: '' }]);
    const [workExperience, setWorkExperience] = useState([{ company: '', role: '', duration: '' }]);
    const [skills, setSkills] = useState('');

    // Handle changes for Personal Details
    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails({ ...personalDetails, [name]: value });
    };

    // Handle changes for Education
    const handleEducationChange = (index, field, value) => {
        const updatedEducation = [...education];
        updatedEducation[index][field] = value;
        setEducation(updatedEducation);
    };

    // Handle changes for Work Experience
    const handleWorkChange = (index, field, value) => {
        const updatedWorkExperience = [...workExperience];
        updatedWorkExperience[index][field] = value;
        setWorkExperience(updatedWorkExperience);
    };

    // Handle submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Dispatch all sections to Redux
        dispatch(updatePersonalInfo(personalDetails));
        education.forEach((edu) => dispatch(addEducation(edu)));
        workExperience.forEach((work) => dispatch(addWorkExperience(work)));
        dispatch(addSkill(skills.split(','))); // Split skills by commas into an array

        navigate('/preview'); // Redirect to preview page
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your CV</h1>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Details */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
                        <Input 
                            type='text'
                            name='name'
                            placeholder='Name'
                            value={personalDetails.name}
                            onChange={handlePersonalChange}
                        />

                        <Input 
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={personalDetails.email}
                            onChange={handlePersonalChange}
                        />

                        <Input 
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={personalDetails.phone}
                            onChange={handlePersonalChange}
                        />

                        <textarea
                            name="address"
                            placeholder="Address"
                            value={personalDetails.address}
                            onChange={handlePersonalChange}
                            className="block w-full mb-4 p-2 border"
                        ></textarea>
                    </section>

                    {/* Education */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Education</h2>
                        {education.map((edu, index) => (
                            <div key={index} className="mb-4">
                                
                                <Input 
                                    type="text"
                                    placeholder="Degree"
                                    value={edu.degree}
                                    onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                                />

                                <Input 
                                    type="text"
                                    placeholder="Institution"
                                    value={edu.institution}
                                    onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                                />

                                <Input 
                                    type="text"
                                    placeholder="Year"
                                    value={edu.year}
                                    onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                                />

                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => setEducation([...education, { degree: '', institution: '', year: '' }])}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Add More Education
                        </button>
                    </section>

                    {/* Work Experience */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
                        {workExperience.map((work, index) => (
                            <div key={index} className="mb-4">

                                <Input 
                                    type="text"
                                    placeholder="Company"
                                    value={work.company}
                                    onChange={(e) => handleWorkChange(index, 'company', e.target.value)}
                                />

                                <Input 
                                    type="text"
                                    placeholder="Role"
                                    value={work.role}
                                    onChange={(e) => handleWorkChange(index, 'role', e.target.value)}
                                />

                                <Input 
                                    type="text"
                                    placeholder="Duration"
                                    value={work.duration}
                                    onChange={(e) => handleWorkChange(index, 'duration', e.target.value)}
                                />

                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() =>
                                setWorkExperience([...workExperience, { company: '', role: '', duration: '' }])
                            }
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Add More Work Experience
                        </button>
                    </section>

                    {/* Skills */}

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Skills</h2>
                        <textarea
                            placeholder="Enter skills (comma-separated)"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            className="block w-full mb-4 p-2 border"
                        ></textarea>
                    </section>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg"
                    >
                        Submit CV
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CVForm;
