import { Component, OnInit } from '@angular/core';
import {
  TransacoesService,
  Transacao,
} from '../../services/transacoes.service';

@Component({
  selector: 'app-transacoes-list',
  templateUrl: './transacoes-list.component.html',
  styleUrls: ['./transacoes-list.component.css'],
  standalone: true,
})
export class TransacoesListComponent implements OnInit {
  transacoes: Transacao[] = [];

  constructor(private transacoesService: TransacoesService) {}

  ngOnInit(): void {
    this.transacoesService.getTransacoes().subscribe((data) => {
      this.transacoes = data;
    });
  }
}
