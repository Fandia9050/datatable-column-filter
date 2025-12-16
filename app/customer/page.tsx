"use client";
import { DataTable } from "@/components/ui/datatable";
import { generateCustomer } from "@/data/customer";
import { ColumnFiltersState } from "@tanstack/react-table";
import { useState } from "react";
import { CustomerColumns } from "./columns";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Page() {
  const customers = generateCustomer(500);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  return (
    <ScrollArea>
      <DataTable
        columns={CustomerColumns}
        data={customers}
        setColumnFilters={setColumnFilters}
        columnFilters={columnFilters}
      />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
