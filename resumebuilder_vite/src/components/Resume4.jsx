import React from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Header from './Header';
import Sidebar from './SideBar';


function Resume4() {

  const location = useLocation();
  const formData = location.state || {};
  


  let grad = formData.graduation
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
  
    <div className="container mt-5" id="resume-content">
      <header className=" text-white py-4 px-3 " style={{backgroundColor: '#e80058'}}>
        <div style={{paddingLeft:'50px'}}>
        <h1 className="mb-2">{formData.fullName}</h1>
        <p style={{color: 'white'}}>___________________________________________________________________________________________________________________________________________________</p>
        <p className="mb-0">{formData.address} | {formData.mobileNo}</p>
        <p className="mb-0">{formData.email}</p>
        </div>
      </header>

      <div className="row">
        {/* Left Column */}
        <div className="col-md-6" style={{backgroundColor : '#fedcea', height: '900px',marginLeft:'10px',width:'49%',paddingTop:'15px'}}>
          {/* Work Experience */}
          <section>
            <h4 className="text-uppercase" style={{color : '#b2bfc7'}}>Work Experience</h4>

            {formData.experience.map((val, index) => (
                                        <div key={index} className="mt-1">
                                            <b style={{color: '#686765'}}>{val.experiencename}</b>
                                            <div className="mt-1">{val.experiencedetails}</div>
                                        </div>
                                    ))}

          </section>
          <div><p style={{color:'#95989d'}}>_________________________________________________________________________________________</p></div>
          {/* Education */}
          <section>
            <h4 className="text-uppercase" style={{color : '#b2bfc7'}}>Education</h4>
            <div style={{ fontSize: "18px" }}>
                                        {
                                            grad.map((val, index) => {
                                                return (
                                                    <div>
                                                        <div>{val.schoolname}</div>
                                                        <div>{val.schoolduration}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
          </section>
          <div><p style={{color:'#95989d'}}>_________________________________________________________________________________________</p></div>
           <section>
           <div className=" text-uppercase  " style={{color : '#b2bfc7'}}> <h4> Certification</h4></div>
                                <div className="col-9  text-left " style={{ fontSize: "18px" }}>
                                    {formData.certification.map((val, index) => (
                                        <div key={index} className="mt-1">
                                            <b>{val.certificationname}</b>
                                            <div className="mt-1">{val.certificationdetails}</div>
                                        </div>
                                    ))}
                                </div>
           </section>
           <div><p style={{color:'#95989d'}}>_________________________________________________________________________________________</p></div>
          {/* Language */}
          <section>
            <h4 className="text-uppercase" style={{color : '#b2bfc7'}}>Language</h4>
            <div className="col-9 text-left" style={{ fontSize: "18px" }}>
                                    <div>{formData.languages}</div>
                                </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="col-md-6" style={{paddingTop:'15px'}}>
          {/* Objective */}
          <section>
            <h4 className="text-uppercase" style={{color : '#b2bfc7'}}>Objective</h4>
            <p>{formData.objective}</p>
          </section>
          <div><p style={{color:'#95989d'}}>_________________________________________________________________________________________</p></div>

          {/* Skills & Proficiencies */}
          <section>
            <h4 className="text-uppercase" style={{color : '#b2bfc7'}}>Skills & Proficiencies</h4>
            <ul>
              <li>{formData.skills}</li>
            </ul>
          </section>
          <div><p style={{color:'#95989d'}}>_________________________________________________________________________________________</p></div>

          {/* Project */}
          <section>
            <h4 className="text-uppercase" style={{color : '#b2bfc7'}}>Project</h4>
            {formData.projects.map((project, index) => (
                                        <div key={index} className="mt-1">
                                            <b style={{color: '#686765'}}>{project.projectname}</b>
                                            <div className="mt-1">{project.projectdes}</div>
                                        </div>
                                    ))}
          </section>

          <div><p style={{color:'#95989d'}}>_________________________________________________________________________________________</p></div>

          {/* Date */}
          <section style={{marginTop : '60px'}}>
            <h4 className="text-uppercase" style={{color : '#b2bfc7'}}>Date</h4>
            <p>{formData.date}</p>
          </section>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Resume4;

