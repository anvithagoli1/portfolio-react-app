import './about.css';
import { NavBar } from '../navbar/navbar';
import { FunFactCard } from '../funfactcard/funfactcard';

export const About = ({color}) => {
    return (
        <>
            <NavBar color={color}/>
            <div className='funfactcontainer'>
                < FunFactCard color={color} title='Ice Skating' description="I've done ice skating since I was 11 years old. I would compete against others as well."/>
                < FunFactCard color={color} title='Dance' description="I've been dancing since I was four years old and continued dancing in college for UCSD's Indian Fusion Dance Team."/>
                < FunFactCard color={color} title='Art' description="I've always had a knack for painting and drawing. I have drawn a self portrait and created many other pieces." />
            </div>
        </>
    );
};