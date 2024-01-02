import './index.scss';
import Checkbox from './Checkbox';



const Task = ({name, done}) => {


    return (
        <div className='task'>
            <Checkbox checked={done} />
            {name}
        </div>
    )
}

export default Task