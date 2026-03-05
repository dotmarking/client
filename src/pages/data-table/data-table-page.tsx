import { Sidebar } from './components/sidebar/sidebar';
import { Table } from './components/table';

function DataTable() {
    return (
        <div className="flex h-screen w-screen overflow-hidden bg-background">
            <Sidebar></Sidebar>
            <Table></Table>
        </div>
    );
}

export const Component = DataTable;
