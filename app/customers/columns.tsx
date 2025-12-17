import { currencyFormatter } from "@/lib/currency";
import { Customer, CustomerStatus } from "@/type/customer";
import { ColumnDef } from "@tanstack/react-table";

export const CustomerColumns: ColumnDef<Customer>[] = [
  {
    accessorKey: "first_name",
    header: "First Name",
    cell: ({ row }) => {
      return <p className="pl-5">{row.getValue("first_name")}</p>;
    },
    filterFn: "includesString",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
    cell: ({ row }) => {
      return <p>{row.getValue("last_name")}</p>;
    },
    filterFn: "includesString",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return <p>{row.getValue("email")}</p>;
    },
    filterFn: "includesString",
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => {
      return <p>{row.getValue("phone")}</p>;
    },
    filterFn: "inNumberRange",
  },
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => {
      return <p>{row.getValue("company")}</p>;
    },
    filterFn: "inNumberRange",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <p>{row.getValue("status")}</p>;
    },
    filterFn: "equalsString",
    meta: {
      filterVariant: "select",
      options: Object.values(CustomerStatus),
    },
  },
  {
    accessorKey: "total_orders",
    header: "Total Orders",
    cell: ({ row }) => {
      const totalOrders = row.getValue("total_orders") as number;
      return <p>{currencyFormatter(totalOrders)}</p>;
    },
  },
];
