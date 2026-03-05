import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui/button';
import { Check } from 'lucide-react';
import { SUBSCRIPTION_TARIFS } from '../constants/subscription-tarifs';

export function SubscriptionCards() {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            {SUBSCRIPTION_TARIFS.map((item) => (
                <div
                    className={cn(
                        'relative flex flex-col rounded-lg border p-6 transition-colors',
                        item.highlighted
                            ? 'border-accent/40 bg-accent/[0.03]'
                            : 'border-border bg-card',
                    )}>
                    {item.badge && (
                        <div className="absolute -top-3 left-5">
                            <span className="rounded-md bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                                {item.badge}
                            </span>
                        </div>
                    )}

                    <div className="mb-5">
                        <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                            {item.description}
                        </p>
                    </div>

                    <div className="mb-5 flex items-baseline gap-1">
                        <span className="text-3xl font-bold tracking-tight text-foreground">
                            {item.price}
                        </span>
                        {item.period && (
                            <span className="text-sm text-muted-foreground">{item.period}</span>
                        )}
                    </div>

                    <ul className="mb-6 flex flex-1 flex-col gap-2.5">
                        {item.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm">
                                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                                <span className="text-muted-foreground leading-relaxed">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <Button
                        className={cn(
                            'w-full h-10',
                            item.highlighted
                                ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                        )}>
                        Выбрать
                    </Button>
                </div>
            ))}
        </div>
    );
}
