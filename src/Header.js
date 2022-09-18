import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
    return (
        <nav className='header'>

            <Link to="/">
                <img className='header__logo' src='/amazon_logo.png' alt='nav_logo' />
            </Link>
            <div className='header__search'>
                <input type="text" className="header__searchInput" />
                <SearchIcon className='header__searchIcon ' />
            </div>
            <div className="header__nav">
                <Link className='header__link' to="/login">
                    <div className="header__option">
                        <span className='header__optionLineOne'>Hello Hamza</span>
                        <span className='header_optionLineTwo'>Sign In</span>
                    </div>
                </Link>
                <Link className='header__link' to="/login">
                    <div className="header__option">
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header_optionLineTwo'>&   Orders</span>
                    </div>
                </Link>
                <Link className='header__link' to="/login">
                    <div className="header__option">
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header_optionLineTwo'>Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className='header__link'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className='header_optionLineTwo header_basketCount'>0</span>
                    </div>
                </Link>
                
            </div>
        </nav>
    )
}

export default Header 