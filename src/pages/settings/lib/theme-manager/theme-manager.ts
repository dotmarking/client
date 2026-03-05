import type { Accent, GeneralTheme, ThemeSettings } from './theme-manager-interface';

class ThemeManager {
    private readonly html = document.documentElement;
    private readonly storageKey = 'theme_settings';
    private readonly defaultSettings: ThemeSettings = {
        generalTheme: 'dark',
        accent: 'orange',
    };

    public init() {
        const savedSettings = this.getSavedSettings();
        this.applyTheme(savedSettings);
    }

    public getCurrentSettings() {
        return this.getSavedSettings();
    }

    public setGeneralTheme(generalTheme: GeneralTheme) {
        const savedSettings = this.getSavedSettings();
        const newSettings: ThemeSettings = { generalTheme, accent: savedSettings.accent };
        this.saveSettings(newSettings);
        this.applyTheme(newSettings);
    }

    public setAccent(accent: Accent) {
        const savedSettings = this.getSavedSettings();
        const newSettings: ThemeSettings = { generalTheme: savedSettings.generalTheme, accent };
        this.saveSettings(newSettings);
        this.applyTheme(newSettings);
    }

    public setTheme(generalTheme: GeneralTheme, accent: Accent) {
        const settings: ThemeSettings = { generalTheme, accent };
        this.applyTheme(settings);
        this.saveSettings(settings);
    }

    private saveSettings(settings: ThemeSettings) {
        localStorage.setItem(this.storageKey, JSON.stringify(settings));
    }

    private applyTheme(settings: ThemeSettings) {
        this.html.className = settings.accent;
        this.saveSettings(settings);
    }

    private getSavedSettings(): ThemeSettings {
        try {
            const themeSettings = localStorage.getItem(this.storageKey);
            return themeSettings ? JSON.parse(themeSettings) : this.defaultSettings;
        } catch (error) {
            return this.defaultSettings;
        }
    }
}

export const themeManager = new ThemeManager();
