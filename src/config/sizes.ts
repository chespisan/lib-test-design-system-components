export type ComponentSize = 'default' | 'large' | 'small';

export const sidePaddings: {[key in ComponentSize]: number} = {
    large: 30,
    default: 25,
    small: 20,
}

export const heights: {[key in ComponentSize]: number} = {
    large: 53,
    default: 45,
    small: 31,
}

export const Widths: {[key in ComponentSize]: number} = {
    large: 309,
    default: 158,
    small: 118,
}