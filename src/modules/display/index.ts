/**
 * Determines the pixel size from the density.
 * @param dpi - Dots per inch value.
 * @returns Pixel size in meters
 */
const pixelSize = (density: number): number => 0.0254 / density

/**
 * Determines the square of the number.
 * @param v - Input number.
 */
const square = (v: number) => Math.pow(v, 2)

/**
 * Determines the size of the sphere that is needed to fit the line
 * @param s - Line size.
 */
const sphereSize = (s: number): number => s * 2 * Math.PI

/**
 * Determines the arc minute size for a given size
 * @param v - Input value
 * @returns 
 */
const arcMinute = (v: number): number => v / 21600

/**
 * Calculates the pixel density of the display.
 * @param size - Display size in inches.
 * @param width - Number of pixels horizontally.
 * @param height  - Number of pixels vertically.
 */
export const calculateDPI = (
    size: number,
    width: number,
    height: number
): number => {
    console.log(size, width, height)
    return (
        Math.sqrt(square(width) + square(height)) / size
    ) || 0;
}

/**
 * Determines the visibility of pixels.
 * @param distance - Distance to display in meters.
 * @param density - Display DPI.
 * @returns If the value is negative,
 * then even a person with perfect eyesight cannot see individual pixels.
 */
export const calculateVisibilityFactor = (
    distance: number,
    density: number
): number => arcMinute(sphereSize(distance)) - pixelSize(density)
