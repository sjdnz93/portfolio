import Image from 'react-bootstrap/Image'

import profile from '../images/prof-pic-final-2.png'




const Hero = () => {

  return (

    <section id='hero'>

      <div className='image-wrapper'>
        <Image src={profile} alt='profile-picture' id='profile-picture'></Image>
      </div>

      <div className='hero-text-wrapper'>
        <h1>Kia ora! I&apos;m Simon, a junior full-stack developer</h1>
        
      </div>
      
    </section>
  )
}

export default Hero