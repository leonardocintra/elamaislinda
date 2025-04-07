import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-6 px-6 mt-6 text-center text-sm text-gray-500">
      <div className="mb-4 space-x-4 text-pink-500 font-medium">
        <Link href="/" className="hover:text-pink-700">
          Home
        </Link>
        <Link href="/about" className="hover:text-pink-700">
          Quem Somos
        </Link>
        <Link href="/contact" className="hover:text-pink-700">
          Contato
        </Link>
      </div>
      <div className="mb-2">
        © 2025 - Ela Mais Linda. Todos os direitos reservados.
      </div>
      <div className="space-x-4">
        <Link
          href="https://instagram.com/elamaislinda"
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
  );
}
