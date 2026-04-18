import { useRef, useEffect } from 'react';

const NetworkBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Cache dimensions to avoid forced reflow on every resize read
        let canvasW = 0;
        let canvasH = 0;
        let resizeTimeout;

        const resizeCanvas = () => {
            // Debounce resize to avoid thrashing
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Read layout once, then write — avoids forced reflow
                canvasW = window.innerWidth;
                canvasH = window.innerHeight;
                canvas.width = canvasW;
                canvas.height = canvasH;
                // Re-init particles for new canvas size
                init();
            }, 100);
        };

        // Initial size — read before animation starts
        canvasW = window.innerWidth;
        canvasH = window.innerHeight;
        canvas.width = canvasW;
        canvas.height = canvasH;

        window.addEventListener('resize', resizeCanvas, { passive: true });

        class Particle {
            constructor() {
                this.x = Math.random() * canvasW;
                this.y = Math.random() * canvasH;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvasW) this.vx *= -1;
                if (this.y < 0 || this.y > canvasH) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(100, 255, 218, 0.5)';
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            // Cap particle count — fewer particles = less reflow pressure
            const density = Math.floor((canvasW * canvasH) / 8000);
            const count = Math.min(density, 80); // Hard cap at 80
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvasW, canvasH);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    // Use squared distance — avoids expensive Math.sqrt
                    const distSq = dx * dx + dy * dy;

                    if (distSq < 10000) { // 100^2
                        const dist = Math.sqrt(distSq);
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(100, 255, 218, ${0.1 - dist / 1000})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            clearTimeout(resizeTimeout);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ willChange: 'contents' }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
};

export default NetworkBackground;
