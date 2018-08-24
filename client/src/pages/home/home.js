import React from 'react';
// import { Row, Col, } from 'react-bootstrap';
import Nav from '../components/nav-bar/nav';
import './home.css';
import Carousel from '../components/carousel/carousel.js';
import SearchBar from '../components/search-bar/search-bar.js';
import Trends from '../components/trends/trends.js';
import Footer from '../components/footer/footer.js';


const Home = () => {
    return(
        <div>
            <div className='main-container'>
                    <div className='nav-header'>
                    <Nav/>
                    </div>
                <div className='topContainer'>
                    <h3> Search for the best places in town </h3>
                    <SearchBar/>
                </div> 
                <h4>Find Quickly</h4>           
                <Carousel/>
                <div className='bottomcContainer'>
                <h4> Trending </h4>
                    <Trends/>
                </div>
            </div>
            <Footer/>
        </div>
        
    );
}



export default Home