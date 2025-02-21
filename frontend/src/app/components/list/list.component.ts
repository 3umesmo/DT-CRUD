import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  transacoes = [
    { id: 1, valor: 629.20, tipo: 'despesa', descricao: 'Concerto do carro' },
    { id: 2, valor: 50.00, tipo: 'receita', descricao: 'Pix do Fulano' },
    { id: 3, valor: 25.00, tipo: 'despesa', descricao: 'Burguer king (lanche)' },
    { id: 4, valor: 5.00, tipo: 'despesa', descricao: 'chocolate' },
    { id: 5, valor: 1200.00, tipo: 'receita', descricao: 'salário' },
    { id: 6, valor: 120.20, tipo: 'despesa', descricao: 'Conta de luz' },
    { id: 7, valor: 300.00, tipo: 'despesa', descricao: 'Compra no supermercado' },
    { id: 8, valor: 100.00, tipo: 'receita', descricao: 'Venda de item usado' },
    { id: 9, valor: 75.50, tipo: 'despesa', descricao: 'Assinatura de streaming' },
    { id: 10, valor: 15.00, tipo: 'despesa', descricao: 'Café na padaria' },
    { id: 11, valor: 500.00, tipo: 'receita', descricao: 'Freelance' },
    { id: 12, valor: 45.00, tipo: 'despesa', descricao: 'Uber' },
    { id: 13, valor: 250.00, tipo: 'despesa', descricao: 'Compra de roupas' },
    { id: 14, valor: 90.00, tipo: 'despesa', descricao: 'Farmácia' },
    { id: 15, valor: 60.00, tipo: 'receita', descricao: 'Rendimento de investimento' },
    { id: 16, valor: 80.00, tipo: 'despesa', descricao: 'Jantar fora' },
    { id: 17, valor: 20.00, tipo: 'despesa', descricao: 'Ingressos para cinema' },
    { id: 18, valor: 35.00, tipo: 'despesa', descricao: 'Presente de aniversário' },
    { id: 19, valor: 150.00, tipo: 'receita', descricao: 'Venda de artesanato' },
    { id: 20, valor: 220.00, tipo: 'despesa', descricao: 'Gasolina' },
    { id: 21, valor: 30.00, tipo: 'despesa', descricao: 'Manicure' },
    { id: 22, valor: 95.00, tipo: 'despesa', descricao: 'Almoço com amigos' },
    { id: 23, valor: 1000.00, tipo: 'receita', descricao: '13º salário' },
    { id: 24, valor: 300.00, tipo: 'despesa', descricao: 'Consulta médica' },
    { id: 25, valor: 200.00, tipo: 'despesa', descricao: 'Academia' }
];

  transacoesFiltradas = [...this.transacoes];
  filtroAtivo = 'nenhum';

  removerTransacao(id: number): void {
    this.transacoes = this.transacoes.filter(
      (transacao) => transacao.id !== id
    );

    if (this.filtroAtivo === 'despesa') {
      this.transacoesFiltradas = this.transacoes.filter(
        (transacao) => transacao.tipo === 'despesa'
      );
    } else if (this.filtroAtivo === 'receita') {
      this.transacoesFiltradas = this.transacoes.filter(
        (transacao) => transacao.tipo === 'receita'
      );
    } else {
      this.transacoesFiltradas = [...this.transacoes];
    }
  }

  showTudo() {
    this.filtroAtivo = 'tudo';
    this.transacoesFiltradas = [...this.transacoes];
  }

  showDespesa() {
    this.filtroAtivo = 'despesa';
    this.transacoesFiltradas = this.transacoes.filter(
      (transacao) => transacao.tipo === 'despesa'
    );
  }

  showReceita() {
    this.filtroAtivo = 'receita';
    this.transacoesFiltradas = this.transacoes.filter(
      (transacao) => transacao.tipo === 'receita'
    );
  }
}
