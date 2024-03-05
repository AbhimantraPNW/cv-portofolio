import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return <Link href='/'>
    <Image src='/logo-google.svg' width={40} height={40} priority alt='' />
  </Link>
}

export default Logo