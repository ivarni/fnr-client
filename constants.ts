export const COLORS = {
    primary: `hsla(243, 75%, 59%, 1)`,
    secondary: `hsla(142, 76%, 36%, 1)`,
    white: `hsla(0, 0%, 100%, 1)`,
    grey: {
        700: `hsla(210, 5%, 40%, 1)`,
        500: `hsla(196, 4%, 60%, 1)`
    },
    background: `hsla(284, 87%, 98%, 1)`,
}


export const SHADOWS = `
    --shadow-color: 285deg 30% 63%;
    --shadow-elevation-low:
        0.2px 0.2px 0.3px hsl(var(--shadow-color) / 0.28),
        0.3px 0.3px 0.5px -1.2px hsl(var(--shadow-color) / 0.29),
        0.7px 0.7px 1.1px -2.4px hsl(var(--shadow-color) / 0.29);
    --shadow-elevation-medium:
        0.2px 0.2px 0.3px hsl(var(--shadow-color) / 0.3),
        0.6px 0.6px 1px -0.8px hsl(var(--shadow-color) / 0.3),
        1.4px 1.5px 2.3px -1.6px hsl(var(--shadow-color) / 0.31),
        3.5px 3.7px 5.8px -2.4px hsl(var(--shadow-color) / 0.31);
    --shadow-elevation-high:
        0.2px 0.2px 0.3px hsl(var(--shadow-color) / 0.28),
        1px 1px 1.6px -0.4px hsl(var(--shadow-color) / 0.28),
        1.8px 1.9px 3px -0.7px hsl(var(--shadow-color) / 0.28),
        2.9px 3.1px 4.8px -1px hsl(var(--shadow-color) / 0.28),
        4.6px 4.9px 7.6px -1.4px hsl(var(--shadow-color) / 0.28),
        7.2px 7.6px 11.9px -1.8px hsl(var(--shadow-color) / 0.28),
        10.8px 11.5px 17.9px -2.1px hsl(var(--shadow-color) / 0.29),
        15.9px 16.9px 26.3px -2.4px hsl(var(--shadow-color) / 0.29);
`