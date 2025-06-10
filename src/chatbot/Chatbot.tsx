import { useEffect } from 'react';
import './Chatbot.css';

declare global {
  interface Window {
    botpressWebChat: any;
  }
}

const Chatbot = () => {
  useEffect(() => {
    const injectScript = (src: string, onLoad?: () => void) => {
      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      if (onLoad) script.onload = onLoad;
      document.body.appendChild(script);
    };

    // First, load the core Webchat script
    injectScript("https://cdn.botpress.cloud/webchat/v3.0/inject.js", () => {
      // Then load the config script, and only then initialize
      injectScript("https://files.bpcontent.cloud/2025/06/09/15/20250609153413-MEOIEDTT.js", () => {
        window.botpressWebChat.init({
          // You can pass init options here if needed
        });
      });
    });
  }, []);

  const toggleChat = () => {
    if (window.botpressWebChat) {
      window.botpressWebChat.sendEvent({ type: 'toggle' });
    } else {
      console.warn('Botpress WebChat not yet loaded');
    }
  };

  return (
    <button onClick={toggleChat}>
      
    </button>
  );
};

export default Chatbot;
