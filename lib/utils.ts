/**
 * Utility Functions
 * 
 * Common utility functions used throughout the application.
 * Primarily for className merging and conditional styling.
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges and deduplicates Tailwind CSS class names
 * 
 * Combines clsx for conditional class logic with twMerge for
 * Tailwind class deduplication (e.g., 'p-2 p-4' becomes 'p-4')
 * 
 * @param inputs - Variable number of class values (strings, objects, arrays)
 * @returns Merged and deduplicated class string
 * 
 * @example
 * cn('p-2', 'p-4', { 'bg-blue-500': true }) // Returns 'p-4 bg-blue-500'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
