'use client';
import Image from 'next/image';
import { useState } from 'react';

const TARGET = 320;
const SPINE = 20;

export default function BookMockup({ src, alt }: { src: string; alt: string }) {
  const [imgStyle, setImgStyle] = useState<React.CSSProperties>({
    display: 'block',
    height: `${TARGET}px`,
    width: 'auto',
    borderRadius: '0 2px 2px 0',
  });

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const landscape = img.naturalWidth > img.naturalHeight;
    setImgStyle({
      display: 'block',
      ...(landscape
        ? { width: `${TARGET}px`, height: 'auto' }
        : { height: `${TARGET}px`, width: 'auto' }),
      borderRadius: '0 2px 2px 0',
    });
  };

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{ padding: '36px 20px' }}
    >
      {/* Blurred background — same image, 200% scale, no extra network request */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: '200%',
          backgroundPosition: 'center',
          filter: 'blur(24px)',
          opacity: 0.65,
          transform: 'scale(1.15)',
        }}
      />

      {/* 3D book mockup */}
      <div className="relative z-10" style={{ perspective: '700px' }}>
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            transformStyle: 'preserve-3d',
            transform: 'rotateY(-22deg)',
            filter: 'drop-shadow(6px 12px 20px rgba(0,0,0,0.65))',
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={600}
            height={840}
            sizes="320px"
            onLoad={handleLoad}
            style={imgStyle}
          />

          {/* Spine */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0,
            width: SPINE,
            height: '100%',
            background: 'linear-gradient(to right, #0d0d14, #252530, #0d0d14)',
            transformOrigin: '0 50%',
            transform: 'rotateY(-90deg)',
          }} />

          {/* Page edges */}
          <div style={{
            position: 'absolute',
            top: 2, right: 0,
            width: 5,
            height: 'calc(100% - 4px)',
            background: 'repeating-linear-gradient(to bottom, #f5f2ed 0px, #e0dcd6 1px, #f5f2ed 2px)',
            transformOrigin: '100% 50%',
            transform: 'rotateY(90deg)',
          }} />
        </div>
      </div>
    </div>
  );
}
