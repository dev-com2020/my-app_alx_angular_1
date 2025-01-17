import { InjectionToken } from "@angular/core";

export interface AppSettings {
    title2: string;
    version: string;
    apiUrl: string;
}

export const appSettings: AppSettings = {
    title2: 'moja aplikacja',
    version: '1.0.0',
    apiUrl: 'https://fakestoreapi.com'
};


export const APP_SETTINGS = new InjectionToken<AppSettings>('app.settings');
