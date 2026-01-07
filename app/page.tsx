

export default function Home() {
  return (
    <main className="flex flex-col  h-screen w-screen items-center justify-center my-12  font-sans dark:bg-black">
         <h1 className="">Seja bem vindo Next</h1>
      <div className="flex flex-col w-[80vw] h-[45vh] bg-gray-900  flex-1 items-center justify-center font-sans mx-auto">
     
        <br></br>
        <h2 className="text-pink-700">Digite o nome usuário</h2>
        <input  placeholder ="Digite seu nome"type="text" className=" border-pink-700 border-2 border-solid rounded-xl w-[50%] focus:ring-0 p-1 m-4 "></input>
        <button type="button" className="bg-pink-700 p-2 rounded-md w-[120px]">Entrar</button>
      </div>


     
    </main>
  );
}
