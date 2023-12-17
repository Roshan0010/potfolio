
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <>
    <div className='h-[100vh] bg-gray-200  '>
      <Header />
      <Content />
      <Footer />
      
    </div>
    </>
  );
}

export default App;
