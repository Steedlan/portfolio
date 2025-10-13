import connect from "./templates/connect.json"

export enum ParticlesType {
  CONNECT = "CONNECT",
}

export const particlesTemplates: Record<ParticlesType, unknown> = {
  [ParticlesType.CONNECT]: connect,
}

export interface ParticlesProps {
  type: ParticlesType
  zIndex?: number
  id: string
}
