import { MdPhoneIphone, MdOutlineMailOutline, MdMailOutline } from 'react-icons/md'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Button } from 'react'


const Contact = () => {

  return (
    <section className='content-block' id='contact'>


      <div className='contact-h2-container'>
        <h2>.contact</h2>
      </div>
      <div className='contact-info-container'>  
        <div className='info'>
          <MdOutlineMailOutline size='30px'></MdOutlineMailOutline>
          <a href='mailto:s.davis@hotmail.co.nz' target='_blank' rel='noreferrer'>Email</a>
        </div>

        <div className='info'>
          <AiFillGithub size='30px'></AiFillGithub>
          <a href='https://github.com/sjdnz93' target='_blank' rel='noreferrer'>GitHub</a>
        </div>

        <div className='info'>
          <AiFillLinkedin size='30px'></AiFillLinkedin>
          <a href='https://www.linkedin.com/in/simon-james-davis/' target='_blank' rel='noreferrer'>LinkedIn</a>
        </div>




      </div>


    </section>
  )
}

export default Contact