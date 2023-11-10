import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebDevolopment from '../../../../Sharedcomponents/CategoryJobsDetails/WebDevolopmentAllContent/WebDevolopment';
import GraphicsDesign from '../../../../Sharedcomponents/CategoryJobsDetails/GraphicsDesignAllContent/GraphicsDesign';
import Digitalmarketing from '../../../../Sharedcomponents/CategoryJobsDetails/DigitalMarketingAllContent/Digitalmarketing';


const RTabs = () => {
    const [looding, setLooding] = useState(true);
   const [webDevolopments, setWebDevolopment] = useState([]);
   const [gaphicsDesigns, setGraphicsDesign] = useState([]);
   const [digitalMarketings, setDigitalMarketing] = useState([]);
   
    // for weDevolopment
    useEffect(() =>{
        axios.get('http://localhost:5000/allJobs?jobcategory=webDevolopment')
        .then(res =>{
           setWebDevolopment(res.data);
           setLooding(false)
        })
    },[])
    
   // for DegitalMarketing
   useEffect(() =>{
    axios.get('http://localhost:5000/allJobs?jobcategory=digitalMarketing')
    .then(res =>{
       setDigitalMarketing(res.data);
       setLooding(false)
    })
},[])

   
   // for graphics designer 
   useEffect(() =>{
    axios.get('http://localhost:5000/allJobs?jobcategory=graphicsDesign')
    .then(res =>{
       setGraphicsDesign(res.data);
       setLooding(false)
    })
},[])


   if(looding){
    return <h2>looding.....</h2>
   }



    return (
        <div className='mt-14'>
            <Tabs>
                <TabList>
                    <Tab>Web development</Tab>
                    <Tab>Digital marketing</Tab>
                    <Tab>Graphics design</Tab>
                </TabList>

                <TabPanel>
                   {/* web db content */}
                 <div className='grid md:grid-cols-3 mt-10 gap-6'>
                      
                {
                    webDevolopments.map(web => <WebDevolopment key={web._id} web={web}></WebDevolopment>)
                }
                 </div>
                   
                </TabPanel>
                <TabPanel>
                    {/* digtla marketing content */}
                <div className='grid md:grid-cols-3 mt-10 gap-6'>
                  {
                    digitalMarketings.map(digital => <Digitalmarketing key={digital._id} digital={digital}></Digitalmarketing>)
                  }
                  </div>
                </TabPanel>
                <TabPanel>
                    {/*Graphics design content  */}
                   <div className='grid md:grid-cols-3 mt-10 gap-6'>
                    {
                        gaphicsDesigns.map(graphics => <GraphicsDesign key={graphics._id} graphics={graphics}></GraphicsDesign>)
                    }

                   </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default RTabs;