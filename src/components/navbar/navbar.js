import './navbar.css';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
    let navigate = useNavigate();
    
    return (
        <div className='navbar'>
            <div id='name' onClick={() => navigate('/')}> Anvitha Goli </div>
            <div className='categories' onClick={() => navigate('/about')}> About </div>
            <div className='categories'> Resume </div>
            <div className='categories'> Projects </div>
        </div>
    );
};