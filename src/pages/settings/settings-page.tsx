import { Button } from '@/shared/components/ui/button';
import { Separator } from '@/shared/components/ui/separator';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import { tabs } from './constants/tabs';
import { useState } from 'react';
import { cn } from '@/shared/lib/utils';
import { Label } from '@/shared/components/ui/label';
import { Input } from '@/shared/components/ui/input';
import { ThemeSwitcher } from './components/theme-switcher';
import { AccentSwitcher } from './components/accent-switcher';

function SettingsPage() {
    const [activeTab, setActiveTab] = useState('general');

    return (
        <div className="h-screen bg-background flex flex-col">
            {/* Top Header */}
            <header className="flex items-center justify-between border-b border-border bg-card px-6 py-3">
                <div className="flex items-center gap-4">
                    <Link to="/">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="gap-1.5 text-muted-foreground hover:text-foreground">
                            <ArrowLeft className="h-4 w-4" />
                            Назад
                        </Button>
                    </Link>
                    <Separator orientation="vertical" className="h-5" />
                    <div className="flex items-center gap-2">
                        <h1 className="text-sm font-semibold text-foreground">Настройки</h1>
                    </div>
                </div>
            </header>

            {/* Horizontal Tabs */}
            <div className="border-b border-border bg-card px-6">
                <nav className="flex gap-0.5" aria-label="Settings tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.value}
                            type="button"
                            onClick={() => setActiveTab(tab.value)}
                            className={cn(
                                'flex items-center gap-1.5 border-b-2 px-3 py-2.5 text-xs font-medium transition-colors',
                                activeTab === tab.value
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground',
                            )}>
                            <tab.icon className="h-3.5 w-3.5" />
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <div className="mx-auto max-w-2xl">
                    {/* General Tab */}
                    {activeTab === 'general' && (
                        <div>
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-foreground">
                                    Основные настройки
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    Управляй своим аккаунтом и настройками
                                </p>
                            </div>

                            <section className="rounded-lg border border-border bg-card p-5">
                                <h4 className="mb-4 text-sm font-medium text-foreground">
                                    Рабочий профиль
                                </h4>
                                <div className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <Label className="text-xs text-muted-foreground">
                                                Фамилия
                                            </Label>
                                            <Input
                                                defaultValue="Иванов"
                                                className="h-9 bg-secondary text-sm"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <Label className="text-xs text-muted-foreground">
                                                Имя
                                            </Label>
                                            <Input
                                                defaultValue="Иван"
                                                className="h-9 bg-secondary text-sm"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <Label className="text-xs text-muted-foreground">
                                                Отчество
                                            </Label>
                                            <Input
                                                defaultValue="Иванович"
                                                className="h-9 bg-secondary text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {/* Security Tab */}
                    {activeTab === 'security' && (
                        <div>
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-foreground">
                                    Безопасность
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    Управляйте аутентификацией и контролем доступа
                                </p>
                            </div>
                            <section className="rounded-lg border border-border bg-card p-5">
                                <h4 className="mb-4 text-sm font-medium text-foreground">Пароль</h4>
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-1.5">
                                        <Label className="text-xs text-muted-foreground">
                                            Текущий пароль
                                        </Label>
                                        <Input
                                            type="password"
                                            className="h-9 bg-secondary text-sm"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <Label className="text-xs text-muted-foreground">
                                                Новый пароль
                                            </Label>
                                            <Input
                                                type="password"
                                                className="h-9 bg-secondary text-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <Label className="text-xs text-muted-foreground">
                                                Подтвердите пароль
                                            </Label>
                                            <Input
                                                type="password"
                                                className="h-9 bg-secondary text-sm"
                                            />
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-fit text-xs bg-transparent">
                                        Обновить пароль
                                    </Button>
                                </div>
                            </section>
                        </div>
                    )}

                    {/* Appearance Tab */}
                    {activeTab === 'appearance' && (
                        <div>
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-foreground">
                                    Внешний вид
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    Настройте внешний вид вашего рабочего пространства
                                </p>
                            </div>
                            <section className="rounded-lg border border-border bg-card p-5">
                                <h4 className="mb-4 text-sm font-medium text-foreground">Тема</h4>
                                <ThemeSwitcher></ThemeSwitcher>
                            </section>
                            <section className="mt-4 rounded-lg border border-border bg-card p-5">
                                <h4 className="mb-4 text-sm font-medium text-foreground">
                                    Цветовой акцент
                                </h4>
                                <AccentSwitcher></AccentSwitcher>
                            </section>
                        </div>
                    )}

                    {activeTab === 'integrations' && (
                        <div>
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-foreground">
                                    Интеграции
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    Подключите внешние сервисы
                                </p>
                            </div>
                            <section className="rounded-lg border border-border bg-card p-5">
                                <div className="mb-4 flex items-center justify-between">
                                    <h4 className="text-sm font-medium text-foreground">
                                        Активные интеграции
                                    </h4>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="gap-1.5 text-xs bg-transparent">
                                        <Plus className="h-3.5 w-3.5" />
                                        Добавить интеграцию
                                    </Button>
                                </div>
                                <div className="flex flex-col gap-2"></div>
                            </section>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export const Component = SettingsPage;
