import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebDb from './WebDb';
import DigitalMarketing from './DigitalMarketing';
import GraphicsDesigner from './GraphicsDesigner';
const RTabs = () => {
    const [looding, setLooding] = useState(true);
    const [webDevolopment,setWebDevolopment] = useState();
    const [digitalMarketing, setDigitalMarketing] = useState();
    const [graphicsDesigner, setGraphicsDesigner] = useState();
   
    // for weDevolopment
    
   useEffect(() =>{
        axios.get('http://localhost:5000/webDevolopment')
        .then(data => {
            setWebDevolopment(data?.data);
            setLooding(false)
        })
   },[])
   // for DegitalMarketing
   useEffect(() =>{
        axios.get('http://localhost:5000/digitalMarketing')
        .then(data => {
            setDigitalMarketing(data?.data);
            setLooding(false)
        })
   },[])

   // for graphics designer 
   useEffect(() =>{
        axios.get('http://localhost:5000/graphicsDesigner')
        .then(data => {
            setGraphicsDesigner(data?.data);
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
                    webDevolopment.map(jobs => <WebDb key={jobs._id }jobs={jobs}></WebDb>)
                  }
                  </div>
                   
                </TabPanel>
                <TabPanel>
                    {/* digtla marketing content */}
                <div className='grid md:grid-cols-3 mt-10 gap-6'>
                  {
                    digitalMarketing.map(jobs =><DigitalMarketing key={jobs._id} jobs={jobs}></DigitalMarketing>)
                  }
                  </div>
                </TabPanel>
                <TabPanel>
                    {/*Graphics design content  */}
                   <div className='grid md:grid-cols-3 mt-10 gap-6'>
                   {
                    graphicsDesigner.map(jobs =><GraphicsDesigner key={jobs._id} jobs={jobs}></GraphicsDesigner>)
                  }
                   </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default RTabs;