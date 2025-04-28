import { z } from 'zod'
import { formatNumberWithDecimal } from './utils'

// Common Price validator
const Price = (field: string) =>
  z.coerce
    .number()
    .refine(
      (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
      `${field} must have exactly two decimal places (e.g., 49.99)`
    )
export const ProductInputSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  category: z.string().min(1, 'Category is required'),
  images: z.array(z.string()).min(1, 'Product must have at least one image'),
  brand: z.string().min(1, 'Brand is required'),
  description: z.string().min(1, 'Description is required'),
  isPublished: z.boolean(),
  price: Price('Price'),
  listPrice: Price('List price'),
  countInStock: z.coerce
    .number()
    .int()
    .nonnegative('count in stock must be a non-negative number'),
  tags: z.array(z.string()).default([]),
  sizes: z.array(z.string()).default([]),
  colors: z.array(z.string()).default([]),
  avgRating: z.coerce
    .number()
    .min(0, 'Average rating must be at least 0')
    .max(5, 'Average rating must be at most 5'),
  numReviews: z.coerce
    .number()
    .int()
    .nonnegative('Number of reviews must be a non-negative number'),
  ratingDistribution: z
    .array(z.object({ rating: z.number(), count: z.number() }))
    .max(5),
  reviews: z.array(z.string()).default([]),
  numSales: z.coerce
    .number()
    .int()
    .nonnegative('Number of sales must be a non-negative number'),
})


// here we are creating a schema for the product input
// we are using the zod library to create a schema for the product input
// we are using the z.coerce.number() to coerce the price to a number
// we are using the z.refine() to refine the price to have exactly two decimal places
// we are using the z.object() to create a schema for the product input
// we are using the z.string().min(3, 'Name must be at least 3 characters') to create a schema for the name
// we are using the z.string().min(3, 'Slug must be at least 3 characters') to create a schema for the slug
// we are using the z.string().min(1, 'Category is required') to create a schema for the category
// we are using the z.array(z.string()).min(1, 'Product must have at least one image') to create a schema for the images
// we are using the z.string().min(1, 'Brand is required') to create a schema for the brand
// we are using the z.string().min(1, 'Description is required') to create a schema for the description


