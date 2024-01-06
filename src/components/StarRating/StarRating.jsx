import { useState } from 'react';
import './index.scss'
import { FaStar } from "react-icons/fa";

const StarRating = ({ numberOfStars = 5 }) => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)


    const handleClick = (currentIndex) => {
        if (rating === currentIndex) {
            setRating(0);
        } else {
            setRating(currentIndex);
        }
    }
     

    const handleMouseEnter = (currentIndex) => {
        setHover(currentIndex);
    }

    const handleMouseLeave = () => {
        setHover(0)
        
    }


    return (
        <div className='star-rating'>

            {
                [...Array(numberOfStars)].map((_, index) => {

                    index += 1;


                    return <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'active': 'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                })
            }

        </div>
    )
}

export default StarRating

//.map((_, index) EXPLAINED: 

//The map function expects a callback function with two parameters: 
//the current element and its index. In this case, the first parameter is represented by _, 
//and it's a way of saying, "I know there's an element here, 
//but I'm not going to use it in the function body." 
//The index parameter, on the other hand, is being used in the function body.

//So, in short, _ is just a convention to indicate that the value 
//is intentionally ignored in this particular context. 
//If you or someone else were reading the code, 
//it suggests that the element itself is not being used in the logic inside the map callback.