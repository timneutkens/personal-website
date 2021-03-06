import { useRouter } from 'next/router';
import Navigation from '../components/navigation';
import Link from 'next/link';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header>
      <div id='title-wrapper'>
        <Link href='/'>
          <img
            src='/headshot.jpeg'
            id='headshot'
            alt='headshot of james bedont'
          />
        </Link>
        <div id='title-text'>
          <h1 id='name'>James Bedont</h1>
          <h2 id='title'>Software Engineer</h2>
        </div>
      </div>

      <Navigation currentPath={pathname} />
    </header>
  );
};

export default Header;
