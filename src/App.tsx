import { useState, useEffect } from 'react';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Strategic Silence Generation",
      description: "Our proprietary algorithms determine the optimal moments to say nothing at all, projecting wisdom through calculated pauses."
    },
    {
      title: "Premium Vagueness Engine",
      description: "Transform simple ideas into impenetrable corporate poetry. 'Good job' becomes 'synergistic outcome optimization achieved.'"
    },
    {
      title: "Gravitas Amplification",
      description: "Deep-learning enhanced vocal suggestions that make 'I don't know' sound like you're protecting classified information."
    },
    {
      title: "Meeting Presence Optimizer",
      description: "AI-powered nodding cues and strategic 'hmm' placement to maximize perceived engagement with zero actual input."
    }
  ];

  const testimonials = [
    {
      quote: "I've said nothing meaningful in six months. Promoted twice.",
      name: "Bradford Sterling III",
      title: "Chief Synergy Officer, Nebulous Ventures"
    },
    {
      quote: "AURA taught me that silence isn't just golden — it's platinum.",
      name: "Margot Ashworth-Pemberton",
      title: "VP of Strategic Ambiguity, Vague Corp"
    },
    {
      quote: "My board thinks I'm a visionary. I just repeat what AURA tells me to not say.",
      name: "Theodore 'Chip' Worthington IV",
      title: "Founder & Chief Nothing Officer"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] overflow-x-hidden relative">
      {/* Grain Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#C9A962] to-[#8B7355] flex items-center justify-center">
              <span className="text-white font-serif text-sm md:text-lg">A</span>
            </div>
            <span className="font-serif text-lg md:text-xl tracking-wider">AURA</span>
          </div>
          <div className="hidden md:flex gap-12 text-sm tracking-widest uppercase text-[#666]">
            <a href="#features" className="hover:text-[#C9A962] transition-colors">Philosophy</a>
            <a href="#testimonials" className="hover:text-[#C9A962] transition-colors">Disciples</a>
            <a href="#pricing" className="hover:text-[#C9A962] transition-colors">Investment</a>
          </div>
          <button className="px-4 py-2 md:px-6 md:py-3 border border-[#1a1a1a] text-xs md:text-sm tracking-widest uppercase hover:bg-[#1a1a1a] hover:text-[#FAF9F6] transition-all duration-500">
            Request Access
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-24 relative">
        {/* Decorative Elements */}
        <div className={`absolute top-32 left-8 md:left-24 w-16 md:w-24 h-px bg-gradient-to-r from-[#C9A962] to-transparent transition-all duration-1500 delay-500 ${loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transformOrigin: 'left' }} />
        <div className={`absolute bottom-32 right-8 md:right-24 w-16 md:w-24 h-px bg-gradient-to-l from-[#C9A962] to-transparent transition-all duration-1500 delay-700 ${loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transformOrigin: 'right' }} />

        {/* Floating Geometric */}
        <div className={`absolute top-1/4 right-8 md:right-1/4 w-32 h-32 md:w-48 md:h-48 border border-[#C9A962]/20 rotate-45 transition-all duration-2000 delay-1000 ${loaded ? 'opacity-100 rotate-45' : 'opacity-0 rotate-12'}`} />

        <div className={`text-center max-w-5xl transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#C9A962] tracking-[0.3em] md:tracking-[0.5em] uppercase text-xs mb-6 md:mb-8">Introducing</p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6 md:mb-8 leading-[0.9]">
            AURA<span className="text-[#C9A962]">.</span>
          </h1>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#666] max-w-3xl mx-auto leading-relaxed mb-4 md:mb-6 px-4">
            The world's first AI assistant engineered to help you sound important
          </p>
          <p className="text-[#999] tracking-widest uppercase text-xs md:text-sm mb-10 md:mb-16">
            Without actually doing anything
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 md:px-12 py-4 md:py-5 bg-[#1a1a1a] text-[#FAF9F6] text-xs md:text-sm tracking-widest uppercase hover:bg-[#C9A962] transition-all duration-500">
              Begin Your Ascension
            </button>
            <button className="px-8 md:px-12 py-4 md:py-5 border border-[#ccc] text-xs md:text-sm tracking-widest uppercase hover:border-[#C9A962] hover:text-[#C9A962] transition-all duration-500">
              Watch the Void
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 delay-1500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#999]">Descend</span>
          <div className="w-px h-12 md:h-16 bg-gradient-to-b from-[#C9A962] to-transparent animate-pulse" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#1a1a1a] text-[#FAF9F6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #C9A962 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-[#C9A962] tracking-[0.3em] uppercase text-xs mb-6">Our Philosophy</p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 md:mb-8">
                In a world obsessed with productivity, we chose <em className="text-[#C9A962]">elegance</em>.
              </h2>
              <p className="text-[#999] text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                AURA was born from a simple observation: the most successful people often say the least.
                Our neural networks have studied thousands of hours of executive meetings, TED talks,
                and motivational posters to distill the essence of saying nothing with maximum impact.
              </p>
              <div className="flex gap-8 md:gap-12">
                <div>
                  <span className="font-serif text-3xl md:text-4xl text-[#C9A962]">0</span>
                  <p className="text-xs tracking-widest uppercase text-[#666] mt-2">Tasks Completed</p>
                </div>
                <div>
                  <span className="font-serif text-3xl md:text-4xl text-[#C9A962]">∞</span>
                  <p className="text-xs tracking-widest uppercase text-[#666] mt-2">Impressions Made</p>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-square bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-sm p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 border border-[#C9A962]/20 m-4 md:m-6" />
                <div className="absolute inset-0 border border-[#C9A962]/10 m-8 md:m-12 rotate-3" />
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#C9A962] to-[#8B7355] mx-auto mb-6 flex items-center justify-center">
                    <span className="text-[#1a1a1a] text-4xl md:text-5xl font-serif">A</span>
                  </div>
                  <p className="text-[#C9A962] tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs">Version 4.0</p>
                  <p className="font-serif text-xl md:text-2xl mt-2">Cipher Edition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-[#C9A962] tracking-[0.3em] uppercase text-xs mb-6">Capabilities</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Engineered Insignificance</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 md:p-10 border transition-all duration-700 cursor-pointer ${
                  activeFeature === index
                    ? 'border-[#C9A962] bg-[#C9A962]/5'
                    : 'border-[#e5e5e5] hover:border-[#C9A962]/50'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <span className="font-serif text-3xl md:text-4xl text-[#C9A962]/30">0{index + 1}</span>
                  <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    activeFeature === index ? 'bg-[#C9A962]' : 'bg-[#ddd]'
                  }`} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-[#666] text-sm md:text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-[#FAF9F6] to-[#f0ede8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-[#C9A962] tracking-[0.3em] uppercase text-xs mb-6">Testimonials</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Voices of the Void</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-10 shadow-xl shadow-[#C9A962]/5 relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-4 md:top-6 right-4 md:right-6 font-serif text-5xl md:text-6xl text-[#C9A962]/10">"</div>
                <p className="font-serif text-lg md:text-xl leading-relaxed mb-6 md:mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-[#eee] pt-4 md:pt-6">
                  <p className="font-serif text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-[#999] text-xs mt-1">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 px-6 md:px-12 bg-[#1a1a1a] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A962] tracking-[0.3em] uppercase text-xs mb-6">Investment</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">The Price of Prestige</h2>
          <p className="text-[#666] mb-12 md:mb-16 max-w-xl mx-auto text-sm md:text-base">
            AURA is not for everyone. It is for those who understand that true power lies in the artful deployment of nothing.
          </p>

          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-8 md:p-16 border border-[#C9A962]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 border border-[#C9A962]/10 rotate-45 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 border border-[#C9A962]/10 rotate-45 -translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
              <p className="text-[#C9A962] tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs mb-4">Founding Member</p>
              <div className="flex items-baseline justify-center gap-1 mb-6 md:mb-8">
                <span className="font-serif text-5xl sm:text-6xl md:text-7xl">$10,000</span>
                <span className="text-[#666] text-sm md:text-base">/month</span>
              </div>

              <div className="max-w-sm mx-auto mb-8 md:mb-12">
                <div className="flex justify-between py-3 md:py-4 border-b border-[#333] text-xs md:text-sm">
                  <span className="text-[#999]">Unlimited Strategic Silences</span>
                  <span className="text-[#C9A962]">Included</span>
                </div>
                <div className="flex justify-between py-3 md:py-4 border-b border-[#333] text-xs md:text-sm">
                  <span className="text-[#999]">Premium Vagueness Tokens</span>
                  <span className="text-[#C9A962]">∞</span>
                </div>
                <div className="flex justify-between py-3 md:py-4 border-b border-[#333] text-xs md:text-sm">
                  <span className="text-[#999]">White-Glove Nothingness</span>
                  <span className="text-[#C9A962]">24/7</span>
                </div>
                <div className="flex justify-between py-3 md:py-4 text-xs md:text-sm">
                  <span className="text-[#999]">Actual Productivity</span>
                  <span className="text-[#666]">Not Applicable</span>
                </div>
              </div>

              <button className="px-10 md:px-16 py-4 md:py-5 bg-[#C9A962] text-[#1a1a1a] text-xs md:text-sm tracking-widest uppercase hover:bg-[#d4b86f] transition-all duration-500 w-full sm:w-auto">
                Join the Waitlist
              </button>
              <p className="text-[#666] text-xs mt-4 md:mt-6">Currently serving 12 founding members. 4,847 on waitlist.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
            Stop doing.<br />
            <span className="text-[#C9A962]">Start being.</span>
          </h2>
          <p className="text-[#666] text-base md:text-lg mb-10 md:mb-12">
            The future of influence isn't about what you accomplish. It's about the impression you leave
            while accomplishing nothing at all.
          </p>
          <button className="px-10 md:px-16 py-4 md:py-5 bg-[#1a1a1a] text-[#FAF9F6] text-xs md:text-sm tracking-widest uppercase hover:bg-[#C9A962] hover:text-[#1a1a1a] transition-all duration-500">
            Transcend Productivity
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-6 md:px-12 border-t border-[#eee]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C9A962] to-[#8B7355] flex items-center justify-center">
              <span className="text-white font-serif text-xs">A</span>
            </div>
            <span className="font-serif text-sm tracking-wider">AURA</span>
          </div>
          <p className="text-[#bbb] text-[10px] md:text-xs tracking-widest uppercase order-last md:order-none">
            © 2024 AURA Dynamics. All rights reserved. Nothing accomplished.
          </p>
          <p className="text-[#999] text-[10px] tracking-wide">
            Requested by @web-user · Built by @clonkbot
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
