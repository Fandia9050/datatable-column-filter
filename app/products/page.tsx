"use client";
import CustomerDatatable from "@/components/organism/datatable/CustomerDatatable";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import generateProducts, { Product } from "@/data/products";
import { currencyFormatter, dateFormatter } from "@/lib/currency";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { parseAsString, useQueryStates } from "nuqs";
import { useMemo } from "react";

const products = generateProducts(1000);

export default function Page() {
  const [filters, setFilters] = useQueryStates(
    {
      name: parseAsString.withDefault(""),
    },
    { history: "replace" }
  );

  // const columnsFilters = Object.values(filters).map((itemFilter) => ({
  //   id: "name",
  //   value: itemFilter,
  // }));

  const columns: ColumnDef<Product>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Product Name",
        cell: ({ row }) => {
          return <p className="pl-5">{row.getValue("name")}</p>;
        },
        filterFn: "includesString",
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => {
          return <p>{row.getValue("category")}</p>;
        },
        filterFn: "includesString",
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => {
          return <p>{currencyFormatter(row.original.price)}</p>;
        },
        filterFn: "includesString",
      },
      {
        accessorKey: "stock",
        header: "Stock",
        cell: ({ row }) => {
          return <p>{row.getValue("stock")}</p>;
        },
        filterFn: "includesString",
      },
      {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => {
          return <p>{row.getValue("description")}</p>;
        },
        filterFn: "includesString",
      },
      {
        accessorKey: "tags",
        header: "Tags",
        cell: ({ row }) => {
          const tags = row.original.tags ?? [];
          return (
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          );
        },
        filterFn: "includesString",
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ row }) => {
          return <p>{dateFormatter(row.getValue("createdAt"))}</p>;
        },
        filterFn: "includesString",
      },
    ],
    []
  );

  const table = useReactTable({
    data: products,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // onColumnFiltersChange: setFilters,
    // onPaginationChange: setPagination,
    // state: { columnFilters: columnsFilters },
  });

  return (
    <div>
      <Input onChange={(e) => setFilters({ name: e.target.value })} />
      <CustomerDatatable columns={columns} table={table} />
    </div>
  );
}
