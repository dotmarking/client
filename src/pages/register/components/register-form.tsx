import { useState } from 'react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    /* --------------------------------------------------- */

    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let { id, value } = event.target;

        if (id === 'phone') {
            value = value.replace(/[^0-9]/g, '');
        }

        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Фамилия */}
            <div className="space-y-2">
                <Label htmlFor="lastName" className="text-foreground">
                    Фамилия
                </Label>
                <Input
                    id="lastName"
                    type="text"
                    placeholder="Иванов"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-secondary border-border focus:border-accent"
                    maxLength={30}
                />
            </div>

            {/* Имя */}
            <div className="space-y-2">
                <Label htmlFor="firstName" className="text-foreground">
                    Имя
                </Label>
                <Input
                    id="firstName"
                    type="text"
                    placeholder="Иван"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-secondary border-border focus:border-accent"
                    maxLength={30}
                />
            </div>

            {/* Отчество */}
            <div className="space-y-2">
                <Label htmlFor="middleName" className="text-foreground text-sm">
                    Отчество
                </Label>
                <Input
                    id="middleName"
                    type="text"
                    placeholder="Иванович"
                    value={formData.middleName}
                    onChange={handleInputChange}
                    className="bg-secondary border-border focus:border-accent"
                    maxLength={30}
                />
            </div>

            {/* Email */}
            <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                    Почта
                </Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-secondary border-border focus:border-accent"
                />
            </div>

            {/* Phone*/}
            <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                    Номер телефона
                </Label>
                <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 999 99 99"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-secondary border-border focus:border-accent"
                    minLength={10}
                    maxLength={10}
                />
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
                        placeholder="Min. 8 characters"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="pr-10 bg-secondary border-border focus:border-accent"
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
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-11"
                disabled={
                    !formData.email ||
                    !formData.firstName ||
                    !formData.lastName ||
                    !formData.middleName ||
                    formData.password.length < 8 ||
                    formData.phone.length < 10 ||
                    isLoading
                }>
                {isLoading ? (
                    <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        Создание аккаунта...
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        Создать аккаунт
                        <ArrowRight className="w-4 h-4" />
                    </span>
                )}
            </Button>
        </form>
    );
}
