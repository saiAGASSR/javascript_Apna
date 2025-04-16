import { X } from 'lucide-react'; // for modern close icon

const ChatHeader = ({setIsOpen})=>{
    return (
        <div className="bg-gradient-to-br from-white to-blue-600 text-black p-4 flex justify-between items-center">
            <div className="flex flex-col">
            <span className="text-base md:text-lg font-semibold leading-tight">
                Reco Bot
            </span>
            <span className="text-xs text-black/80">
                Your ChatGPT-powered assistant
            </span>
            </div>

            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition">
            <X className="w-5 h-5" />
            </button>
        </div>
    );
}

export default ChatHeader;