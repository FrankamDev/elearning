import NavBar from '@/components/NavBar';
import FirstSection from '@/components/FirstSection'
import React from 'react'
import Technologies from '../components/Technologies';
import Footer from '../Footer';
import Member from '../category/Member';
import RoadmapInteractive from '../components/RoadmapInteractive';
// import RoadmapInteractive from '../components/RoadmapInteractive';

const ParcoursIndex = () => {
 return (
  <>
   <NavBar />
   <FirstSection />
   <Technologies />
   <RoadmapInteractive />
   <Member />
   <Footer />
  </>
 )
}

export default ParcoursIndex
