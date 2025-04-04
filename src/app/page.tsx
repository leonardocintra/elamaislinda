import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-blue-50 min-h-screen flex flex-col">
      {/* Header (invisível no mobile) */}
      <header className="hidden md:flex bg-white shadow-md py-4 px-6 justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">Ela Mais Linda</h1>
        <nav className="space-x-6 text-pink-500 font-medium">
          <Link href="#home" className="hover:text-pink-700">
            Home
          </Link>
          <Link href="#quem-somos" className="hover:text-pink-700">
            Quem Somos
          </Link>
          <Link href="#contato" className="hover:text-pink-700">
            Contato
          </Link>
        </nav>
      </header>

      {/* Banner */}
      <section
        id="home"
        className="w-full h-48 md:h-64 bg-pink-200 flex items-center justify-center text-center px-4"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-pink-700">
          Laços para sua bebê ficar ainda mais linda!
        </h2>
      </section>

      {/* Galeria de Lacinhos */}
      <main className="flex-1 p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl shadow p-4 flex flex-col items-center"
          >
            <div className="w-full h-40 md:h-48 bg-pink-100 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-pink-400">Imagem do Lacinho {item}</span>
            </div>
            <p className="text-center text-gray-600 mb-2">
              Lacinho fofo com detalhes delicados para ocasiões especiais.
            </p>
            <button className="mt-auto px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600">
              Mais detalhes
            </button>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-white py-6 px-6 mt-6 text-center text-sm text-gray-500">
        <div className="mb-4 space-x-4 text-pink-500 font-medium">
          <Link href="#home" className="hover:text-pink-700">
            Home
          </Link>
          <Link href="#quem-somos" className="hover:text-pink-700">
            Quem Somos
          </Link>
          <Link href="#contato" className="hover:text-pink-700">
            Contato
          </Link>
        </div>
        <div className="mb-2">
          © 2025 Ela Mais Linda. Todos os direitos reservados.
        </div>
        <div className="space-x-4">
          <Link
            href="https://instagram.com"
            target="_blank"
            className="hover:text-pink-600"
          >
            Instagram
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            className="hover:text-pink-600"
          >
            Facebook
          </Link>
          <Link
            href="https://wa.me/"
            target="_blank"
            className="hover:text-pink-600"
          >
            WhatsApp
          </Link>
        </div>
      </footer>
    </div>
  );
}
