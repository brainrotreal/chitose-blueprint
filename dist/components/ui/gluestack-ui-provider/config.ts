'use client';
import { vars } from 'nativewind';

// Primary (Gold: 236 201 75)
const GOLD_SCALE = [
    '255 240 190', // 0
    '250 220 140', // 50
    '245 210 110', // 100
    '240 205 90',  // 200
    '238 203 80',  // 300
    '236 201 75',  // 400
    '236 201 75',  // 500 ⭐ Main Anchor Gold
    '200 170 60',  // 600
    '160 130 45',  // 700
    '120 90 30',   // 800
    '80 60 15',    // 900
    '60 40 10',    // 950
];

// Secondary (Teal: 49 151 149)
const TEAL_SCALE = [
    '220 255 254', // 0
    '170 230 220', // 50
    '120 200 190', // 100
    '90 180 170',  // 200
    '60 160 155',  // 300
    '55 155 150',  // 400
    '49 151 149',  // 500 ⭐ Main Anchor Teal
    '40 120 120',  // 600
    '35 100 100',  // 700
    '30 80 80',    // 800
    '20 50 50',    // 900
    '15 30 30',    // 950
];


export const config = {
    // --- LIGHT MODE (Placeholder/Inverted for Compatibility) ---
    // Since you only use dark mode, these are set to simple inverted tones.
    light: vars({
        '--color-primary-0': GOLD_SCALE[1],
        '--color-primary-50': GOLD_SCALE[2],
        '--color-primary-100': GOLD_SCALE[3],
        '--color-primary-200': GOLD_SCALE[4],
        '--color-primary-300': GOLD_SCALE[5],
        '--color-primary-400': GOLD_SCALE[6],
        '--color-primary-500': GOLD_SCALE[7],
        '--color-primary-600': GOLD_SCALE[8],
        '--color-primary-700': GOLD_SCALE[9],
        '--color-primary-800': GOLD_SCALE[10],
        '--color-primary-900': GOLD_SCALE[11],
        '--color-primary-950': GOLD_SCALE[11],

        /* Secondary */
        '--color-secondary-0': TEAL_SCALE[11],
        '--color-secondary-50': TEAL_SCALE[10],
        '--color-secondary-100': TEAL_SCALE[9],
        '--color-secondary-200': TEAL_SCALE[8],
        '--color-secondary-300': TEAL_SCALE[7],
        '--color-secondary-400': TEAL_SCALE[6],
        '--color-secondary-500': TEAL_SCALE[5],
        '--color-secondary-600': TEAL_SCALE[4],
        '--color-secondary-700': TEAL_SCALE[3],
        '--color-secondary-800': TEAL_SCALE[2],
        '--color-secondary-900': TEAL_SCALE[1],
        '--color-secondary-950': TEAL_SCALE[0],

        /* Tertiary (Kept default for placeholder) */
        '--color-tertiary-0': '255 250 245',
        '--color-tertiary-500': '231 129 40', 
        '--color-tertiary-950': '84 49 18',

        /* Error/Success/Warning/Info (Kept default for utility) */
        '--color-error-500': '230 53 53',
        '--color-success-500': '52 131 82',
        '--color-warning-500': '231 120 40',
        '--color-info-500': '13 166 242',
        
        /* Typography */
        '--color-typography-0': '254 254 255',
        '--color-typography-500': '140 140 140',
        '--color-typography-950': '23 23 23',

        /* Background */
        '--color-background-0': '255 255 255',
        '--color-background-500': '142 142 142',
        '--color-background-950': '18 18 18',

        /* Background Special */
        '--color-background-error': '254 241 241',
        '--color-background-warning': '255 243 234',
        '--color-background-success': '237 252 242',
        '--color-background-muted': '247 248 247',
        '--color-background-info': '235 248 254',

        /* Indicator */
        '--color-indicator-primary': '55 55 55',
        '--color-indicator-info': '83 153 236',
        '--color-indicator-error': '185 28 28',
    }),
    
    // --- DARK MODE (Saku Cadence Theme) ---
    dark: vars({
        // -----------------------------------------------------------------
        // PRIMARY (GOLD) SCALE: XP, Active States
        // -----------------------------------------------------------------
        '--color-primary-0': GOLD_SCALE[11],
        '--color-primary-50': GOLD_SCALE[10],
        '--color-primary-100': GOLD_SCALE[9],
        '--color-primary-200': GOLD_SCALE[8],
        '--color-primary-300': GOLD_SCALE[7],
        '--color-primary-400': GOLD_SCALE[6],
        '--color-primary-500': GOLD_SCALE[5], // ⭐ Anchor Gold
        '--color-primary-600': GOLD_SCALE[4],
        '--color-primary-700': GOLD_SCALE[3],
        '--color-primary-800': GOLD_SCALE[2],
        '--color-primary-900': GOLD_SCALE[1],
        '--color-primary-950': GOLD_SCALE[0],

        // -----------------------------------------------------------------
        // SECONDARY (TEAL) SCALE: Depth, Secondary Accents
        // -----------------------------------------------------------------
        '--color-secondary-0': TEAL_SCALE[11],
        '--color-secondary-50': TEAL_SCALE[10],
        '--color-secondary-100': TEAL_SCALE[9],
        '--color-secondary-200': TEAL_SCALE[8],
        '--color-secondary-300': TEAL_SCALE[7],
        '--color-secondary-400': TEAL_SCALE[6],
        '--color-secondary-500': TEAL_SCALE[5], // ⭐ Anchor Teal
        '--color-secondary-600': TEAL_SCALE[4],
        '--color-secondary-700': TEAL_SCALE[3],
        '--color-secondary-800': TEAL_SCALE[2],
        '--color-secondary-900': TEAL_SCALE[1],
        '--color-secondary-950': TEAL_SCALE[0],

        // -----------------------------------------------------------------
        // BASE COLORS: Background, Text
        // -----------------------------------------------------------------

        /* Tertiary (Retained for structure) */
        '--color-tertiary-0': '84 49 18',
        '--color-tertiary-500': '251 157 75',
        '--color-tertiary-950': '255 250 245',

        /* Error, Success, Warning, Info (Retained for utility) */
        '--color-error-500': '239 68 68',
        '--color-success-500': '72 151 102',
        '--color-warning-500': '251 149 75',
        '--color-info-500': '50 180 244',

        /* Typography (Dark Background -> Light Text) */
        '--color-typography-0': '23 23 23',
        '--color-typography-50': '50 50 50', // Dark contrast
        '--color-typography-500': '180 180 180', // Medium gray text
        '--color-typography-950': '247 250 252', // ⭐ Light Text

        /* Outline (Used for borders/separators) */
        '--color-outline-0': '26 23 23',
        '--color-outline-500': '60 60 60', // Darker border
        '--color-outline-950': '240 240 240',

        /* Background (Charcoal Dark Theme) */
        '--color-background-0': '18 18 18', // Deepest Black
        '--color-background-50': '26 32 44', // ⭐ Main Charcoal Background
        '--color-background-500': '65 64 64', // Medium Surface (e.g., Cards)
        '--color-background-950': '246 246 246', // Light surfaces (rarely used)

        /* Background Special */
        '--color-background-error': '66 43 43',
        '--color-background-warning': '65 47 35',
        '--color-background-success': '28 43 33',
        '--color-background-muted': '40 40 40',
        '--color-background-info': '26 40 46',

        /* Focus Ring Indicator  */
        '--color-indicator-primary': GOLD_SCALE[5], // Use Gold for focus
        '--color-indicator-info': '161 199 245',
        '--color-indicator-error': '232 70 69',
    }),
};