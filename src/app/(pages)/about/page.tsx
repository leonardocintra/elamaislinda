export default function About() {
  return (
    <div className="bg-pink-50 min-h-screen p-4 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6 text-center">
        Sobre Nós
      </h1>
      <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
        <p>
          Fazemos lacinhos artesanais com muito carinho para bebês e crianças.
          Acreditamos que cada detalhe pode deixar uma menina ainda mais
          encantadora.
        </p>
        <p>Somos um casal apaixonado por crianças e temos quatro filhos:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Luisa - 6 anos</li>
          <li>Henrique - 4 anos</li>
          <li>Mariana - 3 anos</li>
          <li>Laura - 4 meses</li>
        </ul>
        <p>
          Desde 2017, construímos nossa família com amor e dedicação. Vivemos em
          Franca - SP e sonhamos em impactar a vida de outras famílias, fazendo
          as meninas se sentirem como verdadeiras princesas com nossos laços.
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-pink-600 mb-2">
            Nossa Família
          </h2>
          <div className="w-full h-64 bg-pink-100 rounded-xl flex items-center justify-center">
            <span className="text-pink-400">[Foto da família aqui]</span>
          </div>
        </div>
      </div>
    </div>
  );
}
