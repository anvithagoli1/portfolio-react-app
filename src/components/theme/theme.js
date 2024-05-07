import './theme.css';
import { NavBar } from '../navbar/navbar';

export const Theme = ({color, setColor}) => {

    const changeColor = (color) => {
        setColor(color);
    }
    
    return (
        <>
            <NavBar color={color}/>
            <h1 className='theme-title'>Theme Picker</h1>
            <div className='theme-box'>
                <div className='color-picker' onClick={() => changeColor("#f94144")} style={{backgroundColor: "#f94144"}}></div>
                <div className='color-picker' onClick={() => changeColor("#f3722c")} style={{backgroundColor: "#f3722c"}}></div>
                <div className='color-picker' onClick={() => changeColor("#f8961e")} style={{backgroundColor: "#f8961e"}}></div>
                <div className='color-picker' onClick={() => changeColor("#f9844a")} style={{backgroundColor: "#f9844a"}}></div>
                <div className='color-picker' onClick={() => changeColor("#f9c74f")} style={{backgroundColor: "#f9c74f"}}></div>
                <div className='color-picker' onClick={() => changeColor("#90be6d")} style={{backgroundColor: "#90be6d"}}></div>
                <div className='color-picker' onClick={() => changeColor("#43aa8b")} style={{backgroundColor: "#43aa8b"}}></div>
                <div className='color-picker' onClick={() => changeColor("#4d908e")} style={{backgroundColor: "#4d908e"}}></div>
                <div className='color-picker' onClick={() => changeColor("#577590")} style={{backgroundColor: "#577590"}}></div>
                <div className='color-picker' onClick={() => changeColor("#277da1")} style={{backgroundColor: "#277da1"}}></div>
            </div>
        </>
    );
};