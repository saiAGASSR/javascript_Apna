import Image from "next/image";
import Cards from "@/components/cards";
import Button from "@/components/button";
import SimpleForm from "@/components/simpleForm";
import Counter from "@/components/Counter";
import LikeButton from "@/components/LikeButton";
import LudoGame from "@/components/LudoGame";
import Todo from "@/components/Todo";
import ToDoApna from "@/components/toDoApna";
import LotteryGame from "@/components/lotteryComponents";
import BasicForm from "@/components/Forms/basic";
import MainWeather from "@/components/weatherWidget/MainWeather";
import List from "@/components/learnReact/RenderingList";

export default function Home() {



 

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       
      {/* <Button />
      <Cards  /> */}
{/* 
      <SimpleForm />
      <Counter />
      <LikeButton  /> */}

      {/* <MainWeather /> */}
      <List />

      {/* <BasicForm />

      <LudoGame   />

      <Todo />
      <ToDoApna />

      <LotteryGame    numberofticktets= {3}/> */}

      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
