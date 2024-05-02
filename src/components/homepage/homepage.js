import './homepage.css';
import { NavBar } from './components/navbar/navbar';
import { MainDisplay } from './components/maindisplay/maindisplay';

export const HomePage = () => {
    return (
        <>
            <NavBar />
            <MainDisplay />
        </>
    );
};