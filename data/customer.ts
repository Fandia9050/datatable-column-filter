import { Customer, CustomerStatus } from "@/type/customer";
import { faker } from "@faker-js/faker";

const STATUSES = Object.values(CustomerStatus);

export function generateCustomer(count: number = 200): Customer[] {
  const customers: Customer[] = [];

  for (let i = 0; i < count; i++) {
    const statusIndex = i % 3; // Cycle through statuses
    const orders = faker.number.int({ min: 0, max: 150 });

    const customer = {
      id: faker.string.uuid(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      company: faker.company.name(),
      status: STATUSES[statusIndex],
      country: faker.location.country(),
      date_joined: faker.date.past({ years: 3 }),
      total_orders: orders,
    };

    customers.push(customer);
  }

  return customers;
}
