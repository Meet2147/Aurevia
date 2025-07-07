import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

const ComingSoon = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(x * 300);
      mouseY.set(y * 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: -30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const orbVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.6, 0.2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const backgroundVariants = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.section 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(-45deg, #FFF7ED, #FEF3E2, #FED7AA, #FB923C, #EA580C)',
        backgroundSize: '400% 400%',
      }}
      variants={backgroundVariants}
      animate="animate"
    >
      {/* Dynamic Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Geometric Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Large Floating Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `linear-gradient(135deg, rgba(251, 146, 60, ${0.08 + i * 0.03}), rgba(234, 88, 12, ${0.04 + i * 0.02}))`,
              width: `${80 + i * 25}px`,
              height: `${80 + i * 25}px`,
              left: `${10 + i * 18}%`,
              top: `${5 + i * 15}%`,
              filter: 'blur(1px)',
            }}
            variants={orbVariants}
            animate="animate"
            transition={{ delay: i * 0.5 }}
          />
        ))}

        {/* Floating Lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-15"
            style={{
              width: '150px',
              height: '1px',
              left: `${25 + i * 25}%`,
              top: `${25 + i * 20}%`,
              transformOrigin: 'center',
            }}
            animate={{
              rotate: [0, 360],
              x: [-30, 30, -30],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="text-center relative z-10 max-w-4xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Logo Section */}
        <motion.div
          className="mb-16"
          variants={logoVariants}
          style={{ rotateX, rotateY }}
        >
          {/* Actual Logo */}
          <motion.div
            className="mx-auto mb-6 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src="/src/assets/logo.svg"
              alt="Logo"
              className="w-40 h-40 object-contain drop-shadow-2xl"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Coming Text */}
        <motion.div
          variants={textVariants}
          style={{ rotateX, rotateY }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wider mb-4 text-orange-800"
            style={{
              textShadow: '2px 2px 4px rgba(234, 88, 12, 0.2)',
            }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            COMING
          </motion.h1>
        </motion.div>

        {/* Soon Text */}
        <motion.div
          variants={textVariants}
          style={{ rotateX, rotateY }}
        >
          <motion.h2 
            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wider text-orange-700"
            style={{
              textShadow: '2px 2px 4px rgba(251, 146, 60, 0.2)',
            }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            SOON
          </motion.h2>
        </motion.div>

        {/* Accent Line */}
        <motion.div
          className="mt-12 mx-auto"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 200, opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <motion.div
            className="h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            animate={{
              scaleX: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="mt-8 text-orange-600 text-lg md:text-xl tracking-wide font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Something amazing is on the way
        </motion.p>
      </motion.div>

      {/* Corner Accents */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-orange-400/40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-orange-400/40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-orange-400/50 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.section>
  );
};

export default ComingSoon;