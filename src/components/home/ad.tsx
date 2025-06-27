"use client";

import { motion } from "framer-motion";
import { Code, Palette, Layers, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function AdSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 12px 32px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 18,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.25,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
    hover: {
      color: "#ffffff",
      transition: {
        duration: 0.3,
      },
    },
  };

  const featureCards = [
    {
      icon: Code,
      title: "100% Free & Open Source",
      description: "Fully accessible code base",
      stats: "3+ Downloads",
      gif: "/gif/code.gif",
      size: "large",
    },
    {
      icon: Palette,
      title: "2+ Styling Options",
      description: "Customizable themes and color schemes",
      stats: "Unlimited Combinations",
      gif: "/gif/palette.gif",
      size: "small",
    },
    {
      icon: Layers,
      title: "10+ Components",
      description: "Ready-to-use UI components",
      stats: "Fully Responsive",
      gif: "/gif/layers.gif",
      size: "small",
    },
    {
      icon: Rocket,
      title: "Supercharged Performance",
      description: "Optimized for speed and scalability",
      stats: "Blazing Fast",
      gif: "/gif/rocket.gif",
      size: "large",
    },
  ];

  return (
    <section className="rounded-md bg-fixed animate-gradient bg-gradient-to-br from-primary via-secondary to-primary bg-[length:300%_300%] transition-all duration-1000 py-8 md:py-16">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center mb-8 md:mb-12"
          variants={cardVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Build Beautiful Apps with Ease
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Discover our free, open-source component library with modern styling
            options
          </p>
        </motion.div>

        <div className="lg:hidden max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
          {featureCards.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className={`${
                feature.size === "large"
                  ? "sm:col-span-2 lg:col-span-3"
                  : "sm:col-span-1 lg:col-span-3"
              }`}
            >
              <Card className="group relative h-full bg-card/10 backdrop-blur-sm border-border overflow-hidden transition-all duration-300 rounded-2xl hover:shadow-2xl">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${feature.gif})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 0,
                  }}
                />
                <motion.div className="relative z-10">
                  <CardHeader>
                    <motion.div variants={iconVariants} whileHover="hover">
                      {React.createElement(feature.icon, {
                        className:
                          "w-10 h-10 md:w-14 md:h-14 text-secondary mb-2 transition-transform duration-300",
                      })}
                    </motion.div>
                    <motion.div variants={textVariants} whileHover="hover">
                      <CardTitle className="text-white text-xl md:text-2xl">
                        {feature.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <motion.p
                      className="text-muted mb-4 text-sm md:text-base"
                      variants={textVariants}
                      whileHover="hover"
                    >
                      {feature.description}
                    </motion.p>
                    <motion.p
                      className="text-accent font-semibold text-sm md:text-base"
                      variants={textVariants}
                      whileHover="hover"
                    >
                      {feature.stats}
                    </motion.p>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="hidden max-w-5xl mx-auto lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="lg:col-span-2"
          >
            <Card className="group relative h-full bg-card/10 backdrop-blur-sm border-border overflow-hidden transition-all duration-300 rounded-2xl hover:shadow-2xl">
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${featureCards[0].gif})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 0,
                }}
              />
              <motion.div className="relative z-10">
                <CardHeader>
                  <motion.div variants={iconVariants} whileHover="hover">
                    {React.createElement(featureCards[0].icon, {
                      className:
                        "w-10 h-10 md:w-14 md:h-14 text-secondary mb-2 transition-transform duration-300",
                    })}
                  </motion.div>
                  <motion.div variants={textVariants} whileHover="hover">
                    <CardTitle className="text-white text-xl md:text-2xl">
                      {featureCards[0].title}
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <motion.p
                    className="text-muted mb-4 text-sm md:text-base"
                    variants={textVariants}
                    whileHover="hover"
                  >
                    {featureCards[0].description}
                  </motion.p>
                  <motion.p
                    className="text-accent font-semibold text-sm md:text-base"
                    variants={textVariants}
                    whileHover="hover"
                  >
                    {featureCards[0].stats}
                  </motion.p>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>

          {featureCards.slice(1, 3).map((feature, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover">
              <Card className="group relative h-full bg-card/10 backdrop-blur-sm border-border overflow-hidden transition-all duration-300 rounded-2xl hover:shadow-2xl">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${feature.gif})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 0,
                  }}
                />
                <motion.div className="relative z-10">
                  <CardHeader>
                    <motion.div variants={iconVariants} whileHover="hover">
                      {React.createElement(feature.icon, {
                        className:
                          "w-10 h-10 md:w-14 md:h-14 text-secondary mb-2 transition-transform duration-300",
                      })}
                    </motion.div>
                    <motion.div variants={textVariants} whileHover="hover">
                      <CardTitle className="text-white text-xl md:text-2xl">
                        {feature.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <motion.p
                      className="text-muted mb-4 text-sm md:text-base"
                      variants={textVariants}
                      whileHover="hover"
                    >
                      {feature.description}
                    </motion.p>
                    <motion.p
                      className="text-accent font-semibold text-sm md:text-base"
                      variants={textVariants}
                      whileHover="hover"
                    >
                      {feature.stats}
                    </motion.p>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="lg:col-span-2 md:col-span-2"
          >
            <Card className="group relative h-full bg-card/10 backdrop-blur-sm border-border overflow-hidden transition-all duration-300 rounded-2xl hover:shadow-2xl">
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${featureCards[3].gif})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 0,
                }}
              />
              <motion.div className="relative z-10">
                <CardHeader>
                  <motion.div variants={iconVariants} whileHover="hover">
                    {React.createElement(featureCards[3].icon, {
                      className:
                        "w-10 h-10 md:w-14 md:h-14 text-secondary mb-2 transition-transform duration-300",
                    })}
                  </motion.div>
                  <motion.div variants={textVariants} whileHover="hover">
                    <CardTitle className="text-white text-xl md:text-2xl">
                      {featureCards[3].title}
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <motion.p
                    className="text-muted mb-4 text-sm md:text-base"
                    variants={textVariants}
                    whileHover="hover"
                  >
                    {featureCards[3].description}
                  </motion.p>
                  <motion.p
                    className="text-accent font-semibold text-sm md:text-base"
                    variants={textVariants}
                    whileHover="hover"
                  >
                    {featureCards[3].stats}
                  </motion.p>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>
        </div>

        {/* <motion.div
          className="text-center mt-8 md:mt-12"
          variants={cardVariants}
        >
          <Button
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 relative overflow-hidden"
            size="lg"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            Get Started Now
          </Button>
        </motion.div> */}
      </motion.div>
    </section>
  );
}
