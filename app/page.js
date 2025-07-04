  'use client'

import { useState } from "react";
export default function Home(){
const [vibe, setVibe] = useState(''); // Store the recommended incense + affirmation
const [result, setResult] = useState('')

const handleRecommendation = () => {
  const mood = vibe.toLowerCase();

  if (mood === 'calm' || mood === 'peace' || mood === 'relaxed')
  { 
   setResult("Try **Palo Santo** - Soft, grounding, and peaceful.\n Affirmation: I am safe, soft, and my peace is sacred.");
} else if (mood === 'confident' || mood === 'that girl' || mood === 'amazing')
{
  setResult ("Try **Super Hit** - Bold, unapologetic, and magnetic.\n Affirmation: I walk in power and I attract with ease.");
  } else if (mood === 'money' || mood === 'abundance' ) 
{
  setResult ("Try **Gold Rain** - Luxury, expansive, lucky.\n Affirmation: Wealth flows to me effortlessly.")
} else if (mood === 'focused' || mood === 'clarity')
{
  setResult ("Try **Rain Forest** - Crisp, clean, mental reset.\n Affirmation: My mind is clear. My path is open");
} else 
{ setResult ("Hmm... Try **Sandalwood** - a sacred all-purpose reset.\n Affirmation: I align, I breathe, I glow.");
  }
};

return (
  <div style={{padding: '40px',
    fontFamily: 'fantasy', textAlign: 'center'
  }}>
    <h1 className="glow-title">Incense Vibes</h1>
    <p>Tell me your mood, and Ill match the perfect incense + affirmation.</p>

    <input
    type="text"
    placeholder="Enter your vibe..."
    value={vibe}
    onChange={(e) =>
      setVibe(e.target.value)}
      style={{padding: '12px', fontSize: '16px', width: '280px'}}
      />
      <br  /><br />

      <button
      onClick={handleRecommendation}
      style={{padding: '12px 24px', fontSize: '16px', curser: 'pointer'}}
      > Get My Vibe </button>
      <p style={{whiteSpace: 'pre-wrap', marginTop: '30px', fontsize: '18px', fontweight: 'bold'}}>
        {result}
      </p>
  </div>
);

}