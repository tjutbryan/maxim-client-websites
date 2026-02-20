import Footer from '../../components/desktop/Footer'
import BluetickVerificationContainer from '../../components/desktop/BluetickVerificationContainer'
import AchievementContainer from '../../components/desktop/AchievementContainer'
import ClientContainer from '../../components/desktop/ClientContainer'
import ServiceContainer from '../../components/desktop/ServiceContainer'
import PartnerContainer from '../../components/desktop/PartnerContainer'
import { Link } from 'react-router-dom'
import './Desktop.css'
import { useState } from 'react'

const Desktop = () => {
  const testimonials = [
    {
      quote:
        'Aimars Digital has been our major supplier since 2019, They are very professional, reliable, and fast response. They are also agile as they can meet our dynamic and complex needs. We really recommend this agency to everyone that might need agency service.',
      avatar: 'testimony1.png',
      name: 'Noemia',
    },
    {
      quote:
        'Aimars Digital’s team are very dedicated and customer centric, they also has various resources in Meta, Google & Tiktok, which make the operation of our company easier and flexible.',
      avatar: 'testimony2.png',
      name: 'Sinar',
    },
    {
      quote:
        'Aimars Digital team has a very deep expertise in Meta, Google & TikTok ranging from its optimization, policy, appealing process and many other aspects. With this, we can consult everything to them, and they will bring solution to us.',
      avatar: 'testimony3.png',
      name: 'Ann',
    },
  ]
  const [testimonialsCounter, setTestimonialsCounter] = useState(0)
  function handleNextTestimonial() {
    if (testimonialsCounter === 2) {
      setTestimonialsCounter(0)
      return
    }
    setTestimonialsCounter(testimonialsCounter + 1)
  }

  return (
    <div className='desktop'>
      <div className='header'>
        <div className='header-child' />
        <div className='loginsignup'>
          <Link
          // to={`${process.env.REACT_APP_SCHEME}://app.${process.env.REACT_APP_DOMAIN}/login`}
          >
            Login/Signup
          </Link>
        </div>
        <div className='portfolio'>
          <a href='#portfolio'>Portfolio</a>
        </div>
        <div className='service'>
          <a href='#service'>Service</a>
        </div>

        {/* <img
          className='logo-icon'
          src='/assets/desktop-mobile/maxim-logo.png'
        /> */}
      </div>

      <div className='banner'>
        <img
          className='banner-icon'
          src='/assets/desktop-mobile/hero-image.png'
        />
        <div className='full-service'>FULL SERVICE</div>
        <div className='digital'>DIGITAL</div>
        <div className='advertising1'>ADVERTISING</div>
        <Link
        // to={`${process.env.REACT_APP_SCHEME}://app.${process.env.REACT_APP_DOMAIN}/register`}
        >
          <img
            className='data-driven-icon'
            alt='Data-Driven Solutions'
            src='/assets/desktop-mobile/data-driven.png'
          />
        </Link>
      </div>
      <img
        className='double-blur-gradient'
        alt='Double Blur Gradient'
        src='/assets/desktop/double-blur-gradient.png'
      />
      <div className='about'>
        <div className='empower-sustainable-business'>
          Empower Sustainable business growth through technology and data driven
          digital
        </div>
        <div className='experience-in-the'>
          Experience in the digital marketing industry
        </div>
        <div className='global-active-container'>
          <p className='global-active'>{`Global & active`}</p>
          <p className='global-active'>clients</p>
        </div>
        <div className='advertisers-running-their'>
          Advertisers running their campaign under our inhouse accounts
        </div>
        <div className='advertising-spent'>
          <p className='global-active'>Advertising</p>
          <p className='global-active'>spent</p>
        </div>
        <div className='connecting-the-world'>
          Connecting the world through Digital platforms
        </div>
        <div className='years'>10 YEARS</div>
        <div className='div1'>300+</div>
        <div className='div2'>4,000+</div>
        <div className='m'>$60M+</div>
      </div>
      <div className='trophies'>
        <img
          className='trophies-child'
          src='/assets/desktop-mobile/trophy1.png'
        />
        <img
          className='trophies-item'
          src='/assets/desktop-mobile/trophy2.png'
        />
        <img
          className='trophies-inner'
          src='/assets/desktop-mobile/trophy3.png'
        />
        <img
          className='artboard-icon'
          src='/assets/desktop-mobile/trophy4.png'
        />
        <img
          className='trophies-child1'
          src='/assets/desktop-mobile/trophy5.png'
        />
      </div>
      <PartnerContainer />
      <ServiceContainer />
      <ClientContainer />
      <img
        className='blur-gradient-icon'
        alt='Blur Gradient Icon'
        src='/assets/desktop-mobile/blur-gradient.png'
      />
      <div className='they-say' id='portfolio'>
        <div className='they-say1'>THEY SAY</div>
        <div className='maxim-digital-team'>
          {testimonials[testimonialsCounter].quote}
        </div>
        <svg
          width='44'
          height='34'
          viewBox='0 0 44 34'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='quote-icon'
        >
          <path
            d='M0.74 33.38C2.42 28.8067 3.58667 24.7 4.24 21.06C4.98667 17.5133 5.40667 14.1067 5.5 10.84C5.68667 7.57333 5.78 4.21333 5.78 0.759999H22.02C22.02 6.08 21.6467 10.7467 20.9 14.76C20.1533 18.68 19.1733 22.1333 17.96 25.12C16.7467 28.2 15.44 30.9533 14.04 33.38H0.74ZM22.3 33.38C23.98 28.8067 25.1467 24.7 25.8 21.06C26.5467 17.5133 26.9667 14.1067 27.06 10.84C27.2467 7.57333 27.34 4.21333 27.34 0.759999H43.58C43.58 6.08 43.2067 10.7467 42.46 14.76C41.7133 18.68 40.7333 22.1333 39.52 25.12C38.3067 28.2 37 30.9533 35.6 33.38H22.3Z'
            fill='url(#paint0_linear_9_15)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_9_15'
              x1='2'
              y1='-2.5'
              x2='34'
              y2='32'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#E22290' />
              <stop offset='0.488001' stopColor='#9D84BC' />
              <stop offset='1' stopColor='#2BAAE1' />
            </linearGradient>
          </defs>
        </svg>
        <img
          onClick={handleNextTestimonial}
          className='arrow-right-medium'
          alt='Arrow Right'
          src='/assets/desktop-mobile/arrow-right-medium.svg'
        />
        <div className='they-say-child-desktop flex h-[300px] items-center justify-center'>
          <img
            src={`/assets/desktop-mobile/${testimonials[testimonialsCounter].avatar}`}
            className='max-h-full'
          />
        </div>
        <div className='ann'>{testimonials[testimonialsCounter].name}</div>
      </div>
      <AchievementContainer />
      <BluetickVerificationContainer />
      <Footer />
    </div>
  )
}

export default Desktop
