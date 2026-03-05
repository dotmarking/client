import { TableBody } from './table-body';
import { TableHeader } from './table-header';

export function Table() {
    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            {/* Table header info */}
            <TableHeader></TableHeader>
            <TableBody></TableBody>
        </div>
    );
}
