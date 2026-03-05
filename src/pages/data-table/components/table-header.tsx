import { Button } from '@/shared/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TableHeader() {
    return (
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <div className="flex items-center gap-3">
                <h2 className="text-sm font-medium text-foreground">Все документы</h2>
                <span className="text-xs text-muted-foreground">0 записей</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span>Страница 1 из 1</span>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-muted-foreground"
                    disabled>
                    <ChevronLeft className="h-3.5 w-3.5" />
                    <span className="sr-only">Previous page</span>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-muted-foreground"
                    disabled>
                    <ChevronRight className="h-3.5 w-3.5" />
                    <span className="sr-only">Next page</span>
                </Button>
            </div>
        </div>
    );
}
