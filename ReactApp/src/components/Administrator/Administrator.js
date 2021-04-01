import React,{useState} from 'react';
import AddUsers from "./AddUsers"
import TraditionalLayout from '../UI/Layout/ComposedLayouts/TraditionalLayout';
import AllUsers from './AllUsers';
import AccessControl from './AccessControl';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});



const Administrator =(props)=>{
  const [tabValue,setTabValue]=useState(0);
  const tabs=['All Users','Access Control','Add User'];



  


  
    return (
     

    <TraditionalLayout
        title="Admin Page"
        tabs={tabs}
        handleTabChange={(event,value)=>setTabValue(value)}
        tabValue={tabValue}
    >
      <React.Fragment>
        {tabs[tabValue]==='All Users'&&<AllUsers/>
        
        }
         {tabs[tabValue]==='Access Control'&&<AccessControl/>
        
      }
        {tabs[tabValue]==='Add User'&&<AddUsers/>
        
      }
      </React.Fragment>

       
    </TraditionalLayout>
    );
  }


Administrator.propTypes = {

};


export default Administrator;
