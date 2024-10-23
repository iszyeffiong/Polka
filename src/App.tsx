import React, { useState, useEffect } from 'react';
import { Sun, Moon, MessageCircle, Shield, Zap, Globe, ChevronRight, DollarSign, Lock } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <MessageCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <span className="ml-2 text-xl font-bold">PolkaSupport</span>
          </div>
          <div className="flex items-center">
            <a href="#features" className="mr-4 hover:text-purple-600 dark:hover:text-purple-400">Features</a>
            <a href="#cross-chain" className="mr-4 hover:text-purple-600 dark:hover:text-purple-400">Cross-Chain</a>
            <a href="#chat" className="mr-4 hover:text-purple-600 dark:hover:text-purple-400">Chat</a>
            <a href="#about" className="mr-4 hover:text-purple-600 dark:hover:text-purple-400">About</a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Decentralized Support Across Chains</h1>
          <p className="text-xl mb-8">Connect with users and provide seamless support on any blockchain</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </section>

        <section id="features" className="bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Globe className="w-12 h-12 text-purple-600 dark:text-purple-400" />}
                title="Cross-Chain Communication"
                description="Seamlessly connect users across different blockchains using Polkadot's parachains."
              />
              <FeatureCard
                icon={<Shield className="w-12 h-12 text-purple-600 dark:text-purple-400" />}
                title="Decentralized Support Agents"
                description="Interact with verified support agents through secure smart contracts."
              />
              <FeatureCard
                icon={<Zap className="w-12 h-12 text-purple-600 dark:text-purple-400" />}
                title="Token Incentives"
                description="Earn rewards in DOT for providing high-quality support to users."
              />
            </div>
          </div>
        </section>

        <section id="cross-chain" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Cross-Chain Communication</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Cross-Chain Communication" className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-semibold mb-4">Seamless Integration Across Blockchains</h3>
                <p className="text-lg mb-6">
                  PolkaSupport leverages Polkadot's parachain technology to enable smooth communication between different blockchain ecosystems. This allows users to receive support regardless of their preferred blockchain platform.
                </p>
                <ul className="list-disc list-inside mb-6">
                  <li>Connect with Ethereum, Bitcoin, and other major blockchains</li>
                  <li>Utilize Polkadot's XCMP for secure message passing</li>
                  <li>Benefit from Polkadot's shared security model</li>
                </ul>
                <a href="#" className="btn">Learn More About Cross-Chain Support</a>
              </div>
            </div>
          </div>
        </section>

        <section id="chat" className="bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Decentralized Support Chat</h2>
            <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="bg-purple-600 text-white p-4">
                <h3 className="text-xl font-semibold">Support Chat</h3>
              </div>
              <div className="h-96 overflow-y-auto p-4">
                <ChatMessage sender="User" message="Hi, I'm having issues with my cross-chain transaction." />
                <ChatMessage sender="Agent" message="Hello! I'd be happy to help you with your cross-chain transaction issue. Can you please provide more details about the problem you're experiencing?" />
                <ChatMessage sender="User" message="Sure, I initiated a transfer from Ethereum to Polkadot, but it's been stuck for hours." />
                <ChatMessage sender="Agent" message="I understand. Let's check the status of your transaction. Can you please provide the transaction hash?" />
              </div>
              <div className="bg-gray-200 dark:bg-gray-600 p-4">
                <div className="flex">
                  <input type="text" placeholder="Type your message..." className="flex-grow p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition duration-300">Send</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="token-incentives" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Token Incentives</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-semibold mb-4">Earn Rewards for Quality Support</h3>
                <p className="text-lg mb-6">
                  PolkaSupport incentivizes high-quality support through a token-based reward system. Support agents can earn DOT tokens for their contributions, creating a win-win situation for both users and agents.
                </p>
                <ul className="list-disc list-inside mb-6">
                  <li>Earn DOT tokens for resolving user issues</li>
                  <li>Reputation system based on user ratings</li>
                  <li>Stake tokens to become a verified support agent</li>
                </ul>
                <a href="#" className="btn">Learn More About Token Incentives</a>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <img src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="Token Incentives" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="Blockchain Network" className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-4">About PolkaSupport</h2>
                <p className="text-lg mb-6">
                  PolkaSupport is a revolutionary platform that leverages the power of Polkadot's ecosystem to provide
                  decentralized customer support across multiple blockchains. Our mission is to create a seamless,
                  secure, and incentivized support experience for users in the decentralized web.
                </p>
                <a href="#" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                  Learn More <ChevronRight className="w-5 h-5 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 PolkaSupport. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function ChatMessage({ sender, message }) {
  return (
    <div className={`mb-4 ${sender === 'User' ? 'text-right' : 'text-left'}`}>
      <div className={`inline-block p-3 rounded-lg ${sender === 'User' ? 'bg-purple-100 dark:bg-purple-900' : 'bg-gray-200 dark:bg-gray-600'}`}>
        <p className="font-semibold">{sender}</p>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;