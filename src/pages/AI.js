import { useState } from 'react';

export default function AI() {
    const [messages, setMessages] = useState([]);
    const [aimessages, aisetMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const messagesArray = [
        "Hello, I’m Sprout! Based on your energy consumption data, it looks like you’re using X kWh this month. You might want to consider switching to energy-efficient appliances or adjusting your thermostat to save energy.",
        "Hey, I’m Sprout! Your fuel consumption this month is Y gallons. To reduce your carbon footprint, you could explore carpooling, public transportation, or switching to a more fuel-efficient vehicle.",
        "Hi, I’m Sprout! Your average commute duration is Z minutes. If you're looking to reduce this time, you might consider working from home if possible or optimizing your route.",
        "Greetings, I’m Sprout! The air pollution level in your area is currently at W stage. It’s a good idea to limit outdoor activities on days when pollution levels are high.",
        "Good day, I’m Sprout! Your electricity usage is A kWh this month. To improve efficiency, you could look into using smart plugs, LED lighting, or scheduling usage during off-peak hours.",
        "Hey there, I’m Sprout! You’ve purchased B items this month. Consider focusing on reducing waste by buying in bulk, choosing sustainable products, or minimizing single-use items."
        ];

    const getMessage = () => {
        const randomIndex = Math.floor(Math.random() * messagesArray.length);
        return messagesArray[randomIndex];
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSendMessage = () => {
        const rand = getMessage();
        if (inputValue.trim() !== '') {
            setMessages((prevMessages) => [...prevMessages, inputValue]);
            aisetMessages((prevMessages) => [...prevMessages, rand]);
            setInputValue('');
        }
    };

    return (
        <div>
            <div className="fixed bottom-24 left-0 right-0 rounded-lg shadow-md h-14 mx-3 content-center inline-flex justify-between bg-white">
                <input
                    className="inline-block m-3 w-full"
                    placeholder="Ask a question..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button className="inline-block p-2 rounded-lg" onClick={handleSendMessage}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#555555"
                        className="size-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        />
                    </svg>
                </button>
            </div>

            <div className="container">
                {messages.map((message, index) => (
                    <div key={index}>
                        <div className='text-lg bg-lime-500 rounded-lg m-3 p-3 text-right'>
                            <span className='block text-white text-sm text-right font-bold'>Me</span>
                            <span className='text-white text-left'>{message}</span>
                        </div>
                        <div className='text-lg bg-teal-600 rounded-lg m-3 p-3'>
                            <span className='block text-white text-sm text-left font-bold'>Sprout</span>
                            <span className='text-white text-left'>{aimessages[index]}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}