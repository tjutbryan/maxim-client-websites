import './AchievementContainer.css'
import { useState } from 'react'

const AchievementContainer = () => {
  const achievements = [
    {
      src: 'media.png',
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
      src: 'fmcg.png',
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
      src: 'apparel.png',
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
      src: 'education.png',
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
    <div className='we-achieved2'>
      <div className='we-achieved-item' />
      <div className='we-achieved3'>WE ACHIEVED</div>
      <div className='icon1'>
        <img
          onClick={handleMediaClicked}
          className='media-icon1'
          src='/assets/desktop-mobile/media.png'
        />
        <img
          onClick={handleFmcgClicked}
          className='fmcg-icon1'
          src='/assets/desktop-mobile/fmcg.png'
        />
        <img
          onClick={handleApparelClicked}
          className='apparel-icon1'
          src='/assets/desktop-mobile/apparel.png'
        />
        <img
          onClick={handleEducationClicked}
          className='education-icon1'
          src='/assets/desktop-mobile/education.png'
        />
        <div
          onClick={handleMediaClicked}
          className={`media1 ${mediaActiveClassName}`}
        >
          Media
        </div>
        <div
          onClick={handleFmcgClicked}
          className={`fmcg1 ${fmcgActiveClassName}`}
        >
          FMCG
        </div>
        <div
          onClick={handleApparelClicked}
          className={`apparel1 ${apparelActiveClassName}`}
        >
          Apparel
        </div>
        <div
          onClick={handleEducationClicked}
          className={`education1 ${educationActiveClassName}`}
        >
          Education
        </div>
      </div>
      <div className='icon-on-clicked'>
        <div className='icon-on-clicked-child' />
        <div className='selected'>
          <img
            className='selected-child'
            src={`/assets/desktop-mobile/${achievements[achievementIndex].src}`}
          />
        </div>
        <div className='education2'>{achievements[achievementIndex].title}</div>
        <div className='artbound2'>
          <div className='artbound3'>
            {achievements[achievementIndex].clientName}
          </div>
          <div className='artbound-initiative-is-container1'>
            <p className='campaign-objective-lead'>
              {achievements[achievementIndex].description}
            </p>
            <p className='campaign-objective-lead'>&nbsp;</p>
            <p className='campaign-objective-lead'>
              Campaign Objective:{' '}
              {achievements[achievementIndex].campaignObjective}
            </p>
          </div>
        </div>
        <div className='result2'>
          <div className='result-child1' />
          <div className='generated-more-than-container1'>
            {achievements[achievementIndex].results.map((item, index) => (
              <p className='campaign-objective-lead' key={index}>
                <b>*</b> {item}
              </p>
            ))}
          </div>
          <div className='result3'>Result</div>
          <div className='ellipse-div' />
          <div className='result-child2' />
        </div>
      </div>
    </div>
  )
}

export default AchievementContainer
