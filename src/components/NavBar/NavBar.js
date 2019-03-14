import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return(
            <div className="NavBar">
                <div className="NavBar__main-logo">
                    <h2 className="NavBar__main-logo__h2">SHOPMATE</h2>
                </div>

                <div className="NavBar__list">
                    <ul className="NavBar__list__ul">
                        <li className="NavBar__list__ul__li">Women</li>
                        <li className="NavBar__list__ul__li">Men</li>
                        <li className="NavBar__list__ul__li">Kids</li>
                        <li className="NavBar__list__ul__li">Shoes</li>
                        <li className="NavBar__list__ul__li">Brands</li>
                    </ul>
                </div>  

                <div className="NavBar__search-bar">

                </div>   

                <div className="NavBar__shopping-cart">
                    
                </div>            
            </div>
        );
    }
}

export default NavBar;
