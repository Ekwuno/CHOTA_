import React, {Component} from 'react';
import './trends.css';
import axios from 'axios';
import {Link} from 'react-router-dom';



// const API_KEY = '56f0450d2729d1d9861d643496069047'

class Trends extends Component{

state ={
    items: []
}


    componentDidMount(){
        axios.get(`https://chota1.herokuapp.com/place`)
        .then(res=>{
            console.log(res.data.place)
            this.setState({items: res.data.place})
        })
    }

    render(){
        if (sessionStorage.getItem('user')){
            return(
                <div>
                    {this.state.items.map(value =>(
                <div key={value}  className='placediv'>
                    <div className='placeImageDiv'>
                    <Link to ={{
                               pathname:`/PlaceDetails/${value._id}`,
                               state: {place: value.name}
                           }}>
    
                            <img src={value.image} alt={value.name} className='placesImage'/> </Link>
                    </div>
                    <div className='placeDetailDiv' >
                    <h4>{value.name}</h4>
                    <span> space for rating</span>
                    <p>Gps location of place</p>
                    </div>
                </div>
                    ))}
                </div>
            );
        }
        else{
            return(
                <div>
                        {this.state.items.map(value =>(
                        <div key={value}  className='placediv'>
                            <div className='placeImageDiv'>
                                <img src={value.image} alt={value.name} className='placesImage'/>
                            </div>
                            <div className='placeDetailDiv' >
                            <h4>{value.name}</h4>
                            <span> space for rating</span>
                            <p>Gps location of place</p>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
   
    }
}


export default Trends