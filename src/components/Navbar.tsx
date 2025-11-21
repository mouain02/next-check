import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Acef Laatiri</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-500">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}