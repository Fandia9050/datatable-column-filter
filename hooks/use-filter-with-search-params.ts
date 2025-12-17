import { parseAsJson, useQueryState } from "nuqs";
import type { ColumnFiltersState } from "@tanstack/react-table";

// Parser untuk array column filters
const columnFiltersParser = parseAsJson<ColumnFiltersState>().withDefault([]); // default empty array

export function useColumnFilters() {
  return useQueryState(
    "filters", // nama param di URL
    columnFiltersParser
  );
}
