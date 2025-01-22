import React, { useState, useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { UsersIcon, CurrencyDollarIcon, ChartBarIcon, StarIcon } from '@heroicons/react/24/outline';
import MetricCard from './components/MetricCard';
import ConfettiButton from './components/ConfettiButton';
import { particlesConfig, rocketConfig, createExplosion } from './components/ParticlesConfig';

const App = () => {
  const [particlesContainer, setParticlesContainer] = useState(null);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    setParticlesContainer(container);
  }, []);

  const launchRocket = (startX, color) => {
    if (!particlesContainer) return;

    // Create rocket emitter with automatic lifecycle
    particlesContainer.addEmitter({
      ...rocketConfig,
      position: { x: startX, y: 100 },
      particles: {
        ...rocketConfig.particles,
        color: { value: color },
        size: { value: 5 },
        move: {
          speed: { min: 30, max: 40 },
          direction: "top",
          straight: true
        }
      }
    });

    // Create explosion after rocket ascent
    setTimeout(() => {
      particlesContainer.addEmitter(createExplosion(startX, 20, color));
    }, 800);
  };

  const handleCelebrate = () => {
    if (particlesContainer) {
      particlesContainer.particles.clear();
      
      const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"];
      const positions = [20, 35, 50, 65, 80];
      
      positions.forEach((pos, i) => {
        setTimeout(() => {
          launchRocket(pos, colors[i % colors.length]);
        }, i * 200);
      });
    }
  };

  const metrics = [
    { title: 'Active Users', value: '12,345', icon: UsersIcon, trend: 12 },
    { title: 'Revenue', value: '$54,321', icon: CurrencyDollarIcon, trend: 8 },
    { title: 'Conversion Rate', value: '3.2%', icon: ChartBarIcon, trend: -2 },
    { title: 'Customer Rating', value: '4.8/5', icon: StarIcon, trend: 5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        className="absolute inset-0 pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <ConfettiButton onClick={handleCelebrate} />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard
              key={metric.title}
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              trend={metric.trend}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
