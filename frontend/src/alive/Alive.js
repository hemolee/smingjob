import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios'


export default class Alive extends React.Component{
 
  state={
    alives:[]
  }
  componentDidMount(){
    axios.get('http://localhost:9000/alives')
    .then(res=>{
      const alives = res.data;
      this.setState({alives});
      
  })
  }
 
  render(){ 
    let cardGrid ={
      paddingTop: '5%',
      paddingBottom: '5%',
    }
    let  card= {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#e3ecf4'
    }
    let cardContent= {
      flexGrow: 1,
    }
    let area ={
      color: '#404040',
    }
    let title ={
      textAlign: 'center',
      color: '#336699 ',
      fontWeight: 'bold'
    }
    let state = {
      textAlign: 'right',
      color: '#ba3838',
      fontWeight: 'bold'
    }
    let tags= {
      textAlign: 'center',
      color: 'SteelBlue '
    }  
  return(  
    <React.Fragment>
       <Container style ={cardGrid}  maxWidth="md">
       <Grid container spacing={6} >
        {this.state.alives.map(alive => <Grid item key={alive} xs={12} sm={6} md={4} >
            <Card style ={card} /* onClick={this.detail(id)} */>           
              <CardContent style ={cardContent}>                        
                <Typography style ={area} variant="h10" gutterBottom>
                  {alive.area} - {alive.career}
                </Typography> 
                <Typography><p /></Typography>      
                <Typography style={title}>
                  {alive.startDate}
                </Typography>  
                <Typography style={title}>
                  {alive.startTime}
                </Typography>        
                <Typography><p /></Typography>                    
                <Typography style={title} gutterBottom variant="h4" component="h2" >
                  {alive.corName}
                </Typography>        
                <Typography><p /></Typography>    
                <Typography style ={state} >
                {alive.state}
                </Typography>
              
              </CardContent>
          
            </Card>           
             </Grid>
              )}
              </Grid>
              </Container>
              </React.Fragment>

  )
}
}