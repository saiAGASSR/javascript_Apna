'use client';


import ChatbotUI from "@/components/ChatBotUI/ChatbotUI";
import { useSearchParams } from 'next/navigation';


export default function Home() {
  const searchParams = useSearchParams();
  const voiceinput = searchParams.get('voiceInput');
  console.log("voice inpur param from search params query strings ",voiceinput);
  console.log("type of voice input ", typeof(voiceinput));
  
  

  return (
    <div className="w-screen h-screen md:w-1/2    flex items-center justify-center bg-white">
      <ChatbotUI voiceinput={voiceinput} />
    </div>
  );
}
