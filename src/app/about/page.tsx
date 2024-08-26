import React from 'react'
import MainPage from '@/components/About/MainPage'
import Intro from '@/components/About/Intro'
import AboutMe from '@/components/About/AboutMe'
import MoreDetail from '@/components/About/MoreDetail'
import Resume from '@/components/About/Resume'
import Mockups from '@/components/About/Mockups'
import Closing from '@/components/About/Closing'

function About() {
  return (
    <>
      <Intro/>
      <AboutMe/>
      <MoreDetail/>
      <Resume/>
      <Mockups/>
      <Closing/>
    </>
  )
}

export default About