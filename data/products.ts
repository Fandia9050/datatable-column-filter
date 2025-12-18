export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating?: number;
  description?: string;
  tags?: string[];
  createdAt: string; // ISO date string
};

/**
 * Generate a single product. Accepts optional overrides to customize fields.
 */
export function generateProduct(
  index = 0,
  overrides: Partial<Product> = {}
): Product {
  const categories = [
    "Electronics",
    "Books",
    "Home",
    "Garden",
    "Toys",
    "Clothing",
    "Sports",
  ];
  const adjectives = [
    "Portable",
    "Advanced",
    "Compact",
    "Eco",
    "Premium",
    "Classic",
    "Smart",
  ];
  const items = [
    "Speaker",
    "Lamp",
    "Mixer",
    "Watch",
    "Backpack",
    "Headphones",
    "Knife",
  ];

  const rnd = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const rndFloat = (min: number, max: number, decimals = 2) =>
    Math.round((Math.random() * (max - min) + min) * 10 ** decimals) /
    10 ** decimals;

  const category = categories[index % categories.length];
  const name = `${adjectives[index % adjectives.length]} ${
    items[index % items.length]
  }`;
  const price = rndFloat(5, 999, 2);
  const stock = rnd(0, 500);
  const rating = Math.random() < 0.8 ? rndFloat(1, 5, 1) : undefined;
  const description = `A ${name.toLowerCase()} in the ${category.toLowerCase()} category.`;
  const tags = [category.toLowerCase(), name.split(" ")[1].toLowerCase()];

  const daysAgo = rnd(0, 365);
  const createdAt = new Date(
    Date.now() - daysAgo * 24 * 60 * 60 * 1000
  ).toISOString();

  const base: Product = {
    id: `prod-${index + 1}`,
    name,
    category,
    price,
    stock,
    rating,
    description,
    tags,
    createdAt,
  };

  return { ...base, ...overrides };
}

/**
 * Generate an array of products.
 * - count: number of products to generate (default 50)
 * - startIndex: index offset for deterministic ids/names (default 0)
 * - itemOverrides: optional function to provide overrides per item
 */
export function generateProducts(
  count = 50,
  startIndex = 0,
  itemOverrides?: (i: number) => Partial<Product>
): Product[] {
  const list: Product[] = [];
  for (let i = 0; i < count; i++) {
    const overrides = itemOverrides ? itemOverrides(i + startIndex) : {};
    list.push(generateProduct(i + startIndex, overrides));
  }
  return list;
}

export default generateProducts;
