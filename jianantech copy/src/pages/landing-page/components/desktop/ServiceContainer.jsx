import './ServiceContainer.css'
import { Link } from 'react-router-dom'

const ServiceContainer = () => {
  return (
    <div className='services2' id='service'>
      <div className='services-child' />
      <div className='services3'>SERVICES</div>
      <img
        className='self-service-icon1'
        alt='Self Service Icon'
        src='/assets/desktop-mobile/self-service-icon.png'
      />
      <img
        className='bluetick-icon1'
        alt='Bluetick Icon'
        src='/assets/desktop-mobile/bluetick-icon.png'
      />
      <img
        className='full-service-icon1'
        alt='Full Service Icon'
        src='/assets/desktop-mobile/full-service-icon.png'
      />
      <div className='self-service-advertising1'>Self Service Advertising</div>
      <div className='full-service-advertising1'>Full Service Advertising</div>
      <div className='bluetick-verification5'>Bluetick Verification</div>
      <div className='get-access-to1'>
        Get access to premium ad accounts without limitations and advance tools
        that helps you reach your goals. You can open and optimize the campaign
        by yourself!
      </div>
      <div className='as-a-professional1'>
        As a professional digital marketing agency with proven track record, we
        will help to maximize your business goal through digital marketing
        perspective.
      </div>
      <div className='get-better-engagement1'>
        Get better engagement on your posts, your account is more recognizable
        and stand-out. No more worries for fake account because you are the real
        one!
      </div>
      <div className='find-out-more1'>
        <Link 
        // to={`${process.env.REACT_APP_SCHEME}://app.${process.env.REACT_APP_DOMAIN}/register`}
        >
          <b className='find-our-more5'>Find out more</b>
          <img
            className='arrow-right-icon4'
            src='/assets/desktop-mobile/arrow-right.png'
          />
        </Link>
        <div className='find-out-more-on-click-item' />
      </div>
      <div className='find-out-more-hover1'>
        <Link 
        // to={`${process.env.REACT_APP_SCHEME}://app.${process.env.REACT_APP_DOMAIN}/register`}
        >
          <b className='find-our-more5'>Find out more</b>
          <img
            className='arrow-right-icon4'
            src='/assets/desktop-mobile/arrow-right.png'
          />
        </Link>
        <div className='find-out-more-on-click-item' />
        {/* <div className='find-out-more-hover-item' /> */}
      </div>
      <div className='find-out-more-on-click1'>
        <a
          // href='https://wa.me/628179262921?text=Hi%20Maxim%20Digital,%20I%20have%20inquiry%20regarding%20your%20bluetick%20verification%20service'
          // target='_blank'
          // rel='noopener noreferrer'
        >
          <b className='find-our-more5'>Find out more</b>
          <img
            className='arrow-right-icon6'
            src='/assets/desktop-mobile/arrow-right.png'
          />
        </a>
        <div className='find-out-more-on-click-item' />
      </div>
    </div>
  )
}

export default ServiceContainer
