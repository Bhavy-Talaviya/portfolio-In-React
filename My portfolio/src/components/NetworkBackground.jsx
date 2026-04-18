import { useRef, useEffect } from 'react';

const NetworkBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let isVisible = true;

        // Cache dimensions — written from ResizeObserver, read in animate()
        let canvasW = 0;
        let canvasH = 0;

        const setSize = (w, h) => {
            // Batch: read (from observer entry) then write — no forced reflow
            canvasW = w;
            canvasH = h;
            canvas.width = w;
            canvas.height = h;
            init();
        };

        // ResizeObserver delivers size without querying layout itself
        const ro = new ResizeObserver((entries) => {
            const entry = entries[0];
            const { width, height } = entry.contentRect;
            setSize(Math.round(width), Math.round(height));
        });
        ro.observe(canvas);

        // Pause animation when canvas is off-screen (e.g. tab hidden)
        const io = new IntersectionObserver(
            ([entry]) => { isVisible = entry.isIntersecting; },
            { threshold: 0 }
        );
        io.observe(canvas);

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
            const density = Math.floor((canvasW * canvasH) / 8000);
            const count = Math.min(density, 80); // Hard cap at 80
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            if (!isVisible) return; // skip paint when off-screen

            ctx.clearRect(0, 0, canvasW, canvasH);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    // Squared distance avoids expensive Math.sqrt
                    const distSq = dx * dx + dy * dy;

                    if (distSq < 10000) { // 100px threshold
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
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            ro.disconnect();
            io.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ willChange: 'transform' }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
};

export default NetworkBackground;
