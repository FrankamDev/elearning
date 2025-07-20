// particles.ts
import { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "@tsparticles/preset-stars";

/**
 * Initialise tsParticles avec le preset "stars"
 * @param engine L'instance de moteur tsParticles à configurer
 */
export const particlesInit = async (engine: Engine): Promise<void> => {
  // Charge le preset prédéfini
  await loadStarsPreset(engine);
};
