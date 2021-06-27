import React, { useRef } from "react"
import animateInView from "../helpers/helpers"

export default function Welcome({ animationStartFrom }) {
  const inputEl = useRef(null)
  const animationDirection = animateInView(inputEl, animationStartFrom)

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row mx-auto px-10 lg:p-0"
      ref={inputEl}
    >
      <div className="lg:w-3/5 xl:w-1/2 lg:ml-8 order-2 lg:order-1 ">
        <picture>
          <source srcSet="./images/THOMI-2.jpg" media="(min-width: 1280px)" />
          <img
            src="./images/THOMI-2-m.jpg"
            alt="Thomas Fischer - Webentwickler aus Stuttgart"
            className="max-h-screen m-auto"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="lg:w-2/5 xl:w-1/2 lg:mx-12 mb-12 lg:mb-0 mt-10 lg:mt-32 order-1 lg:order-2 lg:text-left">
        <div className={`lg:text-8xl text-5xl leading-tight text-gradient`}>
          Hey! <br />
          Ich bin Thomas
        </div>
        <div
          className={`lg:text-4xl text-2xl leading-tight lg:leading-normal mt-4 lg:mt-12`}
        >
          Webentwickler aus Stuttgart
        </div>
      </div>
    </div>
  )
}
