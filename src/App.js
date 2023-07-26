

import AdCard from './components/AdCard';
import AdCardMain from './components/AdCardMain';
import AdSlickCarousel from './components/AdSlickCarousel';
import AdSlider from './components/AdSlider';
import CallMentors from './components/CallMentors';
import CollegeVidyaCard from './components/CollegeVidyaCard';
import CoursesSection from './components/CoursesSection';
import DoubtSection from './components/DoubtSection';
import Footers from './components/Footers';
import InfiniteScroll from './components/InfiniteScroll';
import MentorsCard from './components/MentorsCard';
import Navbars from './components/Navbars';
import NewsPaperCard from './components/NewsPaperCard';
import UniversitiesList from './components/UniversitiesList';
import VideoCardGrid from './components/VideoCardGrid';
import WhatMakesUsApart from './components/WhatMakesUsApart';

function App() {







  return (
    <div className="App">

         <Navbars/>
        <AdSlider/>
        <AdCardMain/>
        <CoursesSection/>
       <AdSlickCarousel/>
       <WhatMakesUsApart/>
       <CollegeVidyaCard/>
       {/* <MentorsCard/>  */}
         <UniversitiesList/> 
          {/* <VideoCardGrid/>  */}
         <NewsPaperCard/>

        <DoubtSection/>

       <CallMentors/> 

        <InfiniteScroll/> 
        <Footers/> 
        
      
    </div>
  );
}

export default App;
