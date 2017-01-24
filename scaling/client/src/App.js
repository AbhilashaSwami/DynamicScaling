import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  height: 310,
  width: '100%',
  color: 'white',
  background: '#1A237E',
  
 
 
  display: 'inline-block',
};

const styles = {
  
  height: 310,
  width: '100%',
  colour: '#006064',
  
 
  
  display: 'inline-block',
};

const circle = {
  height: 140,
  width: 140,
  margin: 20,
  textAlign: 'center',
  fontSize: 36,
  display: 'inline-block',
};


class App extends React.Component
{
  render() {
    return(
      <div>
    <Paper style={style} zDepth={1} >
     <div style={{textAlign: 'center',color: 'white', marginLeft: '1%',float:'left', paddingTop: 5, width: '48%'}}> 
     <h2> Workload </h2>
      <Paper style={circle} zDepth={1} circle={true} >
      <h6> 200 </h6>
      </Paper>
     </div>

     <div style={{textAlign: 'center',color: 'white', marginRignt:'1%',float:'left', paddingTop: 5, width: '48%'}}> 
     <h2> Workers </h2>
      <Paper style={circle} zDepth={1} circle={true} >
      <h6> 150 </h6>
      </Paper>
     </div>

     </Paper>
    

    <Divider />
    <Paper style={styles} zDepth={1}>
    <div style={{color: '#006064', marginLeft: 170,float:'left', paddingTop: 40, width: '40%'}} >
   <TextField
      floatingLabelText ="Frequency"
    />msgs/s
    </div>
  
    
    <div style={{color: '#006064',marginLeft: 70, float:'right', paddingTop:40, width: '40%'}} >

    <TextField
    floatingLabelText="Processing Delay"
    />ms
    <br />
    </div>
    
     <RaisedButton style={{margin:120, marginLeft:570}} label="Submit" primary={true}  />
     
    
    </Paper>

    </div>
      );
}
}

export default App;