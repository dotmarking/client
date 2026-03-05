import { useState } from 'react';
import { getRandomQuote } from '@/pages/login/utils/random-quote';

export function Quote() {
    const [quote] = useState(getRandomQuote());

    return (
        <div className="p-5 rounded-xl bg-secondary/50 border border-border/50">
            <p className="text-sm text-muted-foreground leading-relaxed">
                {'"'}
                {quote.text}
                {'"'}
            </p>
            <p className="text-xs text-muted-foreground/60 mt-3">-- {quote.author}</p>
        </div>
    );
}
