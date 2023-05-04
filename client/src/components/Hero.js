import Image from 'react-bootstrap/Image'

import profile from '../images/prof-pic.png'


const Hero = () => {

  return (

    <section id='hero'>
      
      <div className='image-wrapper'>
        <Image src={profile} alt='profile-picture' id='profile-picture'></Image>
      </div>

      <div className='hero-text-wrapper'>
        <h1>Hi, I&apos;m Simon. I&apos;m a full-stack developer</h1>
      </div>

    </section>
  )
}

export default Hero