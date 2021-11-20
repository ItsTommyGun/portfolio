import React, { useRef } from "react"
import { Link } from "gatsby-plugin-modal-routing"
import styled from "styled-components"
import ExternalLinkIcon from "../../static/icons/external-link.svg"
import ArrowLeft from "../../static/icons/arrow-left.svg"
import animateInView from "../helpers/helpers"

import Github from "../../static/icons/github.svg"

const Case = styled.div`
  .border-bottom-hover {
    transition: border 0.3s ease 0s;
    border-bottom: 2px solid transparent;
  }

  .border-bottom-hover:hover {
    border-bottom: 2px solid #dd6b20;
  }
`

const ExternalLink = styled.a``

export default function Project({
  title,
  types,
  stack,
  customer,
  content,
  image,
  textRight,
  link,
  animationStartFrom,
  github,
  detailPage,
  video,
}) {
  const inputEl = useRef(null)
  const animationDirection = animateInView(inputEl, animationStartFrom, ".2")

  return (
    <Case className="my-32 lg:flex flex-1" ref={inputEl}>
      <div
        className={`lg:w-1/2 ${
          textRight ? "order-2" : ""
        } opacity-0 fadeIn--from-${textRight ? "right" : "left"}`}
      >
        <div className="text-2xl muli leading-relaxed xl:leading-none flex justify-between">
          {title}
        </div>
        <div className="flex flex-col md:flex-row mt-8 mb-4 text-sm">
          <div className="md:w-1/3">
            <strong>ROLLE</strong>
          </div>

          <div className="md:hidden">
            {types.map(type => {
              return (
                <div className="pb-0" key={type}>
                  {type}
                </div>
              )
            })}
          </div>

          <div className="md:w-1/3 w-1/2 mt-6 md:mt-0">
            <strong>STACK</strong>
          </div>
          <div className="md:hidden">
            {stack.map(tech => {
              return (
                <div className="pb-0" key={tech}>
                  {tech}
                </div>
              )
            })}
          </div>
          <div className="md:w-1/3 w-1/2 mt-6 md:mt-0">
            <strong>KUNDE</strong>
          </div>
          <div className="md:hidden">{customer}</div>
        </div>
        <div className="mb-8 text-sm hidden md:flex">
          <div className="w-1/3">
            {types.map(type => {
              return (
                <div className="pb-2" key={type}>
                  {type}
                </div>
              )
            })}
          </div>
          <div className="w-1/3">
            {stack.map(tech => {
              return (
                <div className="pb-2" key={tech}>
                  {tech}
                </div>
              )
            })}
          </div>
          <div className="w-1/3">{customer}</div>
        </div>
        <div className="leading-8">
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
        {detailPage && (
          <Link
            className="my-8 inline-flex text-orange-600 border-bottom-hover items-center"
            to={detailPage}
          >
            <div className="mr-2 text-md">Details </div>
            <ArrowLeft className="transform rotate-180 fill-current w-4 h-4" />
          </Link>
        )}
        {github && (
          <div className="my-8 mr-6 inline-block">
            <ExternalLink
              href={github}
              rel="noreferrer"
              target="_blank"
              className="inline-flex text-orange-600 border-bottom-hover items-center"
            >
              <div className="mr-2">Code auf Github</div>
              <ExternalLinkIcon className="fill-current w-4 h-4" />
            </ExternalLink>
          </div>
        )}
        {link && (
          <div className="my-8 inline-block">
            <ExternalLink
              href={link}
              rel="noreferrer"
              target="_blank"
              className="inline-flex text-orange-600 border-bottom-hover items-center"
            >
              <div className="mr-2">Live</div>
              <ExternalLinkIcon className="fill-current w-4 h-4" />
            </ExternalLink>
          </div>
        )}
      </div>
      <div
        className={`lg:w-1/2 lg:px-10 mt-4 md:mt-0 ${
          textRight ? "order-1" : ""
        } opacity-0 fadeIn--from-${textRight ? "left" : "right"}`}
      >
        {image && (
          <img src={`./images/projects/${image}`} alt={title} loading="lazy" />
        )}
        {video && (
          <video
            src={`./videos/projects/${video}`}
            playsInline
            autoPlay
            loop
            muted
          />
        )}
      </div>
    </Case>
  )
}
