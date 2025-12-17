"use client";
import CustomerDatatable from "@/components/organism/datatable/CustomerDatatable";
import { generateCustomer } from "@/data/customer";
import { usePaginationSearchParams } from "@/hooks/search-params.pagination";
import { useColumnFilters } from "@/hooks/use-filter-with-search-params";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { CustomerColumns } from "./columns";
import { useTableStates } from "@/hooks/useTableStates";

const customers = generateCustomer(500);

export default function Page() {
  const [columnFilters, setColumnFilters] = useColumnFilters();
  const [pagination, setPagination] = usePaginationSearchParams();

  const table = useReactTable({
    data: customers,
    columns: CustomerColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    state: {
      columnFilters: columnFilters,
      pagination,
    },
  });

  return <CustomerDatatable table={table} columns={CustomerColumns} />;
}
