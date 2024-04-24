import React, { useContext } from 'react'
import { UserContext, ColorContext} from './MyContext'

function ContentData() {
   
    const user = useContext(UserContext)
    const color = useContext(ColorContext)

  return (
    <div style={{color: color}}>
        <ul>
            <li className='m-3 mx-auto list-inline h1'>Prénom : {user.name}</li>
            <li className='m-3 mx-auto list-inline h1'>Age : {user.age}</li>
        </ul>
    </div>

    // <UserContext.Consumer>
    //     {
    //         user => {
    //             return (
    //                 <ColorContext.Consumer>
    //                     {
    //                         color => {
    //                             return (
    //                                 <div style={{color: color}}>
    //                                     <ul>
    //                                         <li className='m-3 mx-auto list-inline h1'>Prénom : {user.name}</li>
    //                                         <li className='m-3 mx-auto list-inline h1'>Age : {user.age}</li>
    //                                     </ul>
    //                                 </div>
    //                             )
                            
    //                         }
                            
    //                     }
    //                 </ColorContext.Consumer>
    //             )
    //         }
    //     }
    // </UserContext.Consumer>

  )
}

export default ContentData