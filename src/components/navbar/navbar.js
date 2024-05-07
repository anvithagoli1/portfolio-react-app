import './navbar.css';
import { useNavigate } from 'react-router-dom';

export const NavBar = ({color}) => {
    let navigate = useNavigate();
    
    return (
        <div className='navbar' style={{backgroundColor: color}}>
            <div id='name' className='hoverable' onClick={() => navigate('/')}> Anvitha Goli </div>
            <div className='categories hoverable' onClick={() => navigate('/about')}> About </div>
            <div className='categories hoverable' onClick={() => navigate('/theme')}> Theme </div>
            <div className='categories'> Resume </div>
        </div>
    );
};