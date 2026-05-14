/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Sword, 
  Apple, 
  Fish, 
  Grid3X3, 
  Pickaxe, 
  Download, 
  Zap, 
  ShieldCheck, 
  Eye, 
  Target 
} from 'lucide-react';

const TEXTURES = [
  {
    id: 'sword',
    name: 'Short Sword',
    description: 'Reduced blade length for maximum visibility in combat. Diamond grade.',
    icon: Sword,
    color: 'text-cyan-400',
    bg: 'bg-cyan-950/30',
  },
  {
    id: 'gapple',
    name: 'Vibrant G-Apple',
    description: 'High-contrast golden apple with flat, clean colors for quick identification.',
    icon: Apple,
    color: 'text-yellow-400',
    bg: 'bg-yellow-950/30',
  },
  {
    id: 'rod',
    name: 'Tactical Rod',
    description: 'Simplified fishing rod texture with clear bobber visibility.',
    icon: Fish,
    color: 'text-orange-400',
    bg: 'bg-orange-950/30',
  },
  {
    id: 'web',
    name: 'Clean Web',
    description: 'Low-clutter cobweb texture to help you navigate traps easily.',
    icon: Grid3X3,
    color: 'text-slate-300',
    bg: 'bg-slate-800/30',
  },
  {
    id: 'pick',
    name: 'Minimal Pick',
    description: 'Bare Bones style tools for a cleaner inventory and faster reactions.',
    icon: Pickaxe,
    color: 'text-cyan-400',
    bg: 'bg-cyan-950/30',
  }
];

const FEATURES = [
  { icon: Zap, label: 'Optimized FPS', detail: 'Simplified 16x16 textures' },
  { icon: ShieldCheck, label: 'Anti-Lag', detail: 'Low resolution assets' },
  { icon: Eye, label: 'High Visibility', detail: 'Reduced particle clutter' },
  { icon: Target, label: 'PvP Focus', detail: 'Designed for combat' },
];

export default function App() {
  return (
    <div className="h-screen w-full bg-editorial-bg text-editorial-text font-sans overflow-hidden flex flex-col selection:bg-editorial-primary selection:text-white">
      {/* Top Navigation Bar */}
      <nav className="flex justify-between items-center px-12 py-8 border-b border-editorial-text/10 shrink-0">
        <div className="text-xs font-bold uppercase tracking-[0.2em]">Edition: MCPE v1.22 • PvP Ready</div>
        <div className="hidden md:flex gap-12 text-xs font-semibold uppercase tracking-widest">
          <span className="cursor-pointer hover:text-editorial-primary transition-colors">Assets</span>
          <span className="cursor-pointer hover:text-editorial-primary transition-colors">Performance</span>
          <span className="cursor-pointer hover:text-editorial-primary transition-colors">Technical</span>
        </div>
        <div className="px-4 py-1.5 border border-editorial-text text-[10px] font-black uppercase tracking-widest">Available Now</div>
      </nav>

      <main className="flex-1 flex flex-col md:flex-row overflow-hidden italic">
        {/* Left Column: Visual Showcase */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-between border-r border-editorial-text/10 relative overflow-y-auto shrink-0 md:shrink">
          <div className="z-10 mt-12 md:mt-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[80px] md:text-[140px] leading-[0.85] font-display font-black uppercase tracking-tighter mb-8 italic">
                PvP <br/><span className="text-editorial-primary tracking-[-0.05em]">Kraft</span><br/>Pack
              </h1>
              <p className="max-w-xs text-sm leading-relaxed text-editorial-text/70 font-medium not-italic mb-10">
                The definitive competitive reimagining of Bare Bones. Optimized for low-latency combat and maximum field of view.
              </p>

              <a 
                href="/pvp-kraft-pack.mcpack"
                download="pvp-kraft.mcpack"
                className="inline-flex items-center gap-3 px-8 py-4 bg-editorial-primary text-white font-black uppercase tracking-widest text-xs hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-xl italic cursor-pointer"
              >
                <Download size={16} strokeWidth={3} />
                Download Pack (.mcpack)
              </a>
            </motion.div>
          </div>

          {/* Visual Highlight Boxes */}
          <div className="mt-12 md:mt-0 flex gap-4 items-end">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-editorial-secondary text-white p-6 aspect-square w-32 flex flex-col justify-end rounded-sm shadow-[8px_8px_0px_rgba(114,144,255,0.2)]"
            >
              <span className="text-3xl font-black">140+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest leading-none">FPS Boost</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-editorial-primary text-white p-6 aspect-square w-32 flex flex-col justify-end rounded-sm shadow-[8px_8px_0px_rgba(93,168,70,0.2)]"
            >
              <span className="text-3xl font-black">16x</span>
              <span className="text-[10px] uppercase font-bold tracking-widest leading-none">Efficiency</span>
            </motion.div>
            
            <div className="hidden lg:block ml-auto mb-4">
              <div className="text-[10px] items-center gap-2 font-black uppercase tracking-widest text-editorial-text/40 rotate-90 origin-bottom-right mb-12">
                Bare Bones x PVP Edition
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Utility Grid & Showcase */}
        <div className="w-full md:w-2/5 flex flex-col bg-white overflow-y-auto">
          {/* Top Section: The PVP Suite */}
          <div className="p-10 md:p-12 flex-1">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-12 text-editorial-text/40 not-italic">01 / The PVP Equipment</h2>
            
            <div className="grid grid-cols-2 gap-y-12 gap-x-8 italic">
              {TEXTURES.map((item, i) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`w-14 h-14 ${item.bg} flex items-center justify-center rounded-lg mb-4 border border-editorial-text/10 shadow-[4px_4px_0px_rgba(0,0,0,0.05)]`}>
                    <item.icon className="text-editorial-text" size={28} />
                  </div>
                  <h3 className="font-bold text-sm uppercase tracking-tight">{item.name}</h3>
                  <p className="text-[11px] text-editorial-text/60 leading-tight mt-1 not-italic">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Section: CTA */}
          <div className="p-10 md:p-12 bg-editorial-dark text-white not-italic shrink-0">
            <div className="flex justify-between items-start mb-8 text-neutral-400">
              <div>
                <div className="text-[10px] uppercase tracking-widest mb-1">Package Size</div>
                <div className="text-xl font-bold text-white tracking-widest">4.8 MB</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-widest mb-1">UUID Hash</div>
                <div className="text-xl font-bold text-white tracking-widest font-mono">4F9D</div>
              </div>
            </div>
            <a 
              href="/pvp-kraft-pack.mcpack"
              download="pvp-kraft.mcpack"
              className="block w-full py-5 bg-editorial-primary text-white font-black uppercase tracking-widest text-sm hover:bg-emerald-600 transition-all transform hover:scale-[1.02] shadow-xl italic cursor-pointer text-center"
            >
              Install Resource Pack
            </a>
          </div>
        </div>
      </main>

      {/* Footer Ticker */}
      <footer className="h-12 bg-editorial-dark flex items-center px-6 overflow-hidden shrink-0 border-t border-white/5">
        <div className="flex gap-16 whitespace-nowrap text-[9px] text-white/30 uppercase font-black tracking-[0.4em] animate-marquee">
          <span>Bare Bones x PVP Edition</span>
          <span>Short Swords Enabled</span>
          <span>FPS Optimization Active</span>
          <span>Clean Web Alpha</span>
          <span>Minimalist Particle Set</span>
          <span>Low-Latency Colors</span>
          <span>Bare Bones x PVP Edition</span>
          <span>Short Swords Enabled</span>
          <span>FPS Optimization Active</span>
          <span>Clean Web Alpha</span>
          <span>Minimalist Particle Set</span>
          <span>Low-Latency Colors</span>
        </div>
      </footer>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
