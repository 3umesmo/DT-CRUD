import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransacoesListComponent } from './components/transacoes-list/transacoes-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TransacoesListComponent,
    HeaderComponent,
    FormComponent,
    ListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
