// This function takes a variable number of class values, merges them using `clsx` and `twMerge`,
// and returns a single string of class names. It helps in conditionally applying Tailwind CSS classes.

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
