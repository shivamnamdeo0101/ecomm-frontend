import React from 'react'
import "../src"

function App() {
  return (
    <div className='App'>
      <div className='page'>

        {/* header */}
        <div className='header'>
          <img className='img1' src="https://brigadereap.com/asset/img/_brigade-reap-logo.png?v=1.6" alt='' />
          <img  className='img2'src="https://ik.imagekit.io/lajz2ta7n/temp/2a9178ed-f43e-b901-923b-5cb27df9170b.png" alt='' />
        </div>
      
        {/* cover image */}

        <div className="cover">
          <img className="banner-image" src="https://ik.imagekit.io/lajz2ta7n/temp/businessman-hold-graph-arrow-positive-growth-iconpointing-creative-business-chart-with-upward-arrowsfinancial-business-growth-conceptlow-polygonalincreased-sales-increased-value.jpg" alt="Banner Image" />
          <div className="heading-container">
            <div className="main-heading">
             <a href="">Program </a> | <a href="">Startups </a> | <a href="">Investments </a> |   <a href="">Events</a>
              
            </div>
          </div>
          <div className="right-heading-container">

            <img src="https://ik.imagekit.io/lajz2ta7n/temp/reap1.png?updatedAt=1691293183066" alt="" />
          </div>
        </div>


        <div className='intro-heading-container'>
          <div className='intro-heading'>
            <p>After a rigorous selection process, we take great pride in introducing the five
              exceptional startups that have earned their spot in Cohort 14. These innovative startups
              represent a diverse range of focus areas, spanning from robotics to alternative
              materials to hospitality.</p>
          </div>
        </div>


        <div className='page-desc'>

          <div className='image-logo-grid'>
            <img src="https://ik.imagekit.io/lajz2ta7n/temp/paving+.jpg" alt="" />
            <img src="https://ik.imagekit.io/lajz2ta7n/temp/raho.png" alt="" />
            <img src="https://ik.imagekit.io/lajz2ta7n/temp/Vividobots.png" alt="" />
            <img src="https://ik.imagekit.io/lajz2ta7n/temp/Spatic.jpg" alt="" />
            <img src="https://ik.imagekit.io/lajz2ta7n/temp/uniam.png" alt="" />
          </div>

        </div>

        <div className='white_bg'>



          <div class="image-text-container">
            <p className='right_text'>
              It brings us immense joy to announce the
              successful onboarding of our latest cohort
              of groundbreaking PropTech startups.
              During an intensive two-day induction
              program, we warmly welcomed them into
              the vibrant REAP community, offering
              valuable insights into our program and
              fostering a sense of camaraderie among
              our newest members. The induction
              program culminated in an unforgettable.
            </p>
            <img src="https://ik.imagekit.io/lajz2ta7n/temp/img2.jpeg" alt="Image" />

          </div>

          <div class="image-text-container">
            <img src="https://ik.imagekit.io/lajz2ta7n/temp/img1.jpeg" alt="Image" />

            <p className='left_text'>
              evening of networking and socialising,
              where our new cohort had the opportunity to connect with seasoned industry
              leaders and like-minded entrepreneurs.
              As we embark on this exciting journey
              together, we couldn't be more thrilled to
              have these exceptional startups on board,
              and we are committed to supporting
              them wholeheartedly in their pursuit of
              innovation and growth.
            </p>

          </div>


          <div className='flex-banner'>
            <img src="https://ik.imagekit.io/lajz2ta7n/temp/2a9178ed-f43e-b901-923b-5cb27df9170b.png" className='flex_img1' alt="" />
            <img src="https://ik.imagekit.io/lajz2ta7n/temp/img8.jpeg" className='flex_img2' alt="" />
          </div>

          <div className='paragraph'>
            <p>At Reboot@REAP, we achieved a significant milestone in the history of REAP by
              successfully bringing together all our portfolio companies from across the country.
              This momentous occasion allowed us to inspire one another and collaboratively
              brainstorm innovative ways to propel the PropTech ecosystem at scale. The event
              served as an exceptional platform for accomplished founders and co-founders to
              connect, collaborate, and share their invaluable experiences</p>

          </div>
          <div className='paragraph'>
            <p>We couldn't have been happier to witness the vibrant synergy as our startups gathered
              under one roof, exchanging ideas and forging new partnerships that will undoubtedly
              set the stage for groundbreaking innovations. The opportunity to witness our startups'
              remarkable growth was truly a pleasure and we take immense pride in the thriving
              startup community we've cultivated.</p>

          </div>


          <div className='imge_two_grid'>
            <img src="https://ik.imagekit.io/lajz2ta7n/temp/img4.jpeg" />
            <img src="https://ik.imagekit.io/lajz2ta7n/temp/img3.jpeg" />

          </div>

          <div className='footer'>
            <h2>AWARDS AND RECOGNITION</h2>

            <div className='footer_grid'>

              <div className='footer_grid_comp'>
                <img src="https://ik.imagekit.io/lajz2ta7n/temp/img5.jpeg" alt="" />
                <p>
                  Angirus® IND (www.angirusind.com) from
                  our 9th cohort has been prominently
                  featured on the World Economic Forum
                </p>
              </div>
              <div className='footer_grid_comp'>
                <img src="https://ik.imagekit.io/lajz2ta7n/temp/img6.jpeg" alt="" />
                <p>
                  Two of our portfolio startups, Clairco
                  (www.clairco.in) and WEGoT (www.wegot.in)
                  have successfully made it to the prestigious
                  list of 43 #cleantech startups compiled by
                  Inc42 Media
                </p>
              </div>
              <div className='footer_grid_comp'>
                <img src="https://ik.imagekit.io/lajz2ta7n/temp/img7.jpeg" alt="" />
                <p>
                  Clairco (www.clairco.in), a company from
                  our 4th Cohort, has been selected as one
                  of the three winners for the prestigious
                  ALDAR ScaleUp challenge in Dubai
                </p>
              </div>

            </div>
          </div>


        </div>

      </div>
    </div>
  )
}
export default App