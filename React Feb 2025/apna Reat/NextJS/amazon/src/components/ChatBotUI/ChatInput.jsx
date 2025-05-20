'use client';
import { SendHorizonal, Mic } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FcGoogle } from "react-icons/fc";
import { FaGoogle } from "react-icons/fa"; 
import SelectLabels from './DropDownLanguages';



export function ChatInput({ input, setInput, sendMessage, isTyping, userInputFocus }) {
  const [selectedLanguageCode, setSelectedLanguageCode] = useState('en-IN');
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && input.trim()) {
      e.preventDefault();
      sendMessage();
    }

  };


  useEffect(() => {
  return () => {
    // Cleanup on component unmount
    if (mediaRecorderRef.current) {
      // Stop media recorder if it's still running
      if (mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }

      // Stop all audio tracks
      mediaRecorderRef.current.stream?.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };
}, []);


  const handleReactMicClick = () => {
    if (!browserSupportsSpeechRecognition) {
      alert('Browser does not support speech recognition.');
      return;
    }

    if (listening) {
      // Stop listening manually
      SpeechRecognition.stopListening();
      // Auto send once listening is stopped (optional — handled below by 'listening' change)
    } else {
      resetTranscript();
      setInput(''); // Clear input when starting new speech
      SpeechRecognition.startListening({ continuous: false, language: selectedLanguageCode });
    }
  };
                // alternativeLanguageCodes: ['hi-IN', 'te-IN', 'ta-IN', 'bn-IN'],


useEffect(() => {
 if (!listening && transcript.trim()) {
  setInput(transcript);
  setTimeout(() => {
    sendMessage(transcript);  
    resetTranscript();
  }, 500);
}

}, [listening]);





  const handleMicClick = async () => {


  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'audio/webm;codecs=opus',
    });

    mediaRecorderRef.current = mediaRecorder;
    chunksRef.current = [];

    // AudioContext and silence detection setup
    const audioContext = new (window.AudioContext)();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    source.connect(analyser);

    let silenceStart = null;
    const SILENCE_THRESHOLD = 0.01; // volume threshold
    const SILENCE_DURATION = 1000; // 3 seconds

    const checkSilence = () => {
      analyser.getByteTimeDomainData(dataArray);
      let sum = 0;
      for (let i = 0; i < dataArray.length; i++) {
        const sample = (dataArray[i] - 128) / 128;
        sum += sample * sample;
      }
      const volume = Math.sqrt(sum / dataArray.length);

      if (volume < SILENCE_THRESHOLD) {
        if (silenceStart === null) {
          silenceStart = Date.now();
        } else if (Date.now() - silenceStart > SILENCE_DURATION) {
          mediaRecorder.stop();
          stream.getTracks().forEach((track) => track.stop());
          audioContext.close();
          mediaRecorderRef.current.stop();
          setRecording(false);
        }
      } else {
        silenceStart = null; // reset on voice
      }

      if (mediaRecorder.state !== 'inactive') {
        requestAnimationFrame(checkSilence);
      }
    };

    requestAnimationFrame(checkSilence);

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };

    mediaRecorder.onstop = async () => {
      stream.getTracks().forEach(track => track.stop());
      const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
      const buffer = await blob.arrayBuffer();
      const audioBase64 = btoa(
        new Uint8Array(buffer)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );

      const GOOGLE_API_KEY = 'AIzaSyD8GlSK43dHXTFzfxN0BzvIItShxms3KjM';
      const response = await fetch(
        `https://speech.googleapis.com/v1/speech:recognize?key=${GOOGLE_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            config: {
              encoding: 'WEBM_OPUS',
              sampleRateHertz: 48000,
              languageCode: selectedLanguageCode,
            },
            audio: {
              content: audioBase64,
            },
          }),
        }
      );

      const result = await response.json();
      const transcription = result.results?.map(r => r.alternatives[0].transcript).join('\n') || '';
      if (transcription.trim()) {
        setInput(transcription);
        sendMessage(transcription);
      } else {
        alert('No speech detected.');
      }
    };

    mediaRecorder.start();
    setRecording(true);
  } catch (err) {
    console.error('Mic error:', err);
    alert('Microphone access failed.');
  }
};




useEffect(() => {
  if (!isTyping) userInputFocus.current.focus();
}, [isTyping]);


 return (
  <div className="border-t border-gray-200 bg-white px-3 py-2 flex items-center gap-2">
    {/* Google Mic Button (Node backend) */}
    <button
      onClick={handleMicClick}
      type="button"
      className="text-gray-500 hover:text-blue-600"
      disabled = {listening}
    >
      {recording ? (
        <FcGoogle  className="w-5 h-5 animate-pulse"  />
      ) : (
        <FaGoogle  className="w-5 h-5" />
      )}
    </button>

    {/* Input Text Area */}
    <textarea
      rows={1}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyPress}
      placeholder={isTyping ? 'Bot is typing...' : 'Type or use mic...'}
      className="flex-1 resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={isTyping || isTyping }
      ref={userInputFocus}
    />

    {/* React Speech Recognition Mic Button */}
    <button
      onClick={handleReactMicClick}
      type="button"
      className="text-gray-500 hover:text-blue-600"
      disabled = {recording || isTyping }
    >
      {listening ? (
        <Mic className="w-5 h-5 animate-pulse" color="red" />
      ) : (
        <Mic className="w-5 h-5" />
      )}
    </button>

        <SelectLabels  setSelectedLanguageCode={setSelectedLanguageCode} selectedLanguageCode={selectedLanguageCode} />

    <button
      onClick={() => sendMessage()}
      disabled={!input.trim() || isTyping}
      className={`p-2 rounded-full transition ${
        !input.trim() || isTyping
          ? 'bg-gray-300 text-white cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 text-white'
      }`}
    >
      <SendHorizonal className="w-4 h-4" />
    </button>


  </div>
);
}
