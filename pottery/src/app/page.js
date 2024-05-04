import Image from 'next/image'
import ceramicItems from '../../public/ceramicItems.jpg'
import Link from 'next/link'

export default async function Home() {

  return (
    <div>
      <Image 
        src={ceramicItems}
        alt='homepage'
        className='backgroundPic'
        fill='true'
        priority='true'
      />
      <div className='title'>
        <h1>Studio Terra</h1>
        <div className='homepageNavLinks'>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}
