import React from "react"
import "./about.css"
import data from "./about-Api"
import Card from "./Card"

const about = () => {
  return (
    <>
      <section className='about top' id='about'>
        <div className='container'>
          <div className='heading'>
            <h1>Projects</h1>
           </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}

            {/**/}
          </div>
        </div>
      </section>
    </>
  )
}

export default about
