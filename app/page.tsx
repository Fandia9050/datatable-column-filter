"use client";
import { DataTable } from "@/components/ui/datatable";
import data from "@/json/sales-orders.json";
import { ColumnFiltersState } from "@tanstack/react-table";
import { useState } from "react";
import { columns, SalesOrderType } from "./columns";

const salesOrders = data as SalesOrderType[];
export default function Page() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  return (
    <div className="flex-1 h-full">
      <DataTable
        data={salesOrders}
        columns={columns}
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
    </div>
  );
}
