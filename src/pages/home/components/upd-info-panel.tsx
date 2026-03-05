import { Button } from '@/shared/components/ui/button';
import { ArrowRight, Link } from 'lucide-react';

export function UpdInfoPanel() {
    return (
        <div className="lg:col-span-2 flex flex-col justify-between rounded-lg border border-border bg-card p-6">
            <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">
                    {'Как это работает?'}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Стоимость за документ определяется общим объёмом УПД. Чем больше документов вы
                    покупаете, тем ниже цена.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        'Передача Wildberries/OZON/Контрагентам',
                        'Купленные пакеты не сгорают',
                        'Контроль статусов кодов',
                        'Контроль ошибок в УПД',
                    ].map((text) => (
                        <div key={text} className="flex items-start gap-2.5">
                            <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                                {text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <Link to="/register" className="mt-6">
                <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90 h-10">
                    Начать работу
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </Link>
        </div>
    );
}
