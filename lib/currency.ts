export function currencyFormatter(nominal: number) {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(nominal);
}
