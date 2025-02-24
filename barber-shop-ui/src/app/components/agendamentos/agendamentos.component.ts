import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgendamentosService } from '../../services/agendamentos.service';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-agendamentos',
  standalone: true,
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.css'],
  imports: [CommonModule, FormsModule]
})
export class AgendamentosComponent implements OnInit {
  agendamentos: any[] = [];
  clientes: any[] = [];
  novoAgendamento = { cliente: null, data: '', hora: '' };

  constructor(
    private agendamentosService: AgendamentosService,
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    this.listarAgendamentos();
    this.listarClientes();
  }

  listarAgendamentos(): void {
    this.agendamentosService.getAgendamentos().subscribe({
      next: (data) => this.agendamentos = data,
      error: (error) => {
        console.error('Erro ao listar agendamentos:', error);
        alert('Erro ao listar agendamentos.');
      }
    });
  }

  listarClientes(): void {
    this.clientesService.getClientes().subscribe({
      next: (data) => this.clientes = data,
      error: (error) => {
        console.error('Erro ao listar clientes:', error);
        alert('Erro ao listar clientes.');
      }
    });
  }

  criarAgendamento(): void {
    if (!this.novoAgendamento.cliente || !this.novoAgendamento.data || !this.novoAgendamento.hora) {
      alert('Selecione um cliente, uma data e um horário!');
      return;
    }

    this.agendamentosService.criarAgendamento(this.novoAgendamento).subscribe({
      next: () => {
        alert('Agendamento realizado com sucesso!');
        this.novoAgendamento = { cliente: null, data: '', hora: '' };
        this.listarAgendamentos();
      },
      error: (error) => {
        console.error('Erro ao criar agendamento:', error);
        alert('Erro ao criar agendamento! Verifique os dados.');
      }
    });
  }

  excluirAgendamento(id: number): void {
    if (confirm('Tem certeza que deseja excluir este agendamento?')) {
      this.agendamentosService.excluirAgendamento(id).subscribe({
        next: () => {
          alert('Agendamento excluído com sucesso!');
          this.listarAgendamentos();
        },
        error: (error) => {
          console.error('Erro ao excluir agendamento:', error);
          alert('Erro ao excluir agendamento.');
        }
      });
    }
  }
}
