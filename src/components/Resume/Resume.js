import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h1>My Resume</h1>
          </div>
          <hr></hr>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>

                <h2>Education & Certifications </h2>
              </div>

              <div className='content'>

                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}


                {/**/}
              </div>
            </div>
            <div className='right'>
              <h2>Skills and experience</h2>
              <br />
              <div className="btn_shadow">
                <span className="span">
                  <label className="label">HTML:</label>
                  90%</span>
                <br />
                <progress id="file" value="90" max="100"> </progress>
                <br />
                <span className="span"><label className="label">CSS:</label>
                  80%</span>
                <br />
                <progress id="file" value="80" max="100"> </progress>
                <br />
                <span className="span"><label className="label">JavaScript:</label>
                  80%</span>
                <br />
                <progress id="file" value="80" max="100"> </progress>
                <br />
                <span className="span"><label className="label">Bootstrap:</label>
                  80%</span>
                <br />
                <progress id="file" value="80" max="100"> </progress>
                <br />
                <span className="span"><label className="label">React js:</label>
                  80%</span>
                <br />
                <progress id="file" value="80" max="100"> </progress>
                <br />
                <span className="span"><label className="label">Next js:</label>
                  80%</span>
                <br />
                <progress id="file" value="80" max="100" > </progress>
                <br />
                <span className="span"><label className="label">Vue js:</label>
                  80%</span>
                <br />
                <progress id="file" value="80" max="100" > </progress>
                <br />
                <span className="span"><label className="label">Material ui:</label>
                  80%</span>
                <br />
                <progress id="file" value="80" max="100" > </progress>
                <br />
                <span className="span"><label className="label">Chakra ui:</label>
                  70%</span>
                <br />
                <progress id="file" value="80" max="100" > </progress>
                <br />
                <span className="span">
                  <label className="label">Tailwind CSS:</label>
                  80%</span>
                <br />
                <progress id="file" value="80" max="100" > </progress>
                <br />
                <span className="span"><label className="label">PHP:</label>
                  70%</span>
                <br />
                <progress id="file" value="70" max="100" > </progress>
                <br />
                <span className="span"><label className="label">Laravel:</label>
                  70%</span>
                <br />
                <progress id="file" value="70" max="100" > </progress>
                <br />
                <span className="span"><label className="label">Typescript:</label>
                  70%</span>
                <br />
                <progress id="file" value="70" max="100" > </progress>
                <span className="span"><label className="label">Node js:</label>
                  70%</span>
                <br />
                <progress id="file" value="70" max="100" > </progress>
                <span className="span"><label className="label">MySql:</label>
                  70%</span>
                <br />
                <progress id="file" value="70" max="100" > </progress>
                <span className="span"><label className="label">GraphQL:</label>
                  70%</span>
                <br />
                <progress id="file" value="70" max="100" > </progress>
                <span className="span"><label className="label">Rest API:</label>
                  70%</span>
                <br />
                <progress id="file" value="70" max="100" > </progress>
              </div>
              
            </div>
          </div>
          <hr></hr>
        </div>

       
        {/* {/* <hr></hr> */}
      </section >
    </>
  )
}

export default Resume
