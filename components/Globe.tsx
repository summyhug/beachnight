"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

// Local texture - loads from same origin, no external fetch
const EARTH_TEXTURE = "/earth.jpg";

function EarthWithTexture() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  const earthTexture = useTexture(EARTH_TEXTURE);
  earthTexture.wrapS = earthTexture.wrapT = THREE.RepeatWrapping;

  const geometry = useMemo(() => new THREE.SphereGeometry(1, 64, 64), []);

  const material = useMemo(() => {
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        earthTex: { value: earthTexture },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform sampler2D earthTex;
        varying vec2 vUv;
        varying vec3 vNormal;

        float getLand(vec2 uv) {
          vec4 c = texture2D(earthTex, uv);
          return step(0.15, (c.r + c.g) - c.b);
        }

        void main() {
          float texSize = 1024.0;
          float d = 2.0 / texSize;

          float land = getLand(vUv);
          float landR = getLand(vUv + vec2(d, 0.0));
          float landL = getLand(vUv + vec2(-d, 0.0));
          float landU = getLand(vUv + vec2(0.0, d));
          float landD = getLand(vUv + vec2(0.0, -d));

          float coast = abs(land - landR) + abs(land - landL) + abs(land - landU) + abs(land - landD);
          coast = smoothstep(0.0, 0.8, coast);

          float beachLatitude = 1.0 - smoothstep(0.35, 0.85, abs(vNormal.y));
          coast *= beachLatitude;

          float pulse = 0.6 + 0.4 * sin(time * 2.0);
          float glowOpacity = 0.5;
          vec3 tealGlow = vec3(0.0, 0.96, 0.83) * coast * pulse * glowOpacity;

          vec3 oceanColor = vec3(0.02, 0.05, 0.12);
          vec3 landColor = vec3(0.03, 0.07, 0.14);
          vec3 baseColor = mix(oceanColor, landColor, land);

          float lights = land * pow(1.0 - abs(vNormal.y), 3.0) * 0.08;
          vec3 lightColor = vec3(1.0, 0.82, 0.4) * lights;

          vec3 finalColor = baseColor + tealGlow + lightColor;
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
      side: THREE.FrontSide,
    });
    materialRef.current = mat;
    return mat;
  }, [earthTexture]);

  useFrame((state) => {
    if (materialRef.current?.uniforms) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} scale={1.2} />
  );
}

function EarthProcedural() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  const geometry = useMemo(() => new THREE.SphereGeometry(1, 64, 64), []);

  const material = useMemo(() => {
    const mat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vec3 oceanColor = vec3(0.02, 0.05, 0.12);
          float coastGlow = pow(1.0 - abs(vNormal.y), 2.0) * 0.5;
          coastGlow += sin(vUv.x * 20.0 + time * 0.5) * 0.1;
          vec3 tealGlow = vec3(0.0, 0.96, 0.83) * coastGlow;
          float lights = pow(1.0 - abs(vNormal.y), 4.0) * 0.15;
          vec3 lightColor = vec3(1.0, 0.82, 0.4) * lights;
          gl_FragColor = vec4(oceanColor + tealGlow + lightColor, 1.0);
        }
      `,
      side: THREE.FrontSide,
    });
    materialRef.current = mat;
    return mat;
  }, []);

  useFrame((state) => {
    if (materialRef.current?.uniforms?.time) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
    if (meshRef.current) meshRef.current.rotation.y += 0.0005;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} scale={1.2} />
  );
}

function GlobeCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />
        <Suspense fallback={<EarthProcedural />}>
          <EarthWithTexture />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2 - 0.5}
        />
      </Canvas>
    </div>
  );
}

export default function Globe() {
  return <GlobeCanvas />;
}
