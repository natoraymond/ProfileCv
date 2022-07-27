import React from 'react'

function Skills(){
    return(
        <div>
            <h2>Skills</h2>
            <div className='column'>
              <div className='col'></div>
              <div className='col-8 column'>
              <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">PROGRAMING LANGUAGES</th>
                  <th scope="col">FRAMEWORKS & LIBRARIES</th>      
                  <th scope="col">IDE's & EDITORS</th>
                  <th scope="col">VERSION CONTROL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>JAVASCRIPT</td>
                  <td>REACT</td>
                  <td>VISUAL STUDIO CODE</td>
                  <td>GITHUB</td>      
                </tr>
                <tr>
                  <td>HTML5</td>
                  <td>REACT ROUTER</td>
                  <td>REPLIT</td>
                  <td></td>      
                </tr>
                <tr>
                  <td>CSS3</td>
                  <td>BOOTSTRAP</td>
                  <td>CODEPEN</td>
                  <td></td>      
                </tr>
              </tbody>
            </table>              
              </div>
              <div className='col'></div>
            </div>
        </div>
    )
}
export default Skills;