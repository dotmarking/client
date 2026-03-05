import { Checkbox } from '@/shared/components/ui/checkbox';
import { cn } from '@/shared/lib/utils';
import { ArrowUpDown } from 'lucide-react';

const columns = [
    { key: 'id', label: 'ID', width: 'w-24' },
    { key: 'document', label: 'Document', width: 'flex-1' },
    { key: 'markingCode', label: 'Marking Code', width: 'w-38' },
    { key: 'category', label: 'Category', width: 'w-28' },
    { key: 'status', label: 'Status', width: 'w-24' },
    { key: 'modified', label: 'Modified', width: 'w-28' },
    { key: 'size', label: 'Size', width: 'w-20' },
];

export function TableBody() {
    return (
        <div className="flex-1 overflow-auto">
            <table className="w-full min-w-[800px]">
                <thead className="sticky top-0 z-10 bg-card">
                    <tr className="border-b border-border">
                        <th className="w-10 px-4 py-2.5">
                            <Checkbox checked={false} aria-label="Select all rows" />
                        </th>
                        {columns.map((col) => (
                            <th key={col.key} className={cn('px-3 py-2.5 text-left', col.width)}>
                                <button
                                    type="button"
                                    className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
                                    {col.label}
                                    <ArrowUpDown size={16} />
                                </button>
                            </th>
                        ))}
                        <th className="w-10 px-3 py-2.5" />
                    </tr>
                </thead>
            </table>
        </div>
    );
}
