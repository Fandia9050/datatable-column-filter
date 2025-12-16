export const CustomerStatus = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  PENDING: "pending",
} as const;

export type CustomerStatusType =
  (typeof CustomerStatus)[keyof typeof CustomerStatus];

export interface Customer {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  status: CustomerStatusType;
  country: string;
  date_joined: Date;
  total_orders: number;
}
