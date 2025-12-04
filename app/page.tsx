"use client";
import { DataTable } from "@/components/ui/datatable";
import data from "@/json/sales-orders.json";
import { columns, SalesOrderType } from "./columns";

const salesOrders = data as SalesOrderType[];
export default function Page() {
  return (
    <div className="flex-1 h-full">
      <DataTable data={salesOrders} columns={columns} />
    </div>
  );
}
