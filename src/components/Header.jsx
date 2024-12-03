import Link from 'next/link';

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <nav className="container mx-auto flex justify-between">
      <h1 className="text-xl font-bold">Digitalización de Albaranes</h1>
      <ul className="flex space-x-4">
        <li><Link href="/index" className="hover:underline">Index</Link></li>
        <li><Link href="/clientes" className="hover:underline">Clientes</Link></li>
        <li><Link href="/proyectos" className="hover:underline">Proyectos</Link></li>
        <li><Link href="/albaranes" className="hover:underline">Albaranes</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
