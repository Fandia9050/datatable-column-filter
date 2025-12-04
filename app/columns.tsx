import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/currency";
import { ColumnDef } from "@tanstack/react-table";

export const PaymentMethod = {
  cash: "Cash",
  credit: "Credit Card",
  e_wallet: "E-Wallet",
  transfer: "Transfer",
} as const;

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];

export interface SalesOrderType {
  sales_id: string;
  date: string;
  customer_name: string;
  product: string;
  qty: number;
  price: number;
  payment_method: PaymentMethod;
  total: number;
}

export const columns: ColumnDef<SalesOrderType>[] = [
  {
    accessorKey: "sales_id",
    header: "Sales Number",
    cell: ({ row }) => {
      return <Button variant={"link"}>{row.getValue("sales_id")}</Button>;
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return <p>{row.getValue("date")}</p>;
    },
  },
  {
    accessorKey: "customer_name",
    header: "Customer Name",
    cell: ({ row }) => {
      return <p>{row.getValue("customer_name")}</p>;
    },
  },
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => {
      return <p>{row.getValue("product")}</p>;
    },
  },
  {
    accessorKey: "qty",
    header: "Quantity",
    cell: ({ row }) => {
      return <p>{row.getValue("qty")}</p>;
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = row.getValue("price") as number;
      return <p>{currencyFormatter(price)}</p>;
    },
  },
  {
    accessorKey: "payment_method",
    header: "Payment Method",
    cell: ({ row }) => {
      return <p>{row.getValue("payment_method")}</p>;
    },
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => {
      const total = row.getValue("total") as number;
      return <p>{currencyFormatter(total)}</p>;
    },
  },
];
