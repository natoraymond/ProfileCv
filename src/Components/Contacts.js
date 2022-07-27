import React from 'react'
import {Link} from 'react-router-dom'

function Contacts(){
    return(
        <div>
            <h2>Contacts</h2>
            <div className='column'>
                <div className='col'></div><hr/>
                <div className='col-8'><hr/><h3><i className="icon-phone"></i> +234 8063290848 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i className="icon-envelope"></i> nnamdi.raymondoct@gmail.com</h3></div>                
                <div className='col'></div>
            </div>

            
            <div className='column'>
                <div className='col'></div>
                <div className='col-6 column'>                    
                    <div className='col'></div>
                    <div className='col-10'>
                        <a target="_blank" href="https://www.linkedin.com/in/ekene-akubue-58046b77/"><img className='social' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png' alt='Linkedin'/></a>
                        <a target="_blank" href="https://web.facebook.com/eakubue"><img className='social' src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png' alt='Facebook'/></a>
                        <a target="_blank" href="https://github.com/ekeneakubue"><img className='social' src='https://pngimg.com/uploads/github/github_PNG83.png' alt='GitHub'/></a>
                    </div>
                    <div className='col'></div>
                </div>
                <div className='col'></div>
            </div>
        </div>
    )
}
export default Contacts;