import { ChevronDown, ChevronRight, HelpCircle, Layers, Settings } from 'lucide-react';
import { SECTIONS } from './constants/sections';
import { useState } from 'react';
import { cn } from '@/shared/lib/utils';
import { Link } from 'react-router';

export function Sidebar() {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({
        documents: true,
    });

    const toggleSection = (id: string) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <aside className="flex h-full w-60 flex-shrink-0 flex-col border-r border-border bg-card">
            {/* Logo */}
            <div className="flex items-center gap-2.5 border-b border-border px-5 py-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                    <Layers className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-sm font-semibold tracking-tight text-foreground">
                    Точка Маркировки
                </span>
            </div>

            {/* Sections */}
            <nav className="flex-1 overflow-y-auto px-3 py-3" aria-label="Sidebar navigation">
                <div className="flex flex-col gap-1">
                    {SECTIONS.map((section) => (
                        <div key={section.id}>
                            <button
                                type="button"
                                onClick={() => toggleSection(section.id)}
                                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                                {section.icon}
                                <span className="flex-1 text-left">{section.label}</span>
                                {expanded[section.id] ? (
                                    <ChevronDown className="h-3.5 w-3.5" />
                                ) : (
                                    <ChevronRight className="h-3.5 w-3.5" />
                                )}
                            </button>
                            {expanded[section.id] && (
                                <div className="ml-2 mt-0.5 flex flex-col gap-0.5 border-l border-border pl-3">
                                    {section.items.map((item) => {
                                        const active = true;
                                        const content = (
                                            <>
                                                {item.icon}
                                                <span className="flex-1 text-left">
                                                    {item.label}
                                                </span>
                                                {item.count !== undefined && (
                                                    <span
                                                        className={cn(
                                                            'text-[10px] font-mono tabular-nums',
                                                            active
                                                                ? 'text-primary/70'
                                                                : 'text-muted-foreground/60',
                                                        )}>
                                                        {item.count}
                                                    </span>
                                                )}
                                            </>
                                        );

                                        const classes = cn(
                                            'flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors',
                                            active
                                                ? 'bg-primary/10 text-primary font-medium'
                                                : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                                        );

                                        if (item.href) {
                                            return (
                                                <Link
                                                    key={item.id}
                                                    to={item.href}
                                                    className={classes}>
                                                    {content}
                                                </Link>
                                            );
                                        }

                                        return (
                                            <button type="button" key={item.id} className={classes}>
                                                {content}
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </nav>

            {/* Footer */}
            <div className="border-t border-border px-3 py-3">
                <div className="flex flex-col gap-0.5">
                    <Link
                        to="/examples/settings"
                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                        <Settings className="h-3.5 w-3.5" />
                        <span>Настройки</span>
                    </Link>
                    <button
                        type="button"
                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                        <HelpCircle className="h-3.5 w-3.5" />
                        <span>Помощь</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
