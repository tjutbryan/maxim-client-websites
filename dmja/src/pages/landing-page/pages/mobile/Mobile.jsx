import './Mobile.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

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

  const achievements = [
    {
      title: 'Media',
      clientName: 'MOLA',
      description:
        'MOLA is an Indonesian subscription video on-demand and over-the-top streaming service. A finely curated video streaming platform which showcases the finest in entertainment, sports and children programming.',
      campaignObjective: 'Community Interaction – Follow',
      results: [
        'With Website Audit & Interest targeting optimization Aimars Digital managed to elevate CTR by 30%, Lengthen Avg and Session Duration by 40%.',
        'We successfully managed to generate 383,180++ new followers with CPR < 0.10 USD.',
      ],
    },
    {
      title: 'FMCG',
      clientName: 'TEMPO SCAN',
      description:
        'Tempo Scan is the leading FMCG company in Indonesia, with many variant products from Health Care, Consumer Care, to Cosmetics. Aimars Digital has been trusted to run advertisements for their brands, such as: Marina, Ultima II, Revlon, Vidoran, My Baby, Hemaviton, Bodrex, Oskadon, etc with various campaign objectives.',
      campaignObjective:
        'Awareness, Traffic, Video Views, Community Interaction – Follow',
      results: [
        'Driven massive traffic to their website and e-commerce and successfully generated 822,000++ of clicks',
        'Generated 74,500++ of new Followers on TikTok',
        'Successfully boosted the brand awareness and generated 146,300,000++ of reach from the campaigns',
      ],
    },
    {
      title: 'Apparel',
      clientName: 'FINE COUNSEL',
      description:
        'Fine Counsel is fashion-retailer that focuses on timeless design and look, aiming for a longer wearability lifetime and withstanding any change of style trend. Originally and 100% made in Indonesia, Fine Counsel commits to bringing their goods with the highest-grade materials available in a more affordable price.',
      campaignObjective: 'Conversions',
      results: [
        'Targeting the very niche market audience, we generated 8x higher ROAS with CPA 0.80 USD',
        'Initiated > 4,000 add to cart to their website in 2 months.',
      ],
    },
    {
      title: 'Education',
      clientName: 'ARTBOUND',
      description:
        'Artbound Initiative is a global career accelerator for creative people. They provide an internship program for students and recent graduates seeking to launch their career in the creative industries from all over the world.',
      campaignObjective: 'Lead Generation',
      results: [
        'Generated more than 3,900 hot leads with 28.70% of the result rate.',
        'Drive traffic to their website and successfully generated 29,614 clicks with CPC 0.42 USD.',
      ],
    },
  ]

  const [achievementIndex, setAchievementIndex] = useState(1)

  const [isMediaActive, setIsMediaActive] = useState(false)
  const [isFmcgActive, setIsFmcgActive] = useState(true)
  const [isApparelActive, setIsApparelActive] = useState(false)
  const [isEducationActive, setIsEducationActive] = useState(false)

  const mediaActiveClassName = isMediaActive ? 'active' : ''
  const fmcgActiveClassName = isFmcgActive ? 'active' : ''
  const apparelActiveClassName = isApparelActive ? 'active' : ''
  const educationActiveClassName = isEducationActive ? 'active' : ''

  function handleMediaClicked() {
    setIsMediaActive(true)
    setIsFmcgActive(false)
    setIsApparelActive(false)
    setIsEducationActive(false)
    setAchievementIndex(0)
  }

  function handleFmcgClicked() {
    setIsMediaActive(false)
    setIsFmcgActive(true)
    setIsApparelActive(false)
    setIsEducationActive(false)
    setAchievementIndex(1)
  }

  function handleApparelClicked() {
    setIsMediaActive(false)
    setIsFmcgActive(false)
    setIsApparelActive(true)
    setIsEducationActive(false)
    setAchievementIndex(2)
  }

  function handleEducationClicked() {
    setIsMediaActive(false)
    setIsFmcgActive(false)
    setIsApparelActive(false)
    setIsEducationActive(true)
    setAchievementIndex(3)
  }

  return (
    <div className='mobile'>
      {isOpen && (
        <div className='menu'>
          <img
            onClick={toggleMenu}
            className='close'
            src='/assets/mobile/close.png'
          />
          <div
            onClick={() => {
              toggleMenu()
              document.getElementById('service').scrollIntoView()
            }}
            className='menu-service'
          >
            Service
          </div>
          <div
            onClick={() => {
              toggleMenu()
              document.getElementById('portfolio').scrollIntoView()
            }}
            className='menu-portfolio'
          >
            Portfolio
          </div>
          <a
            // href={`${process.env.REACT_APP_SCHEME}://app.${process.env.REACT_APP_DOMAIN}/register`}
            className='menu-login'
          >
            Login/Signup
          </a>
          <a
          // href='https://wa.me/628179262921?text=Hi%20Maxim%20Digital,%20I%20have%20inquiry%20regarding%20your%20services'
          // target='_blank'
          // rel='noopener noreferrer'
          >
            <img
              className='menu-social-media-child2'
              src='/assets/desktop-mobile/whatsapp.png'
            />
          </a>
          <a
          // href='mailto:info@maximdigi.com'
          // target='_blank'
          // rel='noopener noreferrer'
          >
            <img
              className='menu-social-media-child3'
              src='/assets/desktop-mobile/email.png'
            />
          </a>
          <a
          // href='https://www.instagram.com/maxim.digi'
          // target='_blank'
          // rel='noopener noreferrer'
          >
            <img
              className='menu-artboard-115-1-icon1'
              src='/assets/desktop-mobile/instagram.png'
            />
          </a>
          <a
          // href='https://www.linkedin.com/company/maximdigital/'
          // target='_blank'
          // rel='noopener noreferrer'
          >
            <img
              className='menu-social-media-child4'
              src='/assets/desktop-mobile/linkedin.png'
            />
          </a>
          <a
            href='https://www.facebook.com/profile.php?id=100077484100790&mibextid=kFxxJD'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='menu-social-media-child5'
              src='/assets/desktop-mobile/facebook.png'
            />
          </a>
        </div>
      )}

      <div className='header1'>
        {/* <img
          className='logo-icon1'
          src='/assets/desktop-mobile/maxim-logo.png'
        /> */}

        <img
          onClick={toggleMenu}
          className='hamburger'
          src='/assets/mobile/hamburger.png'
        />
      </div>

      <div className='banner1'>
        <img
          className='banner-icon1'
          src='/assets/desktop-mobile/hero-image.png'
        />
        <div className='full-service2'>FULL SERVICE</div>
        <div className='digital1'>DIGITAL</div>
        <div className='advertising2'>ADVERTISING</div>
        <Link
        // to={`${process.env.REACT_APP_SCHEME}://app.${process.env.REACT_APP_DOMAIN}/register`}
        >
          <img
            className='data-driven-icon1'
            src='/assets/desktop-mobile/data-driven.png'
          />
        </Link>
      </div>
      <img
        className='double-blur-gradient1'
        src='/assets/mobile/double-blur-gradient.png'
      />
      <div className='about1'>
        <div className='empower-sustainable-business1'>
          Empower Sustainable business growth through technology and data driven
          digital
        </div>
        <div className='connecting-the-world1'>
          Connecting the world through Digital platforms
        </div>
        <div className='experience-in-the1'>
          Experience in the digital marketing industry
        </div>
        <div className='global-active1'>{`Global & active clients`}</div>
        <div className='advertisers-running-their1'>
          Advertisers running their campaign under our inhouse accounts
        </div>
        <div className='advertising-spent1'>Advertising spent</div>
        <div className='years1'>10 YEARS</div>
        <div className='div4'>300+</div>
        <div className='div5'>4,000+</div>
        <div className='m1'>$60M+</div>
      </div>
      <div className='trophies1'>
        <img
          className='trophies-child2'
          src='/assets/desktop-mobile/trophy5.png'
        />
        <img
          className='trophies-child3'
          src='/assets/desktop-mobile/trophy3.png'
        />
        <img
          className='trophies-child4'
          src='/assets/desktop-mobile/trophy5.png'
        />
        <img
          className='trophies-child5'
          src='/assets/desktop-mobile/trophy1.png'
        />
        <img
          className='trophies-child6'
          src='/assets/desktop-mobile/trophy2.png'
        />
      </div>
      <div className='partners'>
        <div className='partners-child' />
        <div className='partners-item' />
        <div className='part-ners'>
          <p className='part'>PART</p>
          <p className='part'>NERS</p>
        </div>
        <div className='partners-logo'>
          <img
            className='partners-logo-child'
            src='/assets/desktop-mobile/partner1.png'
          />
          <img
            className='partners-logo-item'
            src='/assets/desktop-mobile/partner2.png'
          />
          <img
            className='partners-logo-inner'
            src='/assets/desktop-mobile/partner3.png'
          />
          <img
            className='partners-logo-child1'
            src='/assets/desktop-mobile/partner4.png'
          />
          <img
            className='partners-logo-child2'
            src='/assets/desktop-mobile/partner5.png'
          />
          <img
            className='partners-logo-child3'
            src='/assets/desktop-mobile/partner6.png'
          />
          <img
            className='partners-logo-child4'
            src='/assets/desktop-mobile/partner7.png'
          />
        </div>
      </div>
      <div id='service' className='services'>
        <div className='self-service'>
          <div className='self-service-child' />
          <img
            className='self-service-icon'
            src='/assets/desktop-mobile/self-service-icon.png'
          />
          <div className='self-service-advertising'>
            Self Service Advertising
          </div>
          <div className='get-access-to'>
            Get access to premium ad accounts without limitations and advance
            tools that helps you reach your goals. You can open and optimize the
            campaign by yourself!
          </div>
          <Link
          // to={`${process.env.REACT_APP_SCHEME}://app.${process.env.REACT_APP_DOMAIN}/register`}
          >
            <div className='find-out-more'>
              <b className='find-our-more'>Find out more</b>
              <img
                className='arrow-right-icon1'
                src='/assets/desktop-mobile/arrow-right.png'
              />
              <div className='find-out-more-on-click-child' />
            </div>
          </Link>
        </div>
        <div className='full-service1'>
          <img
            className='full-service-icon'
            src='/assets/desktop-mobile/full-service-icon.png'
          />
          <div className='full-service-advertising'>
            Full Service Advertising
          </div>
          <div className='as-a-professional'>
            As a professional digital marketing agency with proven track record,
            we will help to maximize your business goal through digital
            marketing perspective.
          </div>
          <Link
          // to={`${process.env.REACT_APP_SCHEME}://app.${process.env.REACT_APP_DOMAIN}/register`}
          >
            <div className='find-out-more-hover'>
              <b className='find-our-more'>Find out more</b>
              <img
                className='arrow-right-icon1'
                src='/assets/desktop-mobile/arrow-right.png'
              />
              <div className='find-out-more-on-click-child' />
            </div>
          </Link>
        </div>
        <div className='bluetick'>
          <div className='self-service-child' />
          <img
            className='bluetick-icon'
            src='/assets/desktop-mobile/bluetick-icon.png'
          />
          <div className='bluetick-verification'>Bluetick Verification</div>
          <div className='get-better-engagement'>
            Get better engagement on your posts, your account is more
            recognizable and stand-out. No more worries for fake account because
            you are the real one!
          </div>
          <a
          // href='https://wa.me/628179262921?text=Hi%20Maxim%20Digital,%20I%20have%20inquiry%20regarding%20your%20bluetick%20verification%20service'
          // target='_blank'
          // rel='noopener noreferrer'
          >
            <div className='find-out-more-on-click'>
              <b className='find-our-more2'>Find out more</b>
              <img
                className='arrow-right-icon3'
                src='/assets/desktop-mobile/arrow-right.png'
              />
              <div className='find-out-more-on-click-child' />
            </div>
          </a>
        </div>
        <div className='services1'>SERVICES</div>
      </div>
      <div className='clients1'>
        <div className='more'>
          <img
            className='more-child'
            src='/assets/desktop-mobile/client1.png'
          />
          <img className='more-item' src='/assets/desktop-mobile/client2.png' />
          <img
            className='more-inner'
            src='/assets/desktop-mobile/client3.png'
          />
          <img
            className='more-child1'
            src='/assets/desktop-mobile/client4.png'
          />
          <img
            className='more-child2'
            src='/assets/desktop-mobile/client8.png'
          />
          <img
            className='artboard-42-1-icon'
            src='/assets/desktop-mobile/client10.png'
          />
          <img
            className='more-child3'
            src='/assets/desktop-mobile/client9.png'
          />
          <img
            className='more-child4'
            src='/assets/desktop-mobile/client11.png'
          />
          <img
            className='more-child5'
            src='/assets/desktop-mobile/client15.png'
          />
          <img
            className='more-child6'
            src='/assets/desktop-mobile/client16.png'
          />
          <img
            className='more-child7'
            src='/assets/desktop-mobile/client17.png'
          />
          <img
            className='more-child8'
            src='/assets/desktop-mobile/client18.png'
          />
          <img
            className='more-child9'
            src='/assets/desktop-mobile/client22.png'
          />
          <img
            className='more-child10'
            src='/assets/desktop-mobile/client23.png'
          />
          <img
            className='more-child11'
            src='/assets/desktop-mobile/client24.png'
          />
          <img
            className='more-child12'
            src='/assets/desktop-mobile/client25.png'
          />
          <img
            className='more-child13'
            src='/assets/desktop-mobile/client29.png'
          />
          <img
            className='more-child14'
            src='/assets/desktop-mobile/client30.png'
          />
          <img
            className='more-child15'
            src='/assets/desktop-mobile/client31.png'
          />
          <img
            className='more-child16'
            src='/assets/desktop-mobile/client32.png'
          />
          <img
            className='more-child17'
            src='/assets/desktop-mobile/client36.png'
          />
          <img
            className='artboard-70-1-icon'
            src='/assets/desktop-mobile/client38.png'
          />
          <img
            className='more-child18'
            src='/assets/desktop-mobile/client37.png'
          />
          <img
            className='more-child19'
            src='/assets/desktop-mobile/client39.png'
          />
          <img
            className='more-child20'
            src='/assets/desktop-mobile/client5.png'
          />
          <img
            className='more-child21'
            src='/assets/desktop-mobile/client12.png'
          />
          <img
            className='more-child22'
            src='/assets/desktop-mobile/client19.png'
          />
          <img
            className='more-child23'
            src='/assets/desktop-mobile/client26.png'
          />
          <img
            className='more-child24'
            src='/assets/desktop-mobile/client20.png'
          />
          <img
            className='more-child25'
            src='/assets/desktop-mobile/client7.png'
          />
          <img
            className='more-child26'
            src='/assets/desktop-mobile/client14.png'
          />
          <img
            className='more-child27'
            src='/assets/desktop-mobile/client21.png'
          />
          <img
            className='more-child28'
            src='/assets/desktop-mobile/client28.png'
          />
          <img
            className='more-child29'
            src='/assets/desktop-mobile/client35.png'
          />
          <img
            className='more-child30'
            src='/assets/desktop-mobile/client42.png'
          />
          <img
            className='more-child31'
            src='/assets/desktop-mobile/client33.png'
          />
          <img
            className='more-child32'
            src='/assets/desktop-mobile/client27.png'
          />
          <img
            className='more-child33'
            src='/assets/desktop-mobile/client34.png'
          />
          <img
            className='more-child34'
            src='/assets/desktop-mobile/client41.png'
          />
          <img
            className='more-child35'
            src='/assets/desktop-mobile/client13.png'
          />
          <img
            className='more-child36'
            src='/assets/desktop-mobile/client40.png'
          />
          <img
            className='more-child37'
            src='/assets/desktop-mobile/client6.png'
          />
        </div>
        <div className='clients2'>CLIENTS</div>
      </div>
      <div className='they-say2' id='portfolio'>
        <div className='maxim-digital-team1'>
          {testimonials[testimonialsCounter].quote}
        </div>
        <svg
          width='19'
          height='15'
          viewBox='0 0 19 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='div'
        >
          <path
            d='M0.46 14.02C1.18 12.06 1.68 10.3 1.96 8.74C2.28 7.22 2.46 5.76 2.5 4.36C2.58 2.96 2.62 1.52 2.62 0.0399998H9.58C9.58 2.32 9.42 4.32 9.1 6.04C8.78 7.72 8.36 9.2 7.84 10.48C7.32 11.8 6.76 12.98 6.16 14.02H0.46ZM9.7 14.02C10.42 12.06 10.92 10.3 11.2 8.74C11.52 7.22 11.7 5.76 11.74 4.36C11.82 2.96 11.86 1.52 11.86 0.0399998H18.82C18.82 2.32 18.66 4.32 18.34 6.04C18.02 7.72 17.6 9.2 17.08 10.48C16.56 11.8 16 12.98 15.4 14.02H9.7Z'
            fill='url(#paint0_linear_26_517)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_26_517'
              x1='1'
              y1='-2.7588'
              x2='12.7121'
              y2='9.8683'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#E22290' />
              <stop offset='0.488001' stopColor='#9D84BC' />
              <stop offset='1' stopColor='#2BAAE1' />
            </linearGradient>
          </defs>
        </svg>
        <div className='they-say3'>THEY SAY</div>
        <img
          onClick={handleNextTestimonial}
          className='arrow-right-medium1'
          src='/assets/desktop-mobile/arrow-right-medium.svg'
        />
        <div className='they-say-child flex h-[300px] items-center justify-center'>
          <img
            src={`/assets/desktop-mobile/${testimonials[testimonialsCounter].avatar}`}
            className='max-h-full'
          />
        </div>
        <div className='ann1'>{testimonials[testimonialsCounter].name}</div>
      </div>
      <img
        className='blur-gradient-icon1'
        src='/assets/desktop-mobile/blur-gradient.png'
      />
      <div className='we-achieved'>
        <div className='we-achieved-child' />
        <div className='we-achieved1'>WE ACHIEVED</div>
        <div className='icon'>
          <img
            className='media-icon'
            onClick={handleMediaClicked}
            src='/assets/desktop-mobile/media.png'
          />
          <img
            onClick={handleFmcgClicked}
            className='fmcg-icon'
            src='/assets/desktop-mobile/fmcg.png'
          />
          <img
            onClick={handleApparelClicked}
            className='apparel-icon'
            src='/assets/desktop-mobile/apparel.png'
          />
          <img
            onClick={handleEducationClicked}
            className='education-icon'
            src='/assets/desktop-mobile/education.png'
          />
          <div
            onClick={handleApparelClicked}
            className={`apparel ${apparelActiveClassName}`}
          >
            Apparel
          </div>
          <div
            onClick={handleEducationClicked}
            className={`education ${educationActiveClassName}`}
          >
            Education
          </div>
          <div
            onClick={handleMediaClicked}
            className={`media ${mediaActiveClassName}`}
          >
            Media
          </div>
          <div
            onClick={handleFmcgClicked}
            className={`fmcg ${fmcgActiveClassName}`}
          >
            FMCG
          </div>
        </div>
        <div className='artbound'>
          <div className='artbound-child' />
          <div className='artbound1'>
            {achievements[achievementIndex].clientName}
          </div>
          <div className='artbound-initiative-is-container'>
            <p className='part'>{achievements[achievementIndex].description}</p>
            <p className='part'>&nbsp;</p>
            <p className='part'>Campaign Objective:</p>
            <p className='part'>
              {achievements[achievementIndex].campaignObjective}
            </p>
          </div>
        </div>
        <div className='result'>
          <div className='result-child' />
          <div className='generated-more-than-container'>
            {achievements[achievementIndex].results.map((item, index) => (
              <p className='part' key={index}>
                <b>*</b> {item}
              </p>
            ))}
          </div>
          <div className='result1'>Result:</div>
        </div>
      </div>
      <div className='bluetick-verification1'>
        <div className='bluetick-logo'>
          <img
            className='bluetick-logo-child'
            src='/assets/desktop-mobile/bluetick1.png'
          />
          <img
            className='bluetick-logo-item'
            src='/assets/desktop-mobile/bluetick2.png'
          />
          <img
            className='bluetick-logo-inner'
            src='/assets/desktop-mobile/bluetick3.png'
          />
          <img
            className='bluetick-logo-child1'
            src='/assets/desktop-mobile/bluetick7.png'
          />
          <img
            className='bluetick-logo-child2'
            src='/assets/desktop-mobile/bluetick8.png'
          />
          <img
            className='bluetick-logo-child3'
            src='/assets/desktop-mobile/bluetick9.png'
          />
          <img
            className='bluetick-logo-child4'
            src='/assets/desktop-mobile/bluetick13.png'
          />
          <img
            className='bluetick-logo-child5'
            src='/assets/desktop-mobile/bluetick4.png'
          />
          <img
            className='bluetick-logo-child6'
            src='/assets/desktop-mobile/bluetick10.png'
          />
          <img
            className='bluetick-logo-child7'
            src='/assets/desktop-mobile/bluetick11.png'
          />
          <img
            className='bluetick-logo-child8'
            src='/assets/desktop-mobile/bluetick14.png'
          />
          <img
            className='bluetick-logo-child9'
            src='/assets/desktop-mobile/bluetick15.png'
          />
          <img
            className='bluetick-logo-child10'
            src='/assets/desktop-mobile/bluetick16.png'
          />
          <img
            className='bluetick-logo-child11'
            src='/assets/desktop-mobile/bluetick17.png'
          />
          <img
            className='bluetick-logo-child12'
            src='/assets/desktop-mobile/bluetick5.png'
          />
          <img
            className='bluetick-logo-child13'
            src='/assets/desktop-mobile/bluetick6.png'
          />
          <img
            className='bluetick-logo-child14'
            src='/assets/desktop-mobile/bluetick12.png'
          />
        </div>
        <div className='bluetick-verification2'>
          <p className='part'>BLUETICK</p>
          <p className='part'>VERIFICATION</p>
        </div>
      </div>
      <div className='footer'>
        <img
          className='image-icon'
          src='/assets/mobile/footer-image-overlay.png'
        />
        <div className='footer-child' />

        {/* <div className='maxim-digital'>Maxim Digital</div> */}

        <div className='ready-to-start-container'>
          <p className='part'>READY TO START</p>
          <p className='part'>YOUR NEXT</p>
        </div>
        <div className='advertising-campaign'>
          <p className='part'>ADVERTISING</p>
          <p className='part'>CAMPAIGN</p>
        </div>
        <div className='footer-item' />
        <Link
        // to={`${process.env.REACT_APP_SCHEME}://app.${process.env.REACT_APP_DOMAIN}/register`}
        >
          <div className='get-started'>Get Started</div>
        </Link>
        <div className='office-address'>
          {/* <div className='taiwan-office'>
            JOSE INGENIEROS 3241 Piso:2 Dpto:12
            <br />
            BECCAR
            <br />
            1643-BUENOS AIRES
          </div> */}

          <div className='singapore-office'>PT. Digital Mandiri Jayabaya</div>

          {/* <div className='hong-kong-office'>Hong Kong Office</div> */}

          {/* <div className='indonesia-office'>Indonesia Office</div> */}

          <div className='the-perfect-digital'>
            The perfect digital marketing agency partner for your business
          </div>

          <div className='paya-lebar-road'>
            Room 1D, 2/F, FU TAO Building, 98 Argyle Street, Mongkok, Kowloon, Hong Kong
          </div>

          {/* <div className='unit-04-7f'>
            Unit 04, 7/F Bright Way Tower No. 33 Mong Kok Road, Kowloon, Hong
            Kong
          </div>
          
          <div className='unit-04-7f1'>
            Senayan Trade Center, Lt. 2 Blok C3D No. 26 Jl. Asia Afrika Pintu IX
            Jakarta 10270
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Mobile
