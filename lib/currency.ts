export function currencyFormatter(nominal: number) {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(nominal);
}

export function dateFormatter(dateString: string) {
  const date = new Date(dateString);
  return Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);
}
