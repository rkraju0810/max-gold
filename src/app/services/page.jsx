import Achievesucesses from '@/components/services/Achievesucesses'
import Ourservices from '@/components/services/ourservices'
import Servicegrid from '@/components/services/Servicegrid'
import Aboutus from '@/components/services/Aboutus'
import ServicesHero from '@/components/services/ServicesHero'
import React from 'react'

const page = () => {
  return (
    <div>
        <ServicesHero/>
        <Ourservices/>
        <Servicegrid/>
        <Aboutus/>
        <Achievesucesses/>
    
    </div>
  )
}

export default page
