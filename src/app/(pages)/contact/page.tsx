export default function Contato() {
  return (
    <div className="bg-blue-50 min-h-screen p-4 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6 text-center">
        Contato
      </h1>
      <div className="max-w-xl mx-auto space-y-6 text-gray-700">
        <p>
          Se você quiser falar com a gente, tirar dúvidas ou fazer pedidos,
          estamos à disposição!
        </p>
        <div>
          <p className="font-semibold text-pink-600">Telefone:</p>
          <p className="text-gray-600">(xx) xxxxx-xxxx</p>
        </div>
        <div>
          <p className="font-semibold text-pink-600">E-mail:</p>
          <p className="text-gray-600">contato@elamaislinda.com</p>
        </div>
      </div>
    </div>
  );
}
