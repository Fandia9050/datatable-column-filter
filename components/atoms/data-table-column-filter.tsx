import { Column } from "@tanstack/react-table";
import { DatePicker } from "../ui/date-picker";
import { Input } from "../ui/input";
import { NativeSelect, NativeSelectOption } from "../ui/native-select";

export type FilterVariant = "range" | "select" | "date-range" | "text";

type ColumnFilterProps<TData> = {
  column: Column<TData, unknown> & {
    columnDef: {
      meta?: ColumnMeta<TData>;
    };
  };
};

export type ColumnMeta<TData> = {
  filterVariant?: FilterVariant;
  options?: string[]; // only used for select
};

export function ColumnFilter<TData>({ column }: ColumnFilterProps<TData>) {
  const columnMeta = column.columnDef.meta;
  const filterVariant = columnMeta?.filterVariant;

  console.log(columnMeta, "filterVariant");

  if (!column.getCanFilter()) return null;

  const filterValue = column.getFilterValue();

  if (filterVariant === "range") {
    // const [min, max] = filterValue ?? [undefined, undefined];
    return (
      <div className="flex gap-2">
        <Input
          type="number"
          //   min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          //   max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          //   value={min ?? ""}
          onChange={(e) =>
            column.setFilterValue((old: [number, number]) => [
              e.target.value,
              old?.[1],
            ])
          }
          placeholder="Min"
        />
        <Input
          type="number"
          //   min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          //   max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          //   value={max ?? ""}
          onChange={(e) =>
            column.setFilterValue((old: [number, number]) => [
              old?.[0],
              e.target.value,
            ])
          }
          placeholder="Max"
        />
      </div>
    );
  }

  if (filterVariant === "select") {
    return (
      <NativeSelect>
        <NativeSelectOption value="">All</NativeSelectOption>
        {columnMeta?.options?.map((option: string) => (
          <NativeSelectOption key={option} value={option}>
            {option}
          </NativeSelectOption>
        ))}
      </NativeSelect>
    );
  }

  if (filterVariant === "date-range") {
    return <DatePicker />;
  }

  return (
    <Input
      value={(filterValue ?? "") as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder="Filter..."
    />
  );
}
