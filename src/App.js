import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/navbar';
import { MainDisplay } from './components/maindisplay/maindisplay';
import { FunFactCard } from './components/funfactcard/funfactcard';

function App() {
  return (
    <>
      < NavBar />
      < MainDisplay />
      <div className='funfactcontainer'>
        < FunFactCard title='Ice Skating' description="I've done ice skating since I was 11 years old. I would compete against others as well."/>
        < FunFactCard title='Dance' description="I've been dancing since I was four years old and continued dancing in college for UCSD's Indian Fusion Dance Team."/>
        < FunFactCard title='Art' description="I've always had a knack for painting and drawing. I have drawn a self portrait and created many other pieces." />
      </div>
    </>
  );
}

export default App;
