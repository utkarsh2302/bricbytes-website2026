import { useEffect, useRef } from 'react';
import ThreeGlobe from 'three-globe';
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  PointLight,
  MeshPhongMaterial,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import globeData from '../../data/globe-data.json';

const AIRPORTS = [
  { city: 'Jaipur',       lat:  26.9124,  lng:  75.7873 },
  { city: 'Mumbai',       lat:  19.0760,  lng:  72.8777 },
  { city: 'Delhi',        lat:  28.6139,  lng:  77.2090 },
  { city: 'Bangalore',    lat:  12.9716,  lng:  77.5946 },
  { city: 'Pune',         lat:  18.5204,  lng:  73.8567 },
  { city: 'Hyderabad',    lat:  17.3850,  lng:  78.4867 },
  { city: 'Ahmedabad',    lat:  23.0225,  lng:  72.5714 },
  { city: 'Chennai',      lat:  13.0827,  lng:  80.2707 },
  { city: 'Kolkata',      lat:  22.5726,  lng:  88.3639 },
  { city: 'Surat',        lat:  21.1702,  lng:  72.8311 },
  { city: 'Lucknow',      lat:  26.8467,  lng:  80.9462 },
  { city: 'Chandigarh',   lat:  30.7333,  lng:  76.7794 },
  { city: 'Kochi',        lat:   9.9312,  lng:  76.2673 },
  { city: 'Indore',       lat:  22.7196,  lng:  75.8577 },
  { city: 'Nagpur',       lat:  21.1458,  lng:  79.0882 },
  { city: 'Bhopal',       lat:  23.2599,  lng:  77.4126 },
  { city: 'Vadodara',     lat:  22.3072,  lng:  73.1812 },
  { city: 'Gurgaon',      lat:  28.4595,  lng:  77.0266 },
  { city: 'Noida',        lat:  28.5355,  lng:  77.3910 },
  { city: 'Coimbatore',   lat:  11.0168,  lng:  76.9558 },
  { city: 'Dubai',        lat:  25.2048,  lng:  55.2708 },
  { city: 'Abu Dhabi',    lat:  24.4539,  lng:  54.3773 },
  { city: 'Riyadh',       lat:  24.7136,  lng:  46.6753 },
  { city: 'Doha',         lat:  25.2854,  lng:  51.5310 },
  { city: 'Kuwait City',  lat:  29.3759,  lng:  47.9774 },
  { city: 'Muscat',       lat:  23.5880,  lng:  58.3829 },
  { city: 'Bahrain',      lat:  26.0667,  lng:  50.5577 },
  { city: 'London',       lat:  51.5074,  lng:  -0.1278 },
  { city: 'Frankfurt',    lat:  50.1109,  lng:   8.6821 },
  { city: 'Paris',        lat:  48.8566,  lng:   2.3522 },
  { city: 'Amsterdam',    lat:  52.3676,  lng:   4.9041 },
  { city: 'Berlin',       lat:  52.5200,  lng:  13.4050 },
  { city: 'Madrid',       lat:  40.4168,  lng:  -3.7038 },
  { city: 'Milan',        lat:  45.4642,  lng:   9.1900 },
  { city: 'Zurich',       lat:  47.3769,  lng:   8.5417 },
  { city: 'Stockholm',    lat:  59.3293,  lng:  18.0686 },
  { city: 'Vienna',       lat:  48.2082,  lng:  16.3738 },
  { city: 'Warsaw',       lat:  52.2297,  lng:  21.0122 },
  { city: 'Dublin',       lat:  53.3498,  lng:  -6.2603 },
  { city: 'New York',     lat:  40.7128,  lng: -74.0060 },
  { city: 'Los Angeles',  lat:  34.0522,  lng: -118.2437 },
  { city: 'Chicago',      lat:  41.8781,  lng: -87.6298 },
  { city: 'Houston',      lat:  29.7604,  lng: -95.3698 },
  { city: 'Toronto',      lat:  43.6532,  lng: -79.3832 },
  { city: 'San Francisco',lat:  37.7749,  lng: -122.4194 },
  { city: 'Seattle',      lat:  47.6062,  lng: -122.3321 },
  { city: 'Miami',        lat:  25.7617,  lng: -80.1918 },
  { city: 'Dallas',       lat:  32.7767,  lng: -96.7970 },
  { city: 'Vancouver',    lat:  49.2827,  lng: -123.1207 },
  { city: 'Mexico City',  lat:  19.4326,  lng: -99.1332 },
  { city: 'Singapore',    lat:   1.3521,  lng: 103.8198 },
  { city: 'Tokyo',        lat:  35.6762,  lng: 139.6503 },
  { city: 'Shanghai',     lat:  31.2304,  lng: 121.4737 },
  { city: 'Beijing',      lat:  39.9042,  lng: 116.4074 },
  { city: 'Hong Kong',    lat:  22.3193,  lng: 114.1694 },
  { city: 'Kuala Lumpur', lat:   3.1390,  lng: 101.6869 },
  { city: 'Bangkok',      lat:  13.7563,  lng: 100.5018 },
  { city: 'Jakarta',      lat:  -6.2088,  lng: 106.8456 },
  { city: 'Seoul',        lat:  37.5665,  lng: 126.9780 },
  { city: 'Osaka',        lat:  34.6937,  lng: 135.5023 },
  { city: 'Taipei',       lat:  25.0330,  lng: 121.5654 },
  { city: 'Manila',       lat:  14.5995,  lng: 120.9842 },
  { city: 'Ho Chi Minh',  lat:  10.8231,  lng: 106.6297 },
  { city: 'Sydney',       lat: -33.8688,  lng: 151.2093 },
  { city: 'Melbourne',    lat: -37.8136,  lng: 144.9631 },
  { city: 'Brisbane',     lat: -27.4698,  lng: 153.0251 },
  { city: 'Auckland',     lat: -36.8509,  lng: 174.7645 },
  { city: 'Nairobi',      lat:  -1.2921,  lng:  36.8219 },
  { city: 'Lagos',        lat:   6.5244,  lng:   3.3792 },
  { city: 'Cairo',        lat:  30.0444,  lng:  31.2357 },
  { city: 'Johannesburg', lat: -26.2041,  lng:  28.0473 },
  { city: 'Cape Town',    lat: -33.9249,  lng:  18.4241 },
  { city: 'Casablanca',   lat:  33.5731,  lng:  -7.5898 },
  { city: 'São Paulo',    lat: -23.5505,  lng: -46.6333 },
  { city: 'Buenos Aires', lat: -34.6037,  lng: -58.3816 },
  { city: 'Bogotá',       lat:   4.7110,  lng: -74.0721 },
  { city: 'Lima',         lat: -12.0464,  lng: -77.0428 },
  { city: 'Santiago',     lat: -33.4489,  lng: -70.6693 },
];

const FLIGHT_ARCS = [
  { startLat: 26.91, startLng:  75.79, endLat:  19.08, endLng:  72.88, arcAlt: 0.08,  color: 0 },
  { startLat: 28.61, startLng:  77.21, endLat:  12.97, endLng:  77.59, arcAlt: 0.08,  color: 1 },
  { startLat: 23.02, startLng:  72.57, endLat:  19.08, endLng:  72.88, arcAlt: 0.05,  color: 2 },
  { startLat: 26.91, startLng:  75.79, endLat:  28.61, endLng:  77.21, arcAlt: 0.05,  color: 0 },
  { startLat: 19.08, startLng:  72.88, endLat:  25.20, endLng:  55.27, arcAlt: 0.20,  color: 1 },
  { startLat: 28.61, startLng:  77.21, endLat:  51.51, endLng:  -0.13, arcAlt: 0.35,  color: 2 },
  { startLat: 19.08, startLng:  72.88, endLat:   1.35, endLng: 103.82, arcAlt: 0.30,  color: 3 },
  { startLat: 12.97, startLng:  77.59, endLat:  35.68, endLng: 139.65, arcAlt: 0.35,  color: 0 },
  { startLat: 19.08, startLng:  72.88, endLat:  40.71, endLng: -74.01, arcAlt: 0.40,  color: 1 },
  { startLat: 28.61, startLng:  77.21, endLat:  25.20, endLng:  55.27, arcAlt: 0.20,  color: 2 },
  { startLat: 51.51, startLng:  -0.13, endLat:  40.71, endLng: -74.01, arcAlt: 0.25,  color: 3 },
  { startLat:  1.35, startLng: 103.82, endLat:  35.68, endLng: 139.65, arcAlt: 0.15,  color: 0 },
  { startLat: 25.20, startLng:  55.27, endLat:  51.51, endLng:  -0.13, arcAlt: 0.25,  color: 1 },
  { startLat: 40.71, startLng: -74.01, endLat:  35.68, endLng: 139.65, arcAlt: 0.40,  color: 2 },
  { startLat: 50.11, startLng:   8.68, endLat:  40.71, endLng: -74.01, arcAlt: 0.22,  color: 3 },
  { startLat: -33.87,startLng: 151.21, endLat:  35.68, endLng: 139.65, arcAlt: 0.12,  color: 0 },
  { startLat: 25.20, startLng:  55.27, endLat:   1.35, endLng: 103.82, arcAlt: 0.18,  color: 1 },
];

interface GlobeSceneProps {
  theme?: 'light' | 'dark';
}

export function GlobeScene({ theme = 'light' }: GlobeSceneProps) {
  const mountRef  = useRef<HTMLDivElement>(null);
  const globeRef  = useRef<ThreeGlobe | null>(null);
  const matRef    = useRef<MeshPhongMaterial | null>(null);
  const rendRef   = useRef<WebGLRenderer | null>(null);

  // Re-theme when theme toggles
  useEffect(() => {
    const globe = globeRef.current;
    const mat   = matRef.current;
    if (!globe || !mat) return;

    const isDark = theme === 'dark';

    // Keep sphere invisible — just update dot/arc colors
    mat.opacity = 0;

    globe.hexPolygonColor(() =>
      isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.75)'
    );

    const lightArcs = ['#000000', '#333333', '#555555', '#888888'];
    const darkArcs  = ['#ffffff', '#cccccc', '#aaaaaa', '#888888'];
    const colors = isDark ? darkArcs : lightArcs;
    globe.arcColor((d: object) => colors[(d as { color: number }).color]);
    globe.pointColor(() => isDark ? '#ffffff' : '#000000');
  }, [theme]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isDark = theme === 'dark';

    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);
    rendRef.current = renderer;
    Object.assign(renderer.domElement.style, {
      width: '100%', height: '100%',
      position: 'absolute', top: '0', left: '0',
    });

    const scene = new Scene();
    scene.add(new AmbientLight(0xbbbbbb, 0.3));

    const camera = new PerspectiveCamera(50, w / h, 1, 1000);
    camera.position.set(0, 40, 320);

    const dLight = new DirectionalLight(0xffffff, 0.8);
    dLight.position.set(-800, 2000, 400);
    camera.add(dLight);

    const dLight1 = new DirectionalLight(0x7982f6, 1);
    dLight1.position.set(-200, 500, 200);
    camera.add(dLight1);

    const dLight2 = new PointLight(0x8566cc, 0.5);
    dLight2.position.set(-200, 500, 200);
    camera.add(dLight2);

    scene.add(camera);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.zoomSpeed = 0;
    controls.minDistance = 320;
    controls.maxDistance = 320;
    controls.target.set(0, -20, 0);
    controls.rotateSpeed = 0.6;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.minPolarAngle = Math.PI / 3.5;
    controls.maxPolarAngle = Math.PI - Math.PI / 3;
    controls.update();

    const arcColors = isDark
      ? ['#ffffff', '#cccccc', '#aaaaaa', '#888888']
      : ['#000000', '#333333', '#555555', '#888888'];

    const Globe = new ThreeGlobe({ waitForGlobeReady: true, animateIn: true })
      .hexPolygonsData((globeData as { features: object[] }).features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.55)          // tighter margin = bigger, more visible dots
      .showAtmosphere(false)           // no atmosphere
      .hexPolygonColor(() =>
        isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.75)'
      );

    globeRef.current = Globe;

    const arcTimer = window.setTimeout(() => {
      Globe
        .arcsData(FLIGHT_ARCS)
        .arcStartLat('startLat').arcStartLng('startLng')
        .arcEndLat('endLat').arcEndLng('endLng')
        .arcColor((d: object) => arcColors[(d as { color: number }).color])
        .arcAltitude('arcAlt')
        .arcStroke(0.3)
        .arcDashLength(0.9)
        .arcDashGap(4)
        .arcDashAnimateTime(1500)
        .arcDashInitialGap((d: object) => (d as { color: number }).color * 0.5)
        .pointsData(AIRPORTS)
        .pointColor(() => isDark ? '#a5b4fc' : '#1d4ed8')
        .pointsMerge(true)
        .pointAltitude(0.06)
        .pointRadius(0.035);
    }, 1000);

    Globe.rotateY(-Math.PI * (5 / 9));
    Globe.rotateZ(-Math.PI / 6);
    Globe.position.y = -20;

    const mat = Globe.globeMaterial() as MeshPhongMaterial;
    mat.transparent = true;
    mat.opacity = 0;
    matRef.current = mat;

    scene.add(Globe);

    const onResize = () => {
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      camera.aspect = cw / ch;
      camera.updateProjectionMatrix();
      renderer.setSize(cw, ch);
    };
    window.addEventListener('resize', onResize);

    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(arcTimer);
      window.removeEventListener('resize', onResize);
      controls.dispose();
      renderer.dispose();
      globeRef.current = null;
      matRef.current = null;
      rendRef.current = null;
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100%', position: 'relative' }} />
  );
}

export default GlobeScene;
