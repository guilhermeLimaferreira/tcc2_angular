import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private storageKey = 'prefers-dark';

  initializeTheme(): void {
    const prefersDark = localStorage.getItem(this.storageKey) === 'true';
    this.setDarkMode(prefersDark);
  }

  toggleTheme(): boolean {
    const prefersDark = !document.body.classList.contains('dark');
    this.setDarkMode(prefersDark);
    return prefersDark;
  }

  private setDarkMode(isDark: boolean): void {
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem(this.storageKey, String(isDark));
  }
}
