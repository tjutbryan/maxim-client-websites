import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer1'>
      <img
        className='image-icon1'
        src='/assets/desktop/footer-image-overlay.png'
      />
      <div className='footer-inner' />

      {/* <div className='maxim-digital1'>Maxim Digital</div> */}

      <div className='office-address1'>
        <div className='singapore-office1'>PT. Digital Mandiri Jayabaya</div>

        {/* <div className='hong-kong-office1'>Hong Kong Office</div>

        <div className='indonesia-office1'>Indonesia Office</div> */}

        <div className='the-perfect-digital1'>
          The perfect digital marketing agency partner for your business
        </div>

        {/* <div className='taiwan-office1'>
          JOSE INGENIEROS 3241 Piso:2 Dpto:12
          <br />
          BECCAR
          <br />
          1643-BUENOS AIRES
        </div> */}

        <div className='paya-lebar-road1'>
        Room 1D, 2/F, FU TAO Building, 98 Argyle Street, Mongkok, Kowloon, Hong Kong
        </div>

        {/* <div className='unit-04-7f2'>
          Unit 04, 7/F Bright Way Tower No. 33 Mong Kok Road, Kowloon, Hong Kong
        </div>

        <div className='unit-04-7f3'>
          Senayan Trade Center, Lt. 2 Blok C3D No. 26 Jl. Asia Afrika Pintu IX
          Jakarta 10270
        </div> */}
      </div>

      {/* <div className='social-media1'>
        <a
          href='https://wa.me/628179262921?text=Hi%20Maxim%20Digital,%20I%20have%20inquiry%20regarding%20your%20services'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='social-media-child2'
            src='/assets/desktop-mobile/whatsapp.png'
          />
        </a>
        <a
          href='mailto:info@maximdigi.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='social-media-child3'
            src='/assets/desktop-mobile/email.png'
          />
        </a>
        <a
          href='https://www.instagram.com/maxim.digi'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='artboard-115-1-icon1'
            src='/assets/desktop-mobile/instagram.png'
          />
        </a>
        <a
          href='https://www.linkedin.com/company/maximdigital/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='social-media-child4'
            src='/assets/desktop-mobile/linkedin.png'
          />
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=100077484100790&mibextid=kFxxJD'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='social-media-child5'
            src='/assets/desktop-mobile/facebook.png'
          />
        </a>
      </div> */}

      <div className='ready-to-start1'>READY TO START YOUR NEXT</div>
      <div className='advertising-campaign1'>ADVERTISING CAMPAIGN</div>
      <div className='rectangle-div' />
      <Link
      // to={`${process.env.REACT_APP_SCHEME}://app.${process.env.REACT_APP_DOMAIN}/register`}
      >
        <div className='get-started1'>Get Started</div>
      </Link>
    </div>
  )
}

export default Footer
