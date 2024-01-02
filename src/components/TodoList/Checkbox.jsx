import { useState } from 'react';
import './index.scss';


const Checkbox = ({ checked }) => {


   return (
       <div>
           <input type='checkbox' checked={checked} />
       </div>
   )
}

export default Checkbox;
