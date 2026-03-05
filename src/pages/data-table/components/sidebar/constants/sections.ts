import { Table, FileText } from 'lucide-react';
import type { SidebarSection } from '../sidebar-interface';

export const SECTIONS: SidebarSection[] = [
    {
        id: 'dataTable',
        label: 'Таблица с данными',
        icon: '',
        items: [{ id: 'documents', label: 'Документы', icon: '' }],
    },
];
