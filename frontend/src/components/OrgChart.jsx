import React from 'react';
import { Chart } from "react-google-charts";
import '../assets/css/orgchart.css';


// Import images correctly
import adviser from "../assets/intel_images/adviser.jpg";
import president from "../assets/intel_images/president.jpg";
import vice from "../assets/intel_images/vicepresident.jpg";

import secretary from '../assets/intel_images/secretary.jpg';
import treasurer from '../assets/intel_images/treasurer.jpg'
import auditor from '../assets/intel_images/auditor.jpg'
import pio from '../assets/intel_images/pio-m.jpg'
import pio2 from '../assets/intel_images/pio.jpg'
import pubmat1 from '../assets/intel_images/pubmat1.jpg'
import pubmat2 from '../assets/intel_images/pubmat2.jpg'
import pubmat3 from '../assets/intel_images/pubmat3.jpg'
import pubmat4 from '../assets/intel_images/pubmat4.jpg'
import pubmat5 from '../assets/intel_images/pubmat5.jpg'
import pubmat6 from '../assets/intel_images/pubmat6.jpg'

// First Year Representative
import rep1F from '../assets/intel_images/rep1-f.jpg'
import rep1F2 from '../assets/intel_images/rep1-f2.jpg'
import rep1F3 from '../assets/intel_images/rep1-f3.jpg'
import rep1m from '../assets/intel_images/rep1-m.jpg'
import rep1m2 from '../assets/intel_images/rep1-m2.jpg'
import rep1m3 from '../assets/intel_images/rep1-m3.jpg'

// Second Year Representatives
import rep2m from '../assets/intel_images/rep2-m.jpg'
import rep2m2 from '../assets/intel_images/rep2-m2.jpg'
import rep2m3 from '../assets/intel_images/rep2-m3.jpg'
import rep2m4 from '../assets/intel_images/rep2-m4.jpg'
import rep2m5 from '../assets/intel_images/rep2-m5.jpg'
import rep2m6 from '../assets/intel_images/rep2-m6.jpg'
import rep2m7 from '../assets/intel_images/rep2-m7.jpg'

// Third Year Representative
import rep3m from '../assets/intel_images/rep3-m.jpg'
import rep3m2 from '../assets/intel_images/rep3-m2.jpg'
import rep3f from '../assets/intel_images/rep3-f.jpg'
import rep3f2 from '../assets/intel_images/rep3-f2.jpg'
import rep3f3 from '../assets/intel_images/rep3-f3.jpg'

// Fourth Year Representative
import rep4m from '../assets/intel_images/rep4-m.jpg'
import rep4m2 from '../assets/intel_images/rep4-m2.jpg'
import rep4m3 from '../assets/intel_images/rep4-m3.jpg'
import rep4f from '../assets/intel_images/rep4-f.jpg'
import rep4f2 from '../assets/intel_images/rep4-f2.jpg'


const OrgChart = () => {
    const data = [
      [
        { v: "", f: "" },
        "",
        "",
      ],
      [
        { v: "President", f: `<div class="img-container president">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
            <div> <h1>Josephe-anne Marie Misola</h1> <p>Vice President</p></div> 
          </div>`},
        "",
        "",
      ],
      [
        { v: "Vice President", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Phil Sebastian Cainong</h1> <p>Vice President</p></div> 
        </div>` },
        "President",
        "",
      ],
      [
        { v: "Secretary", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Marilyn Asebto</h1> <p>Secretary</p></div> 
        </div>` },
        "Vice President",
        "",
      ],
      [
        { v: "Treasurer", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Tricia Mae Edloy</h1> <p>Treasurer</p></div> 
        </div>` },
        "Vice President",
        "",
      ],
      [
        { v: "Auditor", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Hart Nino Regis</h1> <p>Auditor</p></div> 
        </div>` },
        "Vice President",
        "",
      ],
      [
        { v: "PIO1", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Lyka Jean Arnaiz</h1> <p>P.I.O</p></div> 
        </div>` },
        "Vice President",
        "",
      ],
      [
        { v: "PIO2", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Deo Seth Habagat</h1> <p>P.I.O</p></div> 
        </div>` },
        "Vice President",
        "",
      ],
    ];
  
    const pubmats = [
      [
        { v: "", f: "<div><h1>Publication Material</h1></div>" },
        "Publication Material",
        "",
      ],
      [
        { v: "Pubmat1", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Francis Andrew Obregon</h1> <p>Pubmat</p></div> 
        </div>` },
        "Publication Material",
        "",
      ],
      [
        { v: "Pubmat2", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Zhen Mae Hersan</h1> <p>Pubmat</p></div> 
        </div>` },
        "Publication Material",
        "",
      ],
      [
        { v: "Pubmat3", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Shenna Jane Samson</h1> <p>Pubmat</p></div> 
        </div>` },
        "Publication Material",
        "",
      ],
      [
        { v: "Pubmat4", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Sam Jairo Puerto</h1> <p>Pubmat</p></div> 
        </div>` },
        "Publication Material",
        "",
      ],
      [
        { v: "Pubmat5", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Lloyd Albert Canete</h1> <p>Pubmat</p></div> 
        </div>` },
        "Publication Material",
        "",
      ],
      [
        { v: "Pubmat6", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Jake Capaycapay</h1> <p>Pubmat</p></div> 
        </div>` },
        "Publication Material",
        "",
      ],
    ]

    const representative1 = [
      [
        { v: "First Year Representative", f: "<div><h1>1st year</h1></div>" },
        "",
        "",
      ],
      [
        { v: "BSIT-1A", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Lynjie Anne Francisco</h1> <p>Representative</p></div> 
        </div>`
      },
        "First Year Representative",
        "",
      ],
      [
        { v: "BSIT-1B", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Ruffa Mae Paet</h1> <p>Representative</p></div> 
        </div>` },
        "First Year Representative",
        "",
      ],
      [
        { v: "BSIT-1C", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Jessa Mae Salazar</h1> <p>Representative</p></div> 
        </div>` },
        "First Year Representative",
        "",
      ],
      [
        { v: "BSIT-1D", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Rio Samuray</h1> <p>Representative</p></div> 
        </div>` },
        "First Year Representative",
        "",
      ],
      [
        { v: "BSIT-1E", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Jake Latorre</h1> <p>Representative</p></div> 
        </div>` },
        "First Year Representative",
        "",
      ],
      [
        { v: "BSIT-1F", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Emmanuel Villafranca</h1> <p>Representative</p></div> 
        </div>` },
        "First Year Representative",
        "",
      ],
    ]
    
    const representative2 = [
      [
        { v: "Second Year Representative", f: "<div><h1>2nd year</h1></div>" },
        "Representatives",
        "",
      ],
      [
        { v: "BSIT-2A", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Mark Lawrence Lacdao</h1> <p>Representative</p></div> 
        </div>` },
        "Second Year Representative",
        "",
      ],
      [
        { v: "BSIT-2B", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Lee Russel Ibanez</h1> <p>Representative</p></div> 
        </div>`  },
        "Second Year Representative",
        "",
      ],
      [
        { v: "BSIT-2C", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Nino Junehll Edar</h1> <p>Representative</p></div> 
        </div>`  },
        "Second Year Representative",
        "",
      ],
      [
        { v: "BSIT-2D", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Kent Robert Coricor</h1> <p>Representative</p></div> 
        </div>`  },
        "Second Year Representative",
        "",
      ],
      [
        { v: "BSIT-2E", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>David Lazarte</h1> <p>Representative</p></div> 
        </div>`  },
        "Second Year Representative",
        "",
      ],
      [
        { v: "BSIT-2F", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Christian Elbert Catada</h1> <p>Representative</p></div> 
        </div>`  },
        "Second Year Representative",
        "",
      ],
      [
        { v: "BSIT-2G", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Charles Rovic Calma</h1> <p>Representative</p></div> 
        </div>`  },
        "Second Year Representative",
        "",
      ],
    ]

    const representative3 = [
      [
        { v: "Third Year Representative", f: "<div><h1>3rd year</h1></div>" },
        "Representatives",
        "",
      ],
      [
        { v: "BSIT-3A", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Alyssa Egloso</h1> <p>Representative</p></div> 
        </div>` },
        "Third Year Representative",
        "",
      ],
      [
        { v: "BSIT-3B", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Regina Renee Lepasana</h1> <p>Representative</p></div> 
        </div>`  },
        "Third Year Representative",
        "",
      ],
      [
        { v: "BSIT-3C", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Eden Joy Collantes</h1> <p>Representative</p></div> 
        </div>`  },
        "Third Year Representative",
        "",
      ],
      [
        { v: "BSIT-3D", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Shaun Rey Rostata</h1> <p>Representative</p></div> 
        </div>`  },
        "Third Year Representative",
        "",
      ],
      [
        { v: "BSIT-3E", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Regie Pedroza</h1> <p>Representative</p></div> 
        </div>`  },
        "Third Year Representative",
        "",
      ],
    ]

    const representative4 = [
      [
        { v: "Fourth Year Representative", f: "<div><h1>4th year</h1></div>" },
        "Representatives",
        "",
      ],
      [
        { v: "BSIT-4A", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Kiely Lucille De Dios</h1> <p>Representative</p></div> 
        </div>` },
        "Fourth Year Representative",
        "",
      ],
      [
        { v: "BSIT-4B", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Razel Ann Puto</h1> <p>Representative</p></div> 
        </div>`  },
        "Fourth Year Representative",
        "",
      ],
      [
        { v: "BSIT-4C", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Romulo Plimaco</h1> <p>Representative</p></div> 
        </div>`  },
        "Fourth Year Representative",
        "",
      ],
      [
        { v: "BSIT-4D", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Paul Ian Badanoy</h1> <p>Representative</p></div> 
        </div>`  },
        "Fourth Year Representative",
        "",
      ],
      [
        { v: "BSIT-4E", f: `<div class="img-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style="width:50px; height:50px; border-radius:50%;" /> 
          <div><h1>Jerome Pedrosa</h1> <p>Representative</p></div> 
        </div>`  },
        "Fourth Year Representative",
        "",
      ],
    ]

    const options = {
      allowHtml: true, // Enables HTML content inside nodes
      compactRows: false, // Reduces spacing between rows
      allowCollapse: true, // Allows nodes to collapse/expand
      nodeClass: "custom-node", // Applies CSS class to nodes
      selectedNodeClass: "selected-node",
      size: "medium", // Size of the chart (values: 'small', 'medium', 'large')
    };
  
    return (
      <>  
        <div>
          <Chart chartType="OrgChart" className='flex items-center justify-center gap-4' width="100%" data={data} options={options} />;
          <Chart chartType="OrgChart" className='flex items-center justify-center gap-4 mt-12' width="100%" data={pubmats} options={options} />;
          <Chart chartType="OrgChart" className='flex items-center justify-center gap-4 mt-12' width="100%" data={representative1} options={options} />;
          <Chart chartType="OrgChart" className='flex items-center justify-center gap-4 mt-12' width="100%" data={representative2} options={options} />;
          <Chart chartType="OrgChart" className='flex items-center justify-center gap-4 mt-12' width="100%" data={representative3} options={options} />;
          <Chart chartType="OrgChart" className='flex items-center justify-center gap-4 mt-12' width="100%" data={representative4} options={options} />;
        </div>
      </> 
      )
  };
  
  export default OrgChart;