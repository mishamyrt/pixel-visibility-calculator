export type IUnitsConfig = Record<string, number>

export const UNITS_CONFIG: IUnitsConfig = {
    m: 1,
    cm: 0.01,
    in: 0.0254,
}

export type UnitsType = 'm' | 'cm' | 'in'