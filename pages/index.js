import Head from 'next/Head';
import Image from 'next/image';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/Link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ninja List | Home </title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <h2>
          This is a ninja file website created by web developer WASABI , you can
          check all the details in Ninja List.
        </h2>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis esse
          hic perferendis laborum quasi perspiciatis ex, qui vel sit mollitia
          repellat fugiat at quam voluptates, et magnam vitae magni delectus?
        </p>
        <Link href='/ninjas'>
          <a className='btn'>See Ninja Listing</a>
        </Link>
      </div>
    </div>
  );
}
