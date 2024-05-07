import './homepage.css';
import { NavBar } from '../navbar/navbar';
import { MainDisplay } from '../maindisplay/maindisplay';

export const HomePage = ({color}) => {
    return (
        <>
            <NavBar color={color}/>
            <MainDisplay color={color}/>
        </>
    );
};