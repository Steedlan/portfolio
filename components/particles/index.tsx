"use client";

import { memo, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";
import { ParticlesProps, particlesTemplates } from "./props";

function ParticleLayer({ type, zIndex = 0, id }: ParticlesProps) {
  // init once with the proper engine
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    });
  }, []);

  // const particlesLoaded = useCallback(async () => {
  //   console.log("Particles loaded");
  // }, []);

  return (
    <Particles
      id={id}
      options={particlesTemplates[type] as object}
      // loaded={particlesLoaded}
      style={{
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex,
        pointerEvents: "none",
        position: "absolute",
      }}
    />
  );
}

export default memo(ParticleLayer);
