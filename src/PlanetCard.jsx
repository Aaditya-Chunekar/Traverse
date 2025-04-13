import { motion } from 'framer-motion';
import { Plane as Planet } from 'lucide-react';

export default function PlanetCard({ name, currency, marketCap, trend }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-indigo-500/20 rounded-lg">
          <Planet className="w-6 h-6 text-indigo-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-slate-400">{currency}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <span className="text-slate-400">Market Cap</span>
          <span className="text-white font-semibold">{marketCap}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-slate-400">Trend</span>
          <span className={`font-semibold ${trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {trend >= 0 ? '+' : ''}{trend}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}