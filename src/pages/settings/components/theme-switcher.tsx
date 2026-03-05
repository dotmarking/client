import { cn } from '@/shared/lib/utils';
import { themeManager, THEMES } from '../lib/theme-manager';

export function ThemeSwitcher() {
    return (
        <div className="grid grid-cols-3 gap-3">
            {THEMES.map((theme) => (
                <button
                    onClick={() => themeManager.setGeneralTheme('dark')}
                    key={theme.id}
                    type="button"
                    className={cn(
                        'flex flex-col items-center gap-2 rounded-lg border p-4 transition-colors',
                        theme.active
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/30',
                    )}>
                    <div className={cn('h-16 w-full rounded-md border border-border', theme.bg)} />
                    <span className="text-xs text-foreground">{theme.label}</span>
                </button>
            ))}
        </div>
    );
}
