import { UNITS_CONFIG } from './config'
import type { UnitsType } from './interfaces'

/**
 * Converts values to meters
 * @param value - Input value
 * @param unit - Current unit
 */
export const convertToMeter = (value: number, unit: UnitsType): number =>
  value * UNITS_CONFIG[unit]

/**
 * Converts meters to inches
 * @param value - Value in meters
 */
export const metersToInches = (value: number): number => value * 39.37
