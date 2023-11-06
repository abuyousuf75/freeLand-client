import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebDb from './WebDb';
const RTabs = () => {
    const [webDevolopment,setWebDevolopment] = useState();
    const [looding, setLooding] = useState(true);
    // for webDb
   useEffect(() =>{
        axios.get('http://localhost:5000/webDevolopment')
        .then(data => {
            setWebDevolopment(data?.data);
            setLooding(false)
        })
   },[])

   if(looding){
    return <h2>looding.....</h2>
   }
   

  const items = webDevolopment.map(job => job?.category);
  console.log(items)

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
                  <div className='grid md:grid-cols-4 mt-10'>
                  {
                    webDevolopment.map(jobs => <WebDb key={jobs._id }jobs={jobs}></WebDb>)
                  }
                  </div>
                   
                </TabPanel>
                <TabPanel>
                    <h2>Digital marketing content </h2>
                </TabPanel>
                <TabPanel>
                    <h2>Graphics design content </h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default RTabs;