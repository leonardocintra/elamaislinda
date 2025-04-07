export default function Home() {
  return (
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
  );
}
