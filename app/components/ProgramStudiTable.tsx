import React, { useState } from 'react';
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
    id: number;
    programStudi: string;
    faculty: string;
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

interface ProgramStudiTableProps {
    data: ProgramStudi[];
}

export default function ProgramStudiTable({ data }: ProgramStudiTableProps) {
    const [pagination, setPagination] = useState({
        pageIndex: 0, //initial page index
        pageSize: 20, //default page size
    });

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination, //update the pagination state when internal APIs mutate the pagination state
        state: {
            pagination,
        },
    });

    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSize = Number(event.target.value);
        setPagination(prev => ({
            ...prev,
            pageSize: newSize,
        }));
        table.setPageSize(newSize); // set the new page size in the table
    };

    const totalPages = Math.ceil(data.length / pagination.pageSize);

    const renderPageNumbers = () => {
        const pageNumbers = [];

        // Add previous page arrow
        pageNumbers.push(
            <li key="prev" className={ `${table.getCanPreviousPage() ? 'cursor-pointer text-[#8FA0B1] hover:text-black' : 'text-[#8FA0B1]'}` } onClick={ () => table.previousPage() }>
                { "<" }
            </li>
        );

        for (let i = 0; i < totalPages; i++) {
            if (i < 3 || i === pagination.pageIndex || i >= totalPages - 1) {
                pageNumbers.push(
                    <li
                        key={ i }
                        onClick={ () => table.setPageIndex(i) }
                        className={ `cursor-pointer ${pagination.pageIndex === i ? 'font-semibold text-black' : 'text-[#8FA0B1] hover:text-black'}` }
                    >
                        { i + 1 }
                    </li>
                );
            } else if (i === 3 && pagination.pageIndex > 3) {
                pageNumbers.push(
                    <li
                        key="ellipsis1"
                        className='text-[#8FA0B1] hover:text-black'
                        onClick={ () => table.setPageIndex(pagination.pageIndex - 2) }
                    >...</li>);
            } else if (i === totalPages - 2 && pagination.pageIndex < totalPages - 4) {
                pageNumbers.push(
                    <li
                        key="ellipsis2"
                        className='text-[#8FA0B2] hover:text-black'
                        onClick={ () => table.setPageIndex(pagination.pageIndex + 2) }
                    >...</li>);
            }
        }

        // Add next page arrow
        pageNumbers.push(
            <li key="next" className={ `${table.getCanNextPage() ? 'cursor-pointer' : 'text-[#8FA0B1] hover:text-black'}` } onClick={ () => table.nextPage() }>
                { ">" }
            </li>
        );

        return pageNumbers;
    };


    return (
        <div className="overflow-x-auto">
            <div className="rounded-lg overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-usu-dark-green bg-opacity-10 first:rounded-s-xl last:rounded-e-xl">
                        { table.getHeaderGroups().map(headerGroup => (
                            <tr className='text-usu-dark-green' key={ headerGroup.id }>
                                { headerGroup.headers.map(header => (
                                    <th key={ header.id } className="px-6 py-3 text-left text-sm text-usu-dark-green font-semibold tracking-wider">
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
                    <tbody className="bg-[#F8F8F8]">
                        { table.getRowModel().rows.map(row => (
                            <tr key={ row.id } className='hover:bg-white hover:text-black hover:font-semibold transition-opacity duration-500 ease-in-out opacity-0 delay-[${index * 100}ms]' style={ { opacity: 1 } }>
                                { row.getVisibleCells().map(cell => (
                                    <td key={ cell.id } className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                                        { flexRender(cell.column.columnDef.cell, cell.getContext()) }
                                    </td>
                                )) }
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
            <div className="block text-center sm:flex justify-between items-center mt-2">
                <div className=""></div>
                <div className="">
                    <ul className='inline-flex gap-4 font-semibold text-sm'>
                        { renderPageNumbers() }
                    </ul>
                </div>
                <div className="flex justify-center mt-2 sm:mt-0 gap-2 items-center">
                    <p>Tampilkan </p>
                    <select
                        name="pageSize"
                        id="pageSize"
                        className='bg-[#39A935] bg-opacity-30 px-3 py-2 rounded-md text-usu-dark-green'
                        value={ pagination.pageSize }
                        onChange={ handlePageSizeChange } // handle page size change
                    >
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
        </div>
    );
}