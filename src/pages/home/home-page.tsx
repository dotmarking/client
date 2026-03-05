import { Link } from 'react-router';
import { Button } from '@/shared/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { SubscriptionCards } from './components/subscription-cards';
import { UPDCards } from './components/upd-cards';

import { UpdInfoPanel } from './components/upd-info-panel';

function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-transform duration-200 group-hover:scale-105">
                            <span className="font-bold text-sm">TM</span>
                            <div className="absolute -inset-1 rounded-xl bg-accent/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-foreground leading-none">
                                Точка Маркировки
                            </span>
                            <span className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                                Платформа для работы с Честным Знаком
                            </span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-1">
                        <a
                            href="#subscriptions"
                            className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/60">
                            Подписки
                        </a>
                        <a
                            href="#upd"
                            className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/60">
                            {'Цены УПД'}
                        </a>
                    </nav>

                    <div className="flex items-center gap-2">
                        <Link to="/login">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-muted-foreground hover:text-foreground text-xs">
                                Войти
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button
                                size="sm"
                                className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs gap-1.5">
                                Начать
                                <ChevronRight className="h-3 w-3" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] bg-accent/[0.04] blur-[100px] rounded-full" />
                </div>
                <div className="relative mx-auto max-w-3xl px-6 py-20 text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3.5 py-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[11px] font-medium text-accent">
                            Платформа маркировки
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                        Простые и прозрачные цены
                    </h1>
                    <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
                        Выберите подписку, которая подходит вашему бизнесу. Оплачивайте только то,
                        что используете.
                    </p>
                </div>
            </section>

            {/* Subscriptions */}
            <section id="subscriptions" className="mx-auto max-w-4xl px-6 pb-20">
                <div className="mb-8 flex items-center gap-3">
                    <h2 className="text-lg font-semibold text-foreground">Подписки</h2>
                    <div className="h-px flex-1 bg-border" />
                </div>
                <SubscriptionCards></SubscriptionCards>
            </section>

            {/* UPD Pricing */}
            <section id="upd" className="mx-auto max-w-4xl px-6 pb-20">
                <div className="mb-8 flex items-center gap-3">
                    <h2 className="text-lg font-semibold text-foreground">{'Цены на УПД'}</h2>
                    <div className="h-px flex-1 bg-border" />
                </div>

                <div className="grid gap-4 lg:grid-cols-5">
                    {/* UPD Cards */}
                    <UPDCards></UPDCards>

                    {/* Info panel */}
                    <UpdInfoPanel></UpdInfoPanel>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border bg-card/50 px-6 py-5">
                <div className="mx-auto flex max-w-4xl items-center justify-between">
                    <span className="text-xs text-muted-foreground/50 font-mono">
                        {'Точка Маркировки 2026'}
                    </span>
                    <div className="flex items-center gap-4">
                        <Link
                            to="/terms"
                            className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                            Условия
                        </Link>
                        <Link
                            to="/privacy"
                            className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                            Конфиденциальность
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export const Component = HomePage;
