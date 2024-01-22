import React, { useState } from 'react'
import OpenAI from 'openai'
import './Api.css'
import chatgpt from '../../assets/chatgpt.svg'
import chatGPTlogo from '../../assets/chatgptLogo.svg'
import { HiOutlinePlus } from "react-icons/hi"
import { BsChatLeftText } from "react-icons/bs"
import { RiHomeOfficeLine } from "react-icons/ri"
import { BsRocketTakeoff } from "react-icons/bs"
import { FaPersonHalfDress } from "react-icons/fa6"
import { RxPaperPlane } from "react-icons/rx"


const Api1 = () => {

    const [response, setResponse] = useState(''); 
    const [userInput, setUserInput] = useState('');
    const [displayUserInput, setDisplayUserInput] = useState('');

    const sendMessage = async () => {

        const apiKey = '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';  

        if (!apiKey) {
            console.error('OpenAI key is missing, Make sure it is set in your environment variables.');
            return;
        } 

        const openai = new OpenAI({apiKey, dangerouslyAllowBrowser: true});

        try{
            const stream = await openai.chat.completions.create({
                model: "gpt-4",
                messages: [ 
                    { role: 'user', content: userInput },
                    { role: 'assistant', content: 'How may I help?.'} 
                ],
                temperature: 0.8,
                stream: true, 
                max_tokens: 256,
                top_p: 1, 
                frequency_penalty: 0, 
                presence_penalty:0
            });

            let result = '';

            for await (const chunk of stream) {
                result += chunk.choices[0]?.delta?.content || '';
            }

            setResponse(result);
        } 
            catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSend = () => {
        if(userInput.trim() !== '') {
            sendMessage();
            setDisplayUserInput(userInput); //store userInput is seperate state variable
            setUserInput('');
        }
};

const handleClearChat = () => {
    setUserInput('');
    setDisplayUserInput('');
    setResponse('');

};

return (
    <section id='OpenAI'>
        <h5>You Got Questions</h5>
        <h2>We Have Answers</h2>

        <div className='container api1_container'>
            <div className='api1_app'>
                <div className='api1_sidebar'>
                    <div className='api1_upperSide'>
                        <div className='api1_uppersideTop'>
                            <img src={chatgpt} alt='Logo'/>
                                <button className='gptBtn btn-primary' onClick={handleClearChat}><HiOutlinePlus className='api1-chatIcons'/> New Chat</button>
                                    <div className='api1_uppersideButtom'>
                                        <button className='gptBtn' 
                                        onClick={() => {setUserInput('What is Programming'); handleSend();}}>
                                        <BsChatLeftText className='api1-chatIcons'/> What is Programming ?</button>
                                        <button className='gptBtn' 
                                        onClick={() => {setUserInput('How to use an API'); handleSend();}}>
                                        <BsChatLeftText className='api1-chatIcons'/> How to use an API ? </button>
                                    </div>
                                </div>
                            </div>

                        <div className='api1_lowerSide'>
                    <div className='api1_listItems'>
                <a href='https://chatgpt.com' target='__blank'><RiHomeOfficeLine className='api1_list-icons'/>Home</a>
            <a href='https://chat.openai.com/#pricing' target='__blank'><BsRocketTakeoff className='api1_list-icons'/>Go Pro</a>
        </div>
    </div>
</div>

            <div className='api1_main'>
                <div className='api1_chatBox'>
                    <div className='api1_chat'>
                    <FaPersonHalfDress className='api1_bot-icons' /><p className='txt'>{displayUserInput}</p>
                    </div>
                    <div className='api1_chat area'>
                    <img src={chatGPTlogo} alt='Logo' className='gptImg' /><p className='txt'>{response}</p>
                    </div>
                </div>

                <div className='api1_chatFooter'>
                    <div className='api1_input'>
                        <input type='text' placeholder='Whisper to ChatGPT...' 
                        value={userInput} 
                        onChange={handleInputChange}
                        />

                        <button className='gptSendBtn' 
                        onClick={handleSend}><RxPaperPlane />
                        </button>
                    </div>
                </div>

            </div>
                </div>
            </div>
    </section>
 )
}

export default Api1