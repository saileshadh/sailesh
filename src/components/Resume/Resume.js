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

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>

                <h2>Education </h2>
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
              <a href="https://github.com/saileshadh">
                <button className='btn_shadow'>
              
              Number of Projects:  10+
            </button></a>
            <hr></hr>
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
                70%</span>
              <br />
              <progress id="file" value="70" max="100"> </progress>
              <br />
              <span className="span"><label className="label">Bootstrap:</label>
                70%</span>
              <br />
              <progress id="file" value="70" max="100"> </progress>
              <br />
              <span className="span"><label className="label">React JS:</label>
                70%</span>
              <br />
              <progress id="file" value="70" max="100"> </progress>
              <br />
              <span className="span"><label className="label">MYSQL:</label>
                60%</span>
              <br />
              <progress id="file" value="60" max="100" > </progress>
              <br/>
              <span className="span">
                <label className="label">Python:</label>
                60%</span>
              <br />
              <progress id="file" value="60" max="100" > </progress>
              <br />
              <span className="span"><label className="label">Machine learning:</label>
                60%</span>
              <br />
              <progress id="file" value="60" max="100" > </progress>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Resume
