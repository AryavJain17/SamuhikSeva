import React from 'react'
import './firstSection.css'
import kid1 from '../../../Images/kid1.png'
import totalProjects from '../../../Images/totalprojects.png'
import kid2 from '../../../Images/kid2.png'
import FirstSectionSlider from '../../../Sliders/FirstSectionSlider.jsx'
function firstSection() {
  return (
    <div className='home-first-section'>
      <div className='first-section-first-div'>
        <h3>Empower Lives Through Education</h3>
        <h1>Your Contribution Can Build a Brighter Future</h1>
        <p>At our NGO, we are dedicated to providing underprivileged children with access to quality education, mentorship, and essential resources. Together, we can break the cycle of poverty and create lasting change in our communities.</p>
        <button>Join Us in Making a Difference</button>
      </div>

      <div className='first-section-second-div'>
        <img src={kid1} alt="" />
        <div className='sliders-component'>
          < FirstSectionSlider />
        </div>
      </div>
      <div className='first-section-third-div'>
        <img src={totalProjects} id="totalprojectsPic" alt="" />
        <br />
        <img src={kid2} alt="" id="first-section-third-div-img" />
      </div>
    </div>
  )
}
export default firstSection