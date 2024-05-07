import './funfactcard.css';

export const FunFactCard = ({ title, description, color }) => {
    return (
        <div className='funfactcard'>
            <div className='title' style={{color: color}}> {title} </div>
            <div className='description'> {description} </div>
        </div>
    );
};