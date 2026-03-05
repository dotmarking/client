import type { ACCENT_COLOR } from './constants/accent';
import type { THEMES } from './constants/themes';

export type GeneralTheme = (typeof THEMES)[number]['id'];
export type Accent = (typeof ACCENT_COLOR)[number]['id'];

export interface ThemeSettings {
    generalTheme: GeneralTheme;
    accent: Accent;
}
