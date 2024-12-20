import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './SideBar'
import templates1 from '../assets/image/temp1.jpg'
import templates2 from '../assets/image/temp2.jpg'
import templates3 from '../assets/image/temp3.jpg'
import templates4 from '../assets/image/temp4.jpg'
import templates5 from '../assets/image/temp5.jpg'
import templates6 from '../assets/image/temp6.jpg'
import templates7 from '../assets/image/temp7.jpg'
import templates8 from '../assets/image/temp8.jpg'
import '../assets/style/style.css'
import { Link } from 'react-router-dom'

function Template() {
    const[template,setTempletes]  = useState([templates1,templates2,templates3,templates4,templates5,templates6,templates7,templates8]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleSelectTemplate = (image) => {
        setSelectedTemplate(!selectedTemplate || selectedTemplate !== image ? image : null);
    };
    return (
        <div className='contain'>   
            <Header />
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    
                    <div className="col py-2">
                        <div className="image-container">
                        {
                            template.map((val,index)=>{
                                const imageId = index + 1;
                                return (
                                  <div key={index} className="image-wrapper">
                                    <img src={val}
                                    id={imageId}
                                     style={{
                                        height : '233px',
                                        width  :  '336px',
                                        display : 'inline-block'
                                     }}
                                    />
                                    <div style={{position: 'absolute', top: '70%', left: '6%', display: 'flex', gap: '10px',
                            
                        
                                    }}>
                                    <Link to={`/firstform?id=${imageId}`}>
                                    <button className='btn btn-primary'
                                            >
                                            Use Template
                                    </button>
                                    </Link>
                                    <button
                                     class="btn btn-primary"
                                     onClick={() => handleSelectTemplate(val)}
                                     >
                                        View Template
                                    </button>
                                  </div>
                                  </div>
                                )
                            })
                        }  
                     </div>
                     {selectedTemplate && (
                            <div className="selected-template mt-5">
                                <h3>Selected Template:</h3>
                                <img
                                    src={selectedTemplate}
                                    alt="Selected Template"
                                    style={{
                                        height: '400px',
                                        width: '400px',
                                        display: 'block',
                                        margin: '0 auto',
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template