import React from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Header from './Header';
import Sidebar from './SideBar';


const Resume7 = () => {
    const location = useLocation();
    const formData = location.state || {};
  
    let grad = formData.graduation
    console.log("formData5",formData);
    
    const handleDownloadPDF = () => {
      const input = document.getElementById('resume-content');
      console.log("Resume", input);

      html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const imgWidth = 210; // A4 width in mm
          const pageHeight = 295; // A4 height in mm
          const imgHeight = canvas.height * imgWidth / canvas.width;
          let heightLeft = imgHeight;
          let position = 0;

          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          while (heightLeft >= 0) {
              position = heightLeft - imgHeight;
              pdf.addPage();
              pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;
          }

          pdf.save('resume.pdf');
      });
  };


  return (
    <>
    <Header
       button={
        <button
            onClick={handleDownloadPDF}
            className="btn btn-primary mt-3"
            style={{ backgroundColor: "#00adb5", borderColor: "#00adb5" }}
        >
            Download PDF
        </button>
    }
    
    />
    <div className="container mt-5" id="resume-content" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="row">
        {/* Left column */}
        <div className="col-md-4" style={{ backgroundColor: '#f5e3d4', padding: '20px' }}>
          {/* Image */}
          <div className="text-center mb-4">
            <img
              src={formData.image}
              alt="Profile"
              className="img-fluid rounded-circle"
              style={{ width: '150px', height: '150px' }}
            />
          </div>
          {/* Contact Information */}
          <div className="text-center mb-4">
            <p><strong>{formData.mobileNo}</strong></p>
            <p>{formData.email}</p>
            <p>{formData.address}</p>
          </div>
          {/* Education */}
          <h4 className="text-uppercase mb-3">Education</h4>
          <div style={{ fontSize: "18px" }}>
                                        {
                                            grad.map((val, index) => {
                                                return (
                                                    <div key={index}>
                                                        <div>{val.schoolname}</div>
                                                        <div>{val.schoolduration}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
          <hr />
          {/* Skills */}
          <div className='' style={{ width: '150px', display: 'flex', flexWrap: 'wrap' }}>
  <h4 className="text-uppercase mb-3" style={{ width: '100%' }}>Skills</h4>
  {formData.skills.split(',').map((skill, index) => (
    <p key={index} className='' style={{ marginRight: '10px', whiteSpace: 'nowrap' }}>
      {skill.trim()}
    </p>
  ))}
</div>

          {/* <div className='' style={{width : '30px'}}>
          <h4 className="text-uppercase mb-3">Skills</h4>
          <p className=''>{formData.skills}</p>
          </div> */}
          {/* <hr /> */}
          {/* Certificate */}
          {/* <h4 className="text-uppercase mb-3">Certificate</h4>
          <div className="col-9  text-left " style={{ fontSize: "18px" }}>
                                    {formData.certification.map((val, index) => (
                                        <div key={index} className="mt-1">
                                            <b>{val.certificationname}</b>
                                            <div className="mt-1">{val.certificationdetails}</div>
                                        </div>
                                    ))}
                                </div> */}
          <hr />
          {/* Language */}
          <h4 className="text-uppercase mb-3">Language</h4>
          <p>{formData.languages}</p>
        </div>

        {/* Right column */}
        <div className="col-md-8" style={{ padding: '20px' }}>
          {/* Header */}
          <div>
            <h1 className="text-uppercase mb-0">{formData.fullName}</h1>
            <p className="text-muted">{formData.jobtitle}</p>
          </div>
          <hr />
          {/* About Me */}
          <div className="mb-4">
            <h4 className="text-uppercase">About Me</h4>
            <p>
             {formData.objective}
            </p>
          </div>
          {/* Work Experience */}
          <div className="mb-4">
            <h4 className="text-uppercase">Work Experience</h4>
            <div>
            {formData.experience.map((val, index) => (
                                        <div key={index} className="mt-1">
                                            <b>{val.experiencename}</b>
                                            <div className="mt-1">{val.experiencedetails}</div>
                                        </div>
                                    ))}
            </div>

            <h4 className="text-uppercase mb-3">Certificate</h4>
          <div className="col-9  text-left " style={{ fontSize: "18px" }}>
                                    {formData.certification.map((val, index) => (
                                        <div key={index} className="mt-1">
                                            <b>{val.certificationname}</b>
                                            <div className="mt-1">{val.certificationdetails}</div>
                                        </div>
                                    ))}
                                </div>
            {/* <div>
              <p><strong>2017 - 2019</strong></p>
              <p><strong>Social Media Manager</strong></p>
              <p>Company Name | 123 Anywhere St., Any City</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem et laoreet.</p>
            </div> */}
          </div>
          {/* Projects */}
          <div className="mb-4">
            <h4 className="text-uppercase">Projects</h4>
            {formData.projects.map((project, index) => (
                                        <div key={index} className="mt-1">
                                            <b>{project.projectname}</b>
                                            <div className="mt-1">{project.projectdes}</div>
                                        </div>
                                    ))}
            {/* <div>
              <p><strong>Social Media Manager</strong></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem et laoreet.</p>
            </div>
            <div>
              <p><strong>Social Media Manager</strong></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem et laoreet.</p>
            </div> */}
          </div>
          {/* Date */}
          <div className="text-right text-end" 
          style={{
            marginRight: '70px',
            marginTop : '90px'
          }}>
            <p><strong>Date</strong></p>
            <div>{formData.date}</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Resume7;
