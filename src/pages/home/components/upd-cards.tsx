import { cn } from '@/shared/lib/utils';
import { FileText } from 'lucide-react';
import { UPD_TARIFS } from '../constants/upd-tarifs';

export function UPDCards() {
    return (
        <div className="lg:col-span-3 flex flex-col gap-2.5">
            {UPD_TARIFS.map((item: any, index: number) => (
                <div
                    key={index}
                    className={cn(
                        'group relative flex items-center justify-between rounded-lg border px-5 py-4 transition-all duration-200',
                        item.popular
                            ? 'border-accent/30 bg-accent/[0.04] hover:border-accent/50'
                            : 'border-border bg-card hover:border-border hover:bg-card/80',
                    )}>
                    <div className="flex items-center gap-4">
                        <div
                            className={cn(
                                'flex h-9 w-9 items-center justify-center rounded-md transition-colors',
                                item.popular
                                    ? 'bg-accent/10 text-accent'
                                    : 'bg-secondary text-muted-foreground group-hover:text-foreground',
                            )}>
                            <FileText className="h-4 w-4" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground">{item.range}</p>
                            {item.savings && (
                                <p className="mt-0.5 text-[11px] text-accent font-medium">
                                    {item.savings}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-lg font-bold tracking-tight text-foreground">
                            {item.pricePerDoc}
                        </span>
                        <p className="text-[11px] text-muted-foreground">за документ</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
