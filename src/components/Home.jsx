import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Rocket, Coins, BarChart3, Globe2 } from 'lucide-react';
import SpaceBackground from '../SpaceBackground.jsx';
import PlanetCard from '../PlanetCard.jsx';

function Home() {
  const headerRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      // Animate stats
      gsap.from(statsRef.current?.children || [], {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });
    });

    return () => ctx.revert();
  }, []);

  const planets = [
    { name: "New Earth", currency: "NEO", marketCap: "₮ 2.5T", trend: 8.5 },
    { name: "Mars Colony", currency: "MRS", marketCap: "₮ 1.8T", trend: -2.3 },
    { name: "Jupiter Hub", currency: "JPT", marketCap: "₮ 3.2T", trend: 12.7 },
    { name: "Saturn Ring", currency: "SAT", marketCap: "₮ 950B", trend: 5.1 }
  ];

  return (
    <>
      <SpaceBackground />
      <div className="min-h-screen text-white relative">
        <div ref={headerRef} className="container mx-auto px-4 pt-20 pb-12">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-purple-300  mb-6">
          Trade across the universe
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Welcome to the future of interplanetary commerce. Trade assets, exchange currencies, and shape the economy of tomorrow.
          </p>
        </div>

        <div ref={statsRef} className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Rocket className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-slate-400">Total Transactions</p>
                <p className="text-2xl font-bold">2.5M</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Coins className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-slate-400">Trading Volume</p>
                <p className="text-2xl font-bold">₮ 890B</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <BarChart3 className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-slate-400">Active Markets</p>
                <p className="text-2xl font-bold">142</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-pink-500/20 rounded-lg">
                <Globe2 className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <p className="text-slate-400">Connected Planets</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {planets.map((planet) => (
            <PlanetCard key={planet.name} {...planet} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;