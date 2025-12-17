// hooks/useTableStates.ts
import {
  useQueryStates,
  parseAsInteger,
  parseAsString,
  parseAsJson,
} from "nuqs";
import { ColumnFiltersState } from "@tanstack/react-table";

export const useTableStates = () => {
  return useQueryStates(
    {
      // Filter kolom disimpan sebagai JSON di URL
      filters: parseAsJson<ColumnFiltersState>(
        (val) => val as ColumnFiltersState
      ).withDefault([]),
      page: parseAsInteger.withDefault(1),
      q: parseAsString.withDefault(""), // Global search (opsional)
    },
    {
      shallow: false,
      history: "replace", // Bagus untuk filter agar history browser tidak penuh
    }
  );
};
