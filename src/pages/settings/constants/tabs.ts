import { Globe, Palette, Shield, User } from 'lucide-react';

export const tabs = [
    {
        value: 'general',
        icon: User,
        label: 'Основные',
    },
    {
        value: 'security',
        icon: Shield,
        label: 'Безопасность',
    },
    {
        value: 'appearance',
        icon: Palette,
        label: 'Внешний вид',
    },
    {
        value: 'integrations',
        icon: Globe,
        label: 'Интеграции',
    },
];
