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

        <a href='mailto:s.davis@hotmail.co.nz' target='_blank' rel='noreferrer'>
          <div className='info'>
            <MdOutlineMailOutline size='25px'></MdOutlineMailOutline><p> Email</p>
          </div>
        </a>

        <a href='https://github.com/sjdnz93' target='_blank' rel='noreferrer'>
          <div className='info'>
            <AiFillGithub size='25px'></AiFillGithub><p> GitHub</p>
          </div>
        </a>

        <a href='https://www.linkedin.com/in/simon-james-davis/' target='_blank' rel='noreferrer'>
          <div className='info'>
            <AiFillLinkedin size='25px'></AiFillLinkedin><p> LinkedIn</p>
          </div>
        </a>




      </div>


    </section>
  )
}

export default Contact