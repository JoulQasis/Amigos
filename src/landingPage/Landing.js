import React from 'react'
import landingCss from './landing.module.css'
function Landing() {
  return (

    <div>
      <container className={landingCss.container1}>
        <img
          className={landingCss.img1}
          src={require("./hero.jpg")} />
        <figcaption className={landingCss.figcaption}>على شان نكون صحاب
          <br></br> !كل بس عند اميجوس
        </figcaption>
      </container>
    </div>

  )
}

export default Landing
