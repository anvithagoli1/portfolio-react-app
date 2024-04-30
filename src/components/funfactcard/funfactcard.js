import './funfactcard.css';

export const FunFactCard = ({ title, description }) => {
    return (
        <div className='funfactcard'>
            <div className='title'> {title} </div>
            <div className='description'> {description} </div>
        </div>
    );
};