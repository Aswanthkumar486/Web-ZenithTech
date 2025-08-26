import React from 'react'
import data from '../data/data.json'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'  
import Services from '@/components/Services'
import Careers from '@/components/Careers'
import Industries from '@/components/Industries'
import Add from '@/components/Add'   // 👈 Import Add component
import TrackRecord from '@/components/TrackRecord'
import Locations from '@/components/Locations'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home({navData,footerData,locationData,contactData,trackData,industryData,serviceData,careersData,siteData,aboutData,heroData,addData}) {
  return (
    <>
      <Navbar data={navData} site={siteData} />
      <Hero data={heroData} />
      <About data={aboutData} />
      <Careers data={careersData} />
      <Services data={serviceData} />  
      <Add data={addData} />   {/* 👈 New Section */}
      <TrackRecord data={trackData} />
      <Locations data={locationData} />

      <Industries data={industryData} />
    <Contact data={contactData} />
    <Footer data={footerData} />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      navData: data.navbar,
      siteData: data.site,
      heroData: data.hero,
      aboutData: data.about,
      serviceData: data.services,
      careersData: data.careers,
footerData:data.footer
      ,      industryData: data.companyInfo,
      addData: data.add ,
      trackData:data.trackRecord
     ,
     locationData:data.locations ,
     contactData:data.contact
      
      // ✅ now it will work
    }
  }
}

