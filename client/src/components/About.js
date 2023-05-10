
import { MdPhoneIphone, MdOutlineMailOutline, MdMailOutline } from 'react-icons/md'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const About = () => {

  return (
    <section className='content-block' id='about'>

      <div className='about-h2-container'>
        <h2>about</h2>
      </div>

      <div className='about-content-container'>
        <p>I&apos;m pretty new to the software and web-development game. For nearly 7 years I worked as a journalist in the automotive space, writing for titles such as <a href='https://www.autocar.co.uk/users/simon-davis' target='_blank' rel='noreferrer'>Autocar</a> as a road tester, and helping to co-ordinate the reviews and filming schedule for <a href='https://www.youtube.com/@carwow' target='_blank' rel='noreferrer'>carwow&apos;s</a> awesome YouTube channel as Reviews Editor. They were some great gigs - after all, there aren&apos;t that many jobs out there where you get to drive and review everything from Lamborghinis to Volkswagen Polos and call it work! </p>
        <p>But I was keen to learn something new, and a long-standing fascination with how websites, apps and software programs actually work lead me to sign up for General Assembly&apos;s (GA) Software Engineering Immersive course. For the first three months of 2023, that was my life; but it was the most satisfying and rewarding learning experience I&apos;ve ever had. I can now build full-stack web applications from scratch, which is pretty cool considering that at the beginning of the course I didn&apos;t know my Java from my JavaScript.</p>
        <p>Anyway, below you&apos;ll find a few snapshots of the projects I&apos;ve been working on recently. I&apos;m currently on the lookout for my first role as a junior full-stack developer or software engineer, and I can&apos;t wait to combine my existing skills of storytelling, creative writing, communication and project management with all the good stuff I learnt at GA. So, if you know of any going (or have any feedback on any of the work showcased here), feel free to drop me a line. Cheers!</p>
      </div>

      <div className='contact-info-container contact'>

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

export default About