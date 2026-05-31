export function metersPerSecondToKnots(value: number): number {
  return value * 1.9438444924406;
}

export function metersPerSecondToMph(value: number): number {
  return value * 2.2369362920544;
}

export function degreesToCardinal(value: number): string {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(((value % 360) / 22.5)) % 16;
  return directions[index];
}