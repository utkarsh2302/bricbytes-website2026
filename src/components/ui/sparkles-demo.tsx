import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

/**
 * Sparkles Hero Background
 * Subtle particle effect with olive green color
 */
export function SparklesHeroDemo() {
  return (
    <div style={{
      height: "40rem",
      width: "100%",
      backgroundColor: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: "8px",
      position: "relative",
    }}>
      {/* Background particles */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={800}
          className="w-full h-full"
          particleColor="#6F7D45"
          speed={3}
        />
      </div>

      {/* Content overlay */}
      <div style={{ position: "relative", zIndex: 20, textAlign: "center" }}>
        <h1 style={{
          fontSize: "3.5rem",
          fontWeight: 700,
          color: "#0B0B0C",
          marginBottom: "1rem",
        }}>
          Build Smarter
        </h1>
        <p style={{
          fontSize: "1.125rem",
          color: "#6B7280",
          maxWidth: "500px",
        }}>
          Particle effects add depth and elegance to your hero section
        </p>
      </div>

      {/* Gradient mask to prevent sharp edges */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(350px 200px at top, transparent 20%, #FFFFFF 80%)",
        pointerEvents: "none",
        zIndex: 10,
      }} />
    </div>
  );
}

/**
 * Sparkles Dark Mode Demo
 * Full-page particles with white dots on dark background
 */
export function SparklesDarkDemo() {
  return (
    <div style={{
      height: "40rem",
      width: "100%",
      backgroundColor: "#0B0B0C",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: "8px",
      position: "relative",
    }}>
      {/* Full-page particles */}
      <div style={{ position: "absolute", inset: 0, height: "100%" }}>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>

      {/* Content */}
      <h1 style={{
        fontSize: "3.5rem",
        fontWeight: 700,
        color: "#FFFFFF",
        position: "relative",
        zIndex: 20,
      }}>
        Build faster
      </h1>
    </div>
  );
}

/**
 * Sparkles Accent Color Demo
 * Green particles with gradient text
 */
export function SparklesAccentDemo() {
  return (
    <div style={{
      height: "40rem",
      width: "100%",
      backgroundColor: "#0B0B0C",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: "8px",
      position: "relative",
    }}>
      {/* Particles with accent color */}
      <div style={{ position: "absolute", inset: 0, height: "100%" }}>
        <SparklesCore
          id="tsparticlesaccent"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#6F7D45"
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        position: "relative",
        zIndex: 20,
      }}>
        <h1 style={{
          fontSize: "3.5rem",
          fontWeight: 700,
          backgroundImage: "linear-gradient(to bottom, #F8F8F7, #9CA3AF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          The Future
        </h1>
        <p style={{
          color: "#9CA3AF",
          cursor: "default",
          textAlign: "center",
        }}>
          is brighter than you think
        </p>
      </div>
    </div>
  );
}
