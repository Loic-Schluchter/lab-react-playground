import Compteur from "./Exercices/Compteur"
import Switch from "./Exercices/Switch"
import Todo from "./Exercices/Todo"
import DOM from "./Exercices/DOM"
import Chronometre from "./Exercices/Chronometre"
import EventListener from "./Exercices/EventListener"
import FetchingTitle from "./Exercices/FetchingTitle"
import Recherche from "./Exercices/Recherche"
import Observer from "./Observer"
import MultiCard from "./Exercices/MultiCard"

function App() {


  return (
    <div className="flex flex-col gap-10  w-screen px-10 min-h-screen overflow-y-auto bg-[#0a0f1f] h-full p-10 font-techno">
      <h1 className="text-5xl text-center my-6 text-cyan-400 tracking-widest drop-shadow-[0_0_6px_#00f7ff]">Exercices Perso</h1>
      <div className="grid grid-cols-2 gap-10 text-[#e5e7eb]">
      <Compteur />
      <Switch />
      <Todo />
      <DOM />
      <Chronometre />
      <EventListener />
      <FetchingTitle />
      <Recherche />
      <Observer/>
      <MultiCard />
      </div>
    </div>
  )
}

export default App
