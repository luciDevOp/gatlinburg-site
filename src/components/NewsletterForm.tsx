import React, { useState } from 'react';

interface NewsletterFormProps {
  compact?: boolean; // for layout differences (footer vs. events)
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ compact = false }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mnnvpkvg', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: new FormData(e.target as HTMLFormElement)
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={compact ? 'space-y-3' : 'flex flex-col sm:flex-row gap-3'}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        placeholder="Your email address"
        className={compact
          ? 'w-full px-4 py-2 bg-green-800 border border-green-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400'
          : 'px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent flex-grow'}
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className={compact
          ? 'w-full px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-md font-medium transition-colors duration-300'
          : 'px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-colors duration-300'}
      >
        {status === 'sending' ? 'Subscribing...' : 'Subscribe'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm mt-2 col-span-2">You're subscribed! 🎉</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm mt-2 col-span-2">Oops! Try again later.</p>
      )}
    </form>
  );
};

export default NewsletterForm;
