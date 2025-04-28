import { X } from 'lucide-react'; // for modern close icon
import Avatar from '@mui/material/Avatar';


const ChatHeader = ({setIsOpen})=>{
    return (
        <div className="bg-gradient-to-br from-white to-blue-600 text-black p-4 flex justify-between items-center">
            <div className="flex flex-row">

            <Avatar
            alt='bot'
            src='https://i.imgur.com/AKwCiIP.jpeg'
            sx={{ width: 36, height: 36 }}
        /> 

            <span className="ml-2 text-2xl  md:text-xl font-semibold leading-tight mt-1.5">
                 MyReco AI Assistant
            </span>

            </div>

            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition">
            <X className="w-5 h-5" />
            </button>
        </div>
    );
}

export default ChatHeader;