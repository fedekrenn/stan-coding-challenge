import './home.css';
// Router
import { Link } from 'react-router-dom';
// Components
import Card from '../../components/Card/Card';

export default function Home() {
  return (
    <>
      <h2 className='separator'>Popular Titles</h2>
      <section className="main-container separator">
        <Link to="/series">
          <Card title="Series" titleDefault={true} />
        </Link>
        <Link to="/peliculas">
          <Card title="Movies" titleDefault={true} />
        </Link>
      </section>
    </>
  );
}
