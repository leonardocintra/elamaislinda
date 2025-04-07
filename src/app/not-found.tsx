import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-pink-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-pink-500 mb-2">
        Ops! Página não encontrada.
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        A página que você tentou acessar não existe ou foi movida. Mas não se
        preocupe, você pode voltar para a nossa página inicial!
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-pink-500 text-white rounded-xl shadow hover:bg-pink-600 transition-all"
      >
        Voltar para o Início
      </Link>

      <div className="mt-10 w-full max-w-xs h-64 bg-pink-200 rounded-2xl flex items-center justify-center">
        <span className="text-pink-400">[Imagem ilustrativa aqui]</span>
      </div>
    </div>
  );
}
