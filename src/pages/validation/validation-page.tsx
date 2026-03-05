import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Separator } from '@/shared/components/ui/separator';
import { cn } from '@/shared/lib/utils';
import { ArrowLeft, Upload } from 'lucide-react';
import { useCallback, useState } from 'react';
import { Link } from 'react-router';

function ValidationPage() {
    const [file, setFile] = useState();
    const [code, setCode] = useState('');
    const [isDragOver, setIsDragOver] = useState(false);

    const handleDragLeave = useCallback(() => {
        setIsDragOver(false);
    }, []);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    }, []);

    return (
        <div className="h-screen bg-background flex flex-col">
            {/* Top Header */}
            <header className="flex items-center justify-between border-b border-border bg-card px-6 py-3">
                <div className="flex items-center gap-4">
                    <Link to="/">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="gap-1.5 text-muted-foreground hover:text-foreground">
                            <ArrowLeft className="h-4 w-4" />
                            Назад
                        </Button>
                    </Link>
                    <Separator orientation="vertical" className="h-5" />
                    <div className="flex items-center gap-2">
                        <h1 className="text-sm font-semibold text-foreground">Валидация</h1>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Left Column: Upload & Manual Check */}
                <div className="flex w-96 flex-shrink-0 flex-col border-r border-border">
                    <div className="flex-1 overflow-y-auto p-5">
                        <div className="flex flex-col gap-5">
                            {/* Upload Zone */}
                            <div>
                                <h3 className="mb-3 text-sm font-medium text-foreground">
                                    Загрузить файл
                                </h3>
                                <div
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    className={cn(
                                        'flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed p-8 transition-all',
                                        isDragOver
                                            ? 'border-primary bg-primary/5 text-primary'
                                            : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground',
                                    )}>
                                    <div
                                        className={cn(
                                            'flex h-12 w-12 items-center justify-center rounded-full transition-colors',
                                            isDragOver ? 'bg-primary/10' : 'bg-secondary',
                                        )}>
                                        <Upload className="h-5 w-5" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-medium">Положите файл сюда</p>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            XLSX c кодами маркировки
                                        </p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="mt-1 bg-transparent">
                                        Выбрать файл
                                    </Button>
                                </div>
                            </div>

                            <Separator />

                            {/* Manual Code Check */}
                            <div>
                                <h3 className="mb-3 text-sm font-medium text-foreground">
                                    Проверить Код
                                </h3>
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Введите код маркировки..."
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        className="h-9 flex-1 bg-secondary text-sm"
                                    />
                                    <Button
                                        size="sm"
                                        className="h-9 bg-primary text-primary-foreground hover:bg-primary/90">
                                        Проверить
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Results Table */}
                <div className="flex flex-1 flex-col overflow-hidden">
                    {/* Results Header */}
                    <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                        <h2 className="text-sm font-medium text-foreground">Validation Results</h2>
                    </div>
                    <table className="w-full">
                        <thead className="sticky top-0 z-10 bg-card">
                            <tr className="border-b border-border">
                                <th className="w-16 px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    Line
                                </th>
                                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    Code
                                </th>
                                <th className="w-28 px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    Status
                                </th>
                                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    Message
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
}

export const Component = ValidationPage;
