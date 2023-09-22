import './header.css';
// Router
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='separator'>
      <Link to="/">
        <h1>DEMO Streaming</h1>
      </Link>
      <nav>
        <ul>
          <li>Log in</li>
          <li className='btn'>Start your free trial</li>
        </ul>
      </nav>
    </header>
  );
}
