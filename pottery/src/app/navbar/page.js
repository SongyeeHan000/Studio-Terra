import Link from 'next/link'
export default async function NavBar() {

    return (
        <header>
            <div className="navbar">
                <div id="logo">
                    <Link href='/'><h3>Studio Terra</h3></Link>
                </div>
                <div className="navMenu">
                    <Link href="/about">About</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/contact">Contact</Link>
                </div>
        
            </div>
        </header>
      
    )
  }
  