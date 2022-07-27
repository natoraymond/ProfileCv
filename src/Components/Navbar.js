import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div>
            <ul class="topnav right">
                <li className='logo'>Nnadi Nnamdi Raymond Portfolio</li>
                <li className='right'><Link to='/contacts'><i className="icon-phone"></i> Contacts</Link></li>
                <li className='right'><Link to='/skills'><i className="icon-cogs"></i> Skills</Link></li>
                <li className="right"><Link to='/about'><i className="icon-user"></i> About</Link></li> 
                <li className="right"><Link to='/'><i className="icon-home"></i> Home</Link></li>                
            </ul>
        </div>
        
    )
}
export default Navbar;