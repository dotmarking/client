import type { LucideIcon } from 'lucide-react';

export interface SidebarSection {
    id: string;
    label: string;
    icon: React.ReactNode;
    items: SidebarItem[];
}

export interface SidebarItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    href?: string;
    count?: number;
}
