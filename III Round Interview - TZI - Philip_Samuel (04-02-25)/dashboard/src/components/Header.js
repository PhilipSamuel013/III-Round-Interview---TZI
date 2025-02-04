import React from 'react';
import logo from '../assets/images/logo 1.svg';
import logo1 from '../assets/images/logo 2.svg';

const Header = () => {
    return (
        <header>
            <div class="logosec">
                <div class="logo">
                <img src={logo} class="dpicn" alt="dp" />
                </div>

                {/* <img src=""
                    class="icn menuicn"
                    id="menuicn"
                    alt="menu-icon" /> */}
                    <h2>Data Sync Monitoring</h2>
                </div>

            {/* <div class="searchbar"> */}
                {/* <input type="text"
                    placeholder="Search" /> */}
                {/* <div class="searchbtn">
                    <img src=""
                        class="icn srchicn"
                        alt="search-icon" />
                </div> */}
            {/* </div> */}

            <div class="message">
                <div class="circle"></div>
                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
                    class="icn"
                    alt="" />

                {/* <div class="dp"> */}
                    <img src={logo1}
                        class="dpicn"
                        alt="dp" />
                {/* </div> */}
            </div>

        </header>
    );
};

export default Header;
