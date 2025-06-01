import Header from './components/Header';
import Main from './components/Main';
import Experiencia from './components/Experiencia';

export default function Home() {
  return (
    <div className="">
      <div className="container mx-auto py-4 w-full overflow-x-hidden">
        <Header />
        <Main />

        <Experiencia />
        <section></section>
        <footer></footer>
      </div>
    </div>
  );
}
