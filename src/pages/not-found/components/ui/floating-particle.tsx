export default function FloatingParticle({ delay, x }: { delay: number; x: number }) {
    return (
        <div
            className="absolute w-px h-px rounded-full bg-accent/40 animate-pulse"
            style={{
                left: `${x}%`,
                bottom: '-2%',
                animationDelay: `${delay}s`,
                animationDuration: '3s',
                animation: `float-up ${4 + Math.random() * 4}s linear ${delay}s infinite`,
            }}
        />
    );
}
