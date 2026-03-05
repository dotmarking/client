import { cn } from '@/shared/lib/utils';
import { ACCENT_COLOR, themeManager } from '../lib/theme-manager';
import { useState } from 'react';

export function AccentSwitcher() {
    const [activeAccent, setAcctiveAccent] = useState(themeManager.getCurrentSettings().accent);

    return (
        <div className="flex gap-3">
            {ACCENT_COLOR.map((accent, i) => (
                <button
                    key={i}
                    type="button"
                    onClick={() => {
                        (themeManager.setAccent(accent.id), setAcctiveAccent(accent.id));
                    }}
                    className={cn(
                        'h-8 w-8 rounded-full transition-all',
                        accent.color,
                        accent.id === activeAccent
                            ? 'ring-2 ring-foreground ring-offset-2 ring-offset-background'
                            : 'hover:scale-110',
                    )}>
                    <span className="sr-only">Accent color</span>
                </button>
            ))}
        </div>
    );
}
