import { MdPhoneIphone, MdOutlineMailOutline, MdMailOutline } from 'react-icons/md'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Button } from 'react'
import { useState, useEffect } from 'react'


const Contact = () => {

  const [ year, setYear ] = useState()

  useEffect(() => {
    const getYear = () => {
      const currentDate = new Date()
      setYear(currentDate.getFullYear())
    }
    getYear()
  }, [])

  return (
    <section className='content-block' id='contact'>


      <div className='contact-h2-container'>
        <h2>contact</h2>
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

      <div className='credits-container'>
        <small>&copy; Copyright Simon Davis {year} &#9473; Background image by <a href="https://www.freepik.com/free-vector/hand-drawn-psychedelic-colorful-background_17807024.htm#query=funky%20color&position=0&from_view=keyword&track=ais">Freepik</a></small>
      </div>

    </section>
  )
}

export default Contact