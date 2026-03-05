import { useEffect, useState } from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Link } from 'react-router';
import FloatingParticle from './components/ui/floating-particle';

function NotFound() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const particles = Array.from({ length: 20 }, (_, i) => ({
        delay: Math.random() * 5,
        x: Math.random() * 100,
    }));

    return (
        <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
            {/* Subtle radial glow following cursor */}
            <div
                className="pointer-events-none absolute inset-0 transition-transform duration-700 ease-out"
                style={{
                    background: `radial-gradient(600px circle at calc(50% + ${mousePos.x * 2}px) calc(50% + ${mousePos.y * 2}px), oklch(0.75 0.15 45 / 0.04), transparent 60%)`,
                }}
            />

            {/* Grid lines */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                        backgroundSize: '80px 80px',
                    }}
                />
            </div>

            {/* Floating particles */}
            {particles.map((p, i) => (
                <FloatingParticle key={i} delay={p.delay} x={p.x} />
            ))}

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
                {/* Large 404 */}
                <div
                    className="relative transition-transform duration-500 ease-out"
                    style={{
                        transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
                    }}>
                    <h1 className="text-[10rem] sm:text-[14rem] font-bold leading-none tracking-tighter text-foreground/[0.06] select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl sm:text-8xl font-bold tracking-tighter text-foreground font-mono">
                            404
                        </span>
                    </div>
                </div>

                {/* Handle-style message */}
                <div className="flex flex-col items-center gap-3 -mt-4">
                    <p className="text-accent font-mono text-sm tracking-wider">NOT FOUND</p>
                    <h2 className="text-xl sm:text-2xl font-medium text-foreground tracking-tight text-balance">
                        Эта страница потерялась на складе
                    </h2>
                    <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                        Страница, которую вы ищете, не существует, была перемещена или вообще
                        никогда не существовала.
                    </p>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3 mt-2">
                    <Button
                        variant="outline"
                        className="gap-2 border-border/60 bg-transparent text-muted-foreground hover:text-foreground hover:border-border"
                        onClick={() => history.back()}>
                        <ArrowLeft className="h-4 w-4" />
                        Назад
                    </Button>
                    <Button
                        asChild
                        className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link to="/">
                            <Home className="h-4 w-4" />
                            Главная
                        </Link>
                    </Button>
                </div>

                {/* Decorative bottom line */}
                <div className="mt-8 flex items-center gap-3 text-muted-foreground/40">
                    <div className="h-px w-12 bg-border/40" />
                    <span className="text-xs font-mono">Точка Маркировки 2026</span>
                    <div className="h-px w-12 bg-border/40" />
                </div>
            </div>
        </div>
    );
}

export const Component = NotFound;
