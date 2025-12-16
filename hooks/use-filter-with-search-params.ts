import { ColumnDef } from "@tanstack/react-table";
import { useQueryStates } from "nuqs";

interface Props<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
}

export function useFilterWithSearchParams<TData, TValue>({
  columns,
}: Props<TData, TValue>) {
  console.log(
    "columns",
    columns.map((col) => col.id)
  );
  const [filters, setFilters] = useQueryStates({});

  return {
    filters,
    setFilters,
  };
}
