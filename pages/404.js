import Link from 'next/Link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  });
  return (
    <div className='not-found'>
      <h1>oops...</h1>
      <h2>That page cannot be Found</h2>
      <p>
        <Link href='/'>
          <a>Go back to the home page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
