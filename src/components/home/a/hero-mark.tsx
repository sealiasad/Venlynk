"use client";

import { useEffect, useRef } from "react";

import { MARK_PATH } from "@/components/brand/mark-path";

/**
 * The Venlynk mark as a live 3D object. Extruded from the real logo path,
 * floats, turns toward the pointer and drops away as the page scrolls.
 * Three.js is loaded on the client only, after first paint.
 */
export function HeroMark() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stop = false;
    let cleanup = () => {};

    import("three").then((THREE) => {
      if (stop) return;
      const pts = MARK_PATH.replace(/[MZ]/g, "")
        .split("L")
        .map((s) => s.trim().split(/\s+/).map(Number))
        .filter((p) => p.length === 2 && !Number.isNaN(p[0]));
      const shape = new THREE.Shape();
      pts.forEach(([x, y], i) => {
        const px = (x - 50) / 10;
        const py = -(y - 43.34) / 10;
        if (i) shape.lineTo(px, py);
        else shape.moveTo(px, py);
      });
      const geo = new THREE.ExtrudeGeometry(shape, {
        depth: 1.6,
        bevelEnabled: true,
        bevelThickness: 0.35,
        bevelSize: 0.22,
        bevelSegments: 6,
        curveSegments: 4,
      });
      geo.center();

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      const scene = new THREE.Scene();
      const cam = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
      cam.position.set(0, 0, 26);

      const mat = new THREE.MeshPhysicalMaterial({
        color: 0x4546f8,
        metalness: 0.35,
        roughness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        emissive: 0x15166b,
        emissiveIntensity: 0.35,
      });
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo, 30),
        new THREE.LineBasicMaterial({ color: 0xa5a6ff, transparent: true, opacity: 0.55 }),
      );
      const group = new THREE.Group();
      group.add(new THREE.Mesh(geo, mat));
      group.add(edges);
      group.rotation.set(-0.25, -0.5, 0.08);
      scene.add(group);

      scene.add(new THREE.AmbientLight(0x8889ff, 1.2));
      const key = new THREE.DirectionalLight(0xffffff, 2.2);
      key.position.set(6, 8, 10);
      scene.add(key);
      const rim = new THREE.PointLight(0x7c7dff, 60, 60);
      rim.position.set(-10, -4, 8);
      scene.add(rim);
      const teal = new THREE.PointLight(0x36d1dc, 30, 60);
      teal.position.set(8, -10, -6);
      scene.add(teal);

      const size = () => {
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        renderer.setSize(w, h, false);
        cam.aspect = w / h;
        cam.updateProjectionMatrix();
      };
      size();

      let mx = 0;
      let my = 0;
      let sp = 0;
      const onMove = (e: PointerEvent) => {
        mx = e.clientX / window.innerWidth - 0.5;
        my = e.clientY / window.innerHeight - 0.5;
      };
      const onScroll = () => {
        sp = Math.min(window.scrollY / window.innerHeight, 1.5);
      };
      window.addEventListener("resize", size);
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });

      const clock = new THREE.Clock();
      let raf = 0;
      let visible = true;
      const io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
      });
      io.observe(canvas);

      const loop = () => {
        raf = requestAnimationFrame(loop);
        if (!visible) return;
        const t = clock.getElapsedTime();
        const tx = -0.25 + my * 0.5 + sp * 0.6;
        const ty = -0.5 + mx * 0.9 + (reduced ? 0 : t * 0.12) + sp * 1.2;
        group.rotation.x += (tx - group.rotation.x) * 0.06;
        group.rotation.y += (ty - group.rotation.y) * 0.06;
        group.position.y = (reduced ? 0 : Math.sin(t * 0.9) * 0.35) - sp * 4;
        rim.position.x = -10 + mx * 12;
        rim.position.y = -4 - my * 10;
        renderer.render(scene, cam);
      };
      loop();
      canvas.dataset.ready = "true";

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        window.removeEventListener("resize", size);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("scroll", onScroll);
        geo.dispose();
        mat.dispose();
        edges.geometry.dispose();
        edges.material.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
      };
    });

    return () => {
      stop = true;
      cleanup();
    };
  }, []);

  return <canvas ref={ref} className="ha-mark" aria-hidden="true" />;
}
