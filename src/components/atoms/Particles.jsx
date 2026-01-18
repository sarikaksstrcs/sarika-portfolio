import React from 'react';

const Particles = ({particles}) => {
  const snowflakeVariants = ['❄', '❅', '❆'];
  
  return (
    <>
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute text-white"
            style={{
              left: `${particle.x}%`,
              top: '-20px',
              animation: `snowfall ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
              fontSize: `${8 + (particle.id % 8)}px`,
              filter: 'blur(0.5px)'
            }}
          >
            {snowflakeVariants[particle.id % snowflakeVariants.length]}
            {snowflakeVariants[particle.id+1 % snowflakeVariants.length]}
          </div>
        ))}
      </div>
    </>
  );
};

export default Particles;