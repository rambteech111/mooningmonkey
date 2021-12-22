import React from 'react'
import { Link } from 'react-router-dom';
import { MenuList } from "./MenuList";

function Navbar() {
    const getMenuList = MenuList.map(({url,title},i) => {
        return(
            <li>
            <Link to={url}>{title}</Link>
            </li>
        );
    });
    return (
      <nav>
<ul>
    {getMenuList}
</ul>
      </nav> 
    )
}

export default Navbar
