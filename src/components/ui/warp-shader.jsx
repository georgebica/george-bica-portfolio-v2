import { Warp } from '@paper-design/shaders-react';

export default function WarpShader({
  proportion = 0.45,
  softness = 1,
  distortion = 0.25,
  swirl = 0.8,
  swirlIterations = 10,
  shape = 'checks',
  shapeScale = 0.1,
  scale = 1,
  rotation = 0,
  speed = 1.1,
  colors = [
    'hsl(200, 100%, 12%)',
    'hsl(160, 100%, 70%)',
    'hsl(180, 90%, 25%)',
    'hsl(170, 100%, 80%)',
  ],
}) {
  return (
    <Warp
      style={{ height: '100%', width: '100%' }}
      proportion={proportion}
      softness={softness}
      distortion={distortion}
      swirl={swirl}
      swirlIterations={swirlIterations}
      shape={shape}
      shapeScale={shapeScale}
      scale={scale}
      rotation={rotation}
      speed={speed}
      colors={colors}
    />
  );
}
