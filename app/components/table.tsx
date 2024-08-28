import React from 'react';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    ColumnDef,
} from '@tanstack/react-table';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ProgramStudi = {
    programStudi: string;
    jenjang: string;
    akreditasi: string;
    suratKeputusan: string;
};

const columnHelper = createColumnHelper<ProgramStudi>();

const columns: ColumnDef<ProgramStudi, any>[] = [
    columnHelper.accessor('programStudi', {
        header: 'Program Studi',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('jenjang', {
        header: 'Jenjang',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('akreditasi', {
        header: 'Akreditasi',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('suratKeputusan', {
        header: 'Surat Keputusan',
        cell: info => info.getValue(),
    }),
    columnHelper.display({
        id: 'actions',
        cell: () => (
            <button className="p-1 bg-gray-100 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            </button>
        ),
    }),
];

const data: ProgramStudi[] = [
    {
        programStudi: 'Ultrices Imperdiet Sed',
        jenjang: 'Sarjana',
        akreditasi: 'Lorem Ipsum',
        suratKeputusan: 'XXX/SK/LAM-INFOKOM/Ak/S/XXX/2023',
    },
    {
        programStudi: 'Ultrices Imperdiet Sed',
        jenjang: 'Sarjana',
        akreditasi: 'Lorem Ipsum',
        suratKeputusan: 'XXX/SK/LAM-INFOKOM/Ak/S/XXX/2023',
    },
    {
        programStudi: 'Ultrices Imperdiet Sed',
        jenjang: 'Sarjana',
        akreditasi: 'Lorem Ipsum',
        suratKeputusan: 'XXX/SK/LAM-INFOKOM/Ak/S/XXX/2023',
    },
    {
        programStudi: 'Ultrices Imperdiet Sed',
        jenjang: 'Sarjana',
        akreditasi: 'Lorem Ipsum',
        suratKeputusan: 'XXX/SK/LAM-INFOKOM/Ak/S/XXX/2023',
    },
    // ... add more data items here
];

export default function ProgramStudiTable() {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
                <thead className="bg-usu-dark-green bg-opacity-10 ">
                    { table.getHeaderGroups().map(headerGroup => (
                        <tr className='text-usu-dark-green' key={ headerGroup.id }>
                            { headerGroup.headers.map(header => (
                                <th key={ header.id } className="px-6 py-3 text-left text-xs text-usu-dark-green font-semibold uppercase tracking-wider">
                                    { header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        ) }
                                </th>
                            )) }
                        </tr>
                    )) }
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    { table.getRowModel().rows.map(row => (
                        <tr key={ row.id }>
                            { row.getVisibleCells().map(cell => (
                                <td key={ cell.id } className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    { flexRender(cell.column.columnDef.cell, cell.getContext()) }
                                </td>
                            )) }
                        </tr>
                    )) }
                </tbody>
            </table>
            <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
                <div className="flex justify-between flex-1 sm:hidden">
                    <button
                        onClick={ () => table.previousPage() }
                        disabled={ !table.getCanPreviousPage() }
                        className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={ () => table.nextPage() }
                        disabled={ !table.getCanNextPage() }
                        className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing{ ' ' }
                            <span className="font-medium">{ table.getState().pagination.pageIndex + 1 }</span> of{ ' ' }
                            <span className="font-medium">{ table.getPageCount() }</span> pages
                        </p>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <button
                                onClick={ () => table.previousPage() }
                                disabled={ !table.getCanPreviousPage() }
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <button
                                onClick={ () => table.nextPage() }
                                disabled={ !table.getCanNextPage() }
                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRight className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}