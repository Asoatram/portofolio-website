import { useEffect, useRef, useMemo } from 'react';
import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision mediump float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

// Optimized permute and Taylor inverse sqrt
vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

vec3 taylorInvSqrt(vec3 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

// Optimized 2D simplex noise
float snoise(vec2 P) {
  const vec2 C = vec2(0.211324865405187, 0.366025403784439);
  vec2 i = floor(P + dot(P, C.yy));
  vec2 x0 = P - i + dot(i, C.xx);

  vec2 i1;
  i1.x = step(x0.y, x0.x);
  i1.y = 1.0 - i1.x;

  vec4 x12 = x0.xyxy + vec4(C.xx, C.xx * 2.0 - 1.0);
  x12.xy -= i1;

  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));

  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;

  vec3 x = fract(p * (1.0 / 41.0)) * 2.0 - 1.0;
  vec3 gy = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 gx = x - ox;

  m *= taylorInvSqrt(gx * gx + gy * gy);

  vec3 g;
  g.x = gx.x * x0.x + gy.x * x0.y;
  g.yz = gx.yz * x12.xz + gy.yz * x12.yw;

  return 130.0 * dot(m, g);
}

// Taylor series approx for exp(x) ~ 1 + x + x^2/2 + x^3/6
float approx_exp(float x) {
  float x2 = x * x;
  float x3 = x2 * x;
  return 1.0 + x + 0.5 * x2 + (1.0 / 6.0) * x3;
}

// Unrolled color ramp for fixed 3 stops (0.0, 0.5, 1.0)
vec3 getRampColor(float factor, vec3[3] colors) {
  float t = factor * 2.0;
  vec3 c0 = colors[0];
  vec3 c1 = colors[1];
  vec3 c2 = colors[2];

  vec3 blend1 = mix(c0, c1, clamp(t, 0.0, 1.0));
  vec3 blend2 = mix(c1, c2, clamp(t - 1.0, 0.0, 1.0));

  return mix(blend1, blend2, step(1.0, t));
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  vec3 rampColor = getRampColor(uv.x, uColorStops);

  float noiseVal = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25));
  float height = noiseVal * 0.5 * uAmplitude;
  height = approx_exp(height);
  height = (uv.y * 2.0 - height + 0.2);

  float intensity = 0.6 * height;

  float midPoint = 0.20;
  float halfBlend = uBlend * 0.5;
  float auroraAlpha = smoothstep(midPoint - halfBlend, midPoint + halfBlend, intensity);

  vec3 auroraColor = intensity * rampColor;

  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

interface AuroraProps {
    colorStops?: string[];
    amplitude?: number;
    blend?: number;
    time?: number;
    speed?: number;
}

export default function Aurora(props: AuroraProps) {
    const { colorStops = ['#5227FF', '#7cff67', '#5227FF'], amplitude = 1.0, blend = 0.5 } = props;
    const propsRef = useRef<AuroraProps>(props);
    propsRef.current = props;

    const ctnDom = useRef<HTMLDivElement>(null);

    // Memoize colorStopsArray to avoid recomputing every frame
    const colorStopsArray = useMemo(() => colorStops.map(hex => {
        const c = new Color(hex);
        return [c.r, c.g, c.b];
    }), [colorStops]);

    useEffect(() => {
        const ctn = ctnDom.current;
        if (!ctn) return;

        const renderer = new Renderer({
            alpha: true,
            premultipliedAlpha: true,
            antialias: true
        });
        const gl = renderer.gl;
        gl.clearColor(0, 0, 0, 0);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.canvas.style.backgroundColor = 'transparent';

        let program: Program | undefined;

        function resize() {
            if (!ctn) return;
            const width = ctn.offsetWidth;
            const height = ctn.offsetHeight;
            renderer.setSize(width, height);
            if (program) {
                program.uniforms.uResolution.value = [width, height];
            }
        }
        window.addEventListener('resize', resize);

        const geometry = new Triangle(gl);
        if (geometry.attributes.uv) {
            delete geometry.attributes.uv;
        }

        program = new Program(gl, {
            vertex: VERT,
            fragment: FRAG,
            uniforms: {
                uTime: { value: 0 },
                uAmplitude: { value: amplitude },
                uColorStops: { value: colorStopsArray },
                uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
                uBlend: { value: blend }
            }
        });

        const mesh = new Mesh(gl, { geometry, program });
        ctn.appendChild(gl.canvas);

        let animateId = 0;
        const update = (t: number) => {
            animateId = requestAnimationFrame(update);
            const { time = t * 0.01, speed = 1.0, amplitude: currentAmp = 1.0, blend: currentBlend = blend } = propsRef.current;
            if (program) {
                program.uniforms.uTime.value = time * speed * 0.1;
                program.uniforms.uAmplitude.value = currentAmp;
                program.uniforms.uBlend.value = currentBlend;
                program.uniforms.uColorStops.value = colorStopsArray;
                renderer.render({ scene: mesh });
            }
        };
        animateId = requestAnimationFrame(update);

        resize();

        return () => {
            cancelAnimationFrame(animateId);
            window.removeEventListener('resize', resize);
            if (ctn && gl.canvas.parentNode === ctn) {
                ctn.removeChild(gl.canvas);
            }
            gl.getExtension('WEBGL_lose_context')?.loseContext();
        };
    }, [colorStops, amplitude, blend]);

    return <div ref={ctnDom} className="w-full h-full" />;
}