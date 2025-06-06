import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Lista de Pessoas', url: '/list', icon: 'people' },
    { title: 'Criar Pessoa', url: '/create', icon: 'add' },
];
  isDarkMode = false;

  constructor(private theme: ThemeService) {
    this.theme.initializeTheme();
    this.isDarkMode = document.body.classList.contains('dark');
  }

  toggleDarkMode(): void {
    this.isDarkMode = this.theme.toggleTheme();
  }
}
