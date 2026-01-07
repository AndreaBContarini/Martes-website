import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import logoMartes from '../../assets/logos/logo_martes/martes-logo.png';

export const Hero = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    

    // Create particles
    const geometry = new THREE.BufferGeometry();
    const count = 1200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x4ade80,
      size: 0.05,
      transparent: true,
      opacity: 0.3,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    camera.position.z = 4;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;

      const time = Date.now() * 0.001;
      particles.scale.x = 1 + Math.sin(time) * 0.1;
      particles.scale.y = 1 + Math.cos(time) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  // Dynamic spotlight effect
  useEffect(() => {
    const hero = document.getElementById('hero');
    const spotlight = spotlightRef.current;

    if (!hero || !spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.setProperty('--hero-x', `${x}px`);
      spotlight.style.setProperty('--hero-y', `${y}px`);
    };

    hero.addEventListener('mousemove', handleMouseMove);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 flex flex-col items-center text-center overflow-hidden min-h-screen justify-center bg-black"
    >
      {/* Three.js Canvas */}
      <div
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 opacity-80 pointer-events-none"
      />

      {/* Static Spotlight */}
      <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[140%] h-[120vh] pointer-events-none z-[1] blur-[60px]">
        <div className="w-full h-full bg-gradient-radial from-martes-green/5 via-martes-green/5 to-transparent" />
      </div>

      {/* Dynamic Spotlight */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-[1] transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(800px circle at var(--hero-x, 50%) var(--hero-y, 50%), rgba(74, 222, 128, 0.08), transparent 40%)',
        }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 1.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 relative z-10"
      >
        <img
          src={logoMartes}
          alt="Martes Logo"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 relative z-10 shadow-2xl bg-black/20 backdrop-blur-sm p-2"
        />
      </motion.div>


      {/* Heading */}
      <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-12 max-w-5xl mx-auto cursor-default">
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="block mb-2"
        >
          Il tuo <span className="serif-italic text-neutral-300">Partner AI</span>
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="block"
        >
          a <span className="serif-italic text-green-400">360 Gradi.</span>
        </motion.span>
      </h1>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="#contact"
          className="hoverable bg-gray-200 hover:bg-white text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wide flex items-center gap-2 group transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
        >
          Inizia Ora
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#services"
          className="hoverable px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wide text-neutral-400 hover:text-white transition-colors flex items-center gap-2 hover:bg-white/5"
        >
          Scopri i servizi
        </a>
      </motion.div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent z-10" />
    </section>
  );
};
