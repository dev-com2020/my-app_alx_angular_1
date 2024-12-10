import { InjectionToken } from "@angular/core";

export interface AppSettings {
    title2: string;
    version: string;
}

export const AppSettings: AppSettings = {
    title2: 'moja aplikacja',
    version: '1.0.0'
};


export const APP_SETTINGS = new InjectionToken<AppSettings>('app.settings');