import { Component } from '@angular/core';
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
  constructor() {}
}
