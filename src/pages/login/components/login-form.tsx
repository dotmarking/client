import { useState } from 'react';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';

import { Label } from '@/shared/components/ui/label';
import { Input } from '@/shared/components/ui/input';
import { Button } from '@/shared/components/ui/button';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground text-sm">
                    Почта
                </Label>
                <div className="relative">
                    <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pr-10 bg-secondary border-border focus:border-accent h-11"
                    />
                </div>
            </div>
            {/* Password */}
            <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">
                    Пароль
                </Label>
                <div className="relative">
                    <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Введите ваш пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pr-10 bg-secondary border-border focus:border-accent h-11"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                        {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                        ) : (
                            <Eye className="w-4 h-4" />
                        )}
                    </button>
                </div>
            </div>
            {/* Submit */}
            <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-11 mt-2"
                disabled={!email || !password || isLoading}>
                {isLoading ? (
                    <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        Вход...
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        Войти
                        <ArrowRight className="w-4 h-4" />
                    </span>
                )}
            </Button>
        </form>
    );
}
