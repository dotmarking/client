import { useState } from 'react';
import { Link } from 'react-router';
import { Quote } from './components/ui/quote';
import LoginForm from './components/login-form';

function LoginPage() {
    const [error] = useState('');

    return (
        <div className="min-h-screen bg-background flex">
            {/* Left side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-card border-r border-border items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
                {/* Decorative grid */}

                <div className="relative z-10 px-12 max-w-md">
                    <div className="mb-10">
                        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 border border-accent/20">
                            <span className="text-accent font-bold text-2xl">T</span>
                        </div>
                        <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight text-balance">
                            Привет!
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Мы помним тебя. Продолжай с того места, на котором остановился.
                        </p>
                    </div>

                    <Quote />
                </div>
            </div>

            {/* Right side - Form */}
            <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
                <div className="w-full max-w-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-foreground mb-2">Войти</h2>
                        <p className="text-muted-foreground">
                            {'Нет аккаунта? '}
                            <Link
                                to="/register"
                                className="text-accent hover:underline underline-offset-4">
                                Создать аккаунт
                            </Link>
                        </p>
                    </div>
                    {error && (
                        <div className="mb-5 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive-foreground">
                            {error}
                        </div>
                    )}
                    <LoginForm />

                    <p className="mt-6 text-xs text-muted-foreground text-center leading-relaxed">
                        Входя в аккаунт, вы соглашаетесь с нашими{' '}
                        <Link
                            to="/terms"
                            className="text-accent hover:underline underline-offset-4">
                            Условиями использования
                        </Link>{' '}
                        и{' '}
                        <Link
                            to="/privacy"
                            className="text-accent hover:underline underline-offset-4">
                            Политикой конфиденциальности
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export const Component = LoginPage;
