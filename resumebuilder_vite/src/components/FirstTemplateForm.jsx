import React, { useState, useRef } from 'react';
import Header from './Header';
import Sidebar from './SideBar';
import Resume from './Resume';
import axios from 'axios';
import '../assets/style/form.css'
import { useNavigate, useLocation } from 'react-router-dom';

function FirstTemplateForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const imageId = queryParams.get('id');
    const resumeContentRef = useRef(null);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        mobileNo: '',
        objective: '',
        graduation: [
            { schoolname: '', schoolduration: '' }
        ],
        skills: '',
        jobtitle: '',
        projects: [
            { projectname: '', projectdes: '' }
        ],
        date: '',
        languages: '',
        image: null,
        certification: [
            { certificationname: ' ', certificationdetails: ' ' }
        ],
        experience: [
            { experiencename: '', experiencedetails: '' }
        ]
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data State", formData);
        setIsSubmitted(true)

        const resumeContent = resumeContentRef.current ? resumeContentRef.current.innerHTML : '';
        console.log('Resume Content:', resumeContent);
        axios.post('https://66a49bd55dc27a3c19095649.mockapi.io/student', formData)
            .then((res) => {
            })
    };

    const handleChangeProject = (index, e) => {
        const { name, value } = e.target;
        const updatedProjects = [...formData.projects];
        updatedProjects[index][name] = value;
        setFormData({ ...formData, projects: updatedProjects });
    };

    const handleChangeCertificate = (index, e) => {
        const { name, value } = e.target;
        const updatedCertificate = [...formData.certification];
        updatedCertificate[index][name] = value;
        setFormData({ ...formData, certification: updatedCertificate });
    };

    const handleChangeExperience = (index, e) => {
        const { name, value } = e.target;
        const updatedExperience = [...formData.experience];
        updatedExperience[index][name] = value;
        setFormData({ ...formData, experience: updatedExperience });
    };
    const handleChangeGraguation = (index, e) => {
        const { name, value } = e.target;
        const updatedGraduation = [...formData.graduation];
        updatedGraduation[index][name] = value;
        setFormData({ ...formData, graduation: updatedGraduation });
    };

    const addGraduation = () => {
        setFormData({ ...formData, graduation: [...formData.graduation, { schoolname: '', schoolduration: '' }] });
    };

    const removeGraduation = (index) => {
        const updatedGraduation = formData.graduation.filter((_, i) => i !== index);
        setFormData({ ...formData, graduation: updatedGraduation });
    }

    const addProject = () => {
        setFormData({ ...formData, projects: [...formData.projects, { projectname: '', projectdes: '' }] });
    };

    const removeProject = (index) => {
        const updatedProjects = formData.projects.filter((_, i) => i !== index);
        setFormData({ ...formData, projects: updatedProjects });
    };

    const addCertificate = () => {
        setFormData({ ...formData, certification: [...formData.certification, { certificationname: '', certificationdetails: '' }] });
    };
    // const removeCertificate = () => {
    //     setFormData({ ...formData, certification: [...formData.certification, { certificationname: '', certificationdetails: '' }] });
    // };
    const removeCertificate = (index) => {
        const updatedCertificate = formData.certification.filter((_, i) => i !== index);
        setFormData({ ...formData, certification: updatedCertificate });
    };

    const addExperience = () => {
        setFormData({ ...formData, experience: [...formData.experience, { experiencename: '', experiencedetails: '' }] });
    };
    // const removeExperience = () => {
    //     setFormData({ ...formData, experience: [...formData.experience, { experiencename: '', experiencedetails: '' }] });
    // };
    const removeExperience = (index) => {
        const updatedExperience = formData.experience.filter((_, i) => i !== index);
        setFormData({ ...formData, experience: updatedExperience });
    };


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevState) => ({
                    ...prevState,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file); // Converts the file to a data URL
        }
    };

    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    {/* <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <Sidebar />
                    </div> */}
                    <div className="col py-2" id="resume-content" ref={resumeContentRef}>
                        {
                            isSubmitted ? (
                                imageId === '1' ? (
                                    navigate('/Resume', { state: formData })

                                ) :
                                    imageId === '3' ? (
                                        navigate('/resume3', { state: formData })
                                    ) :
                                        imageId === '4' ? (
                                            navigate('/resume4', { state: formData })
                                        ) :
                                            imageId === '5' ? (
                                                navigate('/resume5', { state: formData })
                                            )
                                                :
                                                imageId === '6' ?
                                                    (
                                                        navigate('/resume6', { state: formData })

                                                    )
                                                    :
                                                    imageId === '7' ?

                                                        (
                                                            navigate('/resume7', { state: formData })

                                                        )
                                                        :
                                                        imageId === '8' ?

                                                            (
                                                                navigate('/resume8', { state: formData })

                                                            )

                                                            : (
                                                                navigate('/resume2', { state: formData })

                                                            )

                            ) : (

                                <form onSubmit={handleSubmit} >
                                    <div className="row">
                                        <div className="mb-3 col-5">
                                            <label htmlFor="fullName" className="form-label">Full Name</label>
                                            <input type="text" className="form-control" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter Full Name" />
                                        </div>
                                        <div className="mb-3 col-5">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3 col-5">
                                            <label htmlFor="address" className="form-label">Address</label>
                                            <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} placeholder="767,cubic colony" />
                                        </div>
                                        <div className="mb-3 col-5">
                                            <label htmlFor="mobileNo" className="form-label">Mobile No:</label>
                                            <input type="text" className="form-control" name="mobileNo" value={formData.mobileNo} onChange={handleChange} placeholder="91+0000000000" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3 col-5 objective">
                                            <label htmlFor="objective" className="form-label">Objective</label>
                                            <textarea className="form-control" name="objective" value={formData.objective} onChange={handleChange} placeholder="about yourself" />
                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="mb-3 col-5">
                                            <label htmlFor="skills" className="form-label">Skills</label>
                                            <input type="text" className="form-control" name="skills" value={formData.skills} onChange={handleChange} placeholder="---" />
                                        </div>
                                        <div className="mb-3 col-5">
                                            <label htmlFor="skill" className="form-label"
                                            >Language
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter a language and press Enter"
                                                onChange={handleChange}
                                                name='languages'
                                                value={formData.languages}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                    </div>
                                    <div className="row">
                                        <div className="mb-3 col-5">
                                            <label htmlFor="formFile" className="form-label">Upload Image</label>
                                            <input className="form-control" type="file"
                                                name="image" onChange={handleFileChange} />
                                        </div>
                                        <div className="mb-3 col-5">
                                            <label htmlFor="graduation" className="form-label">Job Title</label>
                                            <input type="text" className="form-control" name="jobtitle" value={formData.jobtitle} onChange={handleChange} placeholder="Job Title" />
                                        </div>

                                    </div>
                                    <div className="row">
                                        {formData.graduation.map((graduation, index) => (
                                            <div key={index} className="row mb-3">
                                                <div className="col-5">
                                                    <label htmlFor="schoolname" className="form-label">School Name / College Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="schoolname"
                                                        value={graduation.schoolname}
                                                        onChange={(e) => handleChangeGraguation(index, e)}
                                                        placeholder="School Name / College Name"
                                                    />
                                                </div>
                                                <div className="col-5">
                                                    <label htmlFor="schoolduration" className="form-label">School Duration</label>
                                                    <input
                                                        type='text'
                                                        className="form-control"
                                                        name="schoolduration"
                                                        value={graduation.schoolduration}
                                                        onChange={(e) => handleChangeGraguation(index, e)}
                                                        placeholder="School Duration"
                                                    />
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-6">
                                                        <button type="button" onClick={addGraduation} className="btn btn-primary w-50">
                                                            Add School/College
                                                        </button>
                                                    </div>
                                                    <div className="col-6">
                                                        <button type="button" onClick={() => removeGraduation(index)} className="btn btn-danger w-50">
                                                            Remove School/College
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="row">

                                        {formData.projects.map((project, index) => (
                                            <div key={index} className="mb-3">
                                                <div className="mb-3 col-5">
                                                    <label htmlFor="projectname" className="form-label">Project Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="projectname"
                                                        value={project.projectname}
                                                        onChange={(e) => handleChangeProject(index, e)}
                                                        placeholder="Project Name"
                                                    />
                                                </div>
                                                <div className="mb-3 col-12">
                                                    <label htmlFor="projectdes" className="form-label">Project Description</label>
                                                    <textarea
                                                        className="form-control"
                                                        name="projectdes"
                                                        value={project.projectdes}
                                                        onChange={(e) => handleChangeProject(index, e)}
                                                        placeholder="Project Description"
                                                    />
                                                </div>
                                                <div class="row">
                                                    <div class="col-6">
                                                        <button type="button" onClick={addProject} className="btn btn-primary w-50">
                                                            Add Project
                                                        </button>
                                                    </div>
                                                    <div class="col-6">
                                                        <button type="button" onClick={() => removeProject(index)} className="btn btn-danger w-50">
                                                            Remove Project
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="row">

                                        {formData.certification.map((val, index) => (
                                            <div key={index} className="mb-3">
                                                <div className="mb-3 col-5">
                                                    <label htmlFor="projectname" className="form-label">Certification</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="certificationname"
                                                        value={val.certificationname}
                                                        onChange={(e) => handleChangeCertificate(index, e)}
                                                        placeholder="Certificate Name"
                                                    />
                                                </div>
                                                <div className="mb-3 col-12">
                                                    <label htmlFor="projectdes" className="form-label">Certification Description</label>
                                                    <textarea
                                                        className="form-control"
                                                        name="certificationdetails"
                                                        value={val.certificationdetails}
                                                        onChange={(e) => handleChangeCertificate(index, e)}
                                                        placeholder="Certificate"
                                                    />
                                                </div>
                                                <div class="row">
                                                    <div className="col-6">
                                                        <button type="button" onClick={addCertificate} className="btn btn-primary w-50">
                                                            Add Certificate
                                                        </button>
                                                    </div>
                                                    <div className="col-6">
                                                        <button type="button" onClick={() => removeCertificate(index)} className="btn btn-danger w-50">
                                                            Remove Certificate
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="row">

                                        {formData.experience.map((project, index) => (
                                            <div key={index} className="mb-3">
                                                <div className="mb-3 col-5">
                                                    <label htmlFor="projectname" className="form-label">Add Experience</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="experiencename"
                                                        value={project.experiencename}
                                                        onChange={(e) => handleChangeExperience(index, e)}
                                                        placeholder="Experience"
                                                    />
                                                </div>
                                                <div className="mb-3 col-12">
                                                    <label htmlFor="" className="form-label">Experience Description/Intership Details</label>
                                                    <textarea
                                                        className="form-control"
                                                        name="experiencedetails"
                                                        value={project.experiencedetails}
                                                        onChange={(e) => handleChangeExperience(index, e)}
                                                        placeholder="Experience Details"
                                                    />
                                                </div>
                                                <div class="row">
                                                    <div class="col-6">
                                                        <button type="button" onClick={addExperience} className="btn btn-primary w-50">
                                                            Add Experience
                                                        </button>
                                                    </div>
                                                    <div class="col-6">
                                                        <button type="button" onClick={() => removeExperience(index)} className="btn btn-danger w-50">
                                                            Remove Experience
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="row">

                                        <div className="mb-3 col-5">
                                            <label htmlFor="skills" className="form-label">Date</label>
                                            <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} placeholder="---" />
                                        </div>

                                    </div>

                                    <div className="mb-3 col-6 mt-4">
                                        <button className="btn btn-primary mt-2 w-100">Submit</button>
                                    </div>
                                </form>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FirstTemplateForm;
