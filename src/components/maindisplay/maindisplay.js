import './maindisplay.css';

export const MainDisplay = ({color}) => {
    return (
        <>
            <div className='maindisplay'>
                <div>
                    <img src={require("../../images/anvitha.JPG")} className='img'/>
                </div>  
                <div>
                    <h1 className='header'>Anvitha Goli</h1>
                    <h2 className='subtitle' style={{color: color}}>UI/UX Designer</h2>
                </div>
            </div>
        </>
    );
};