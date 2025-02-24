import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  standalone: true,
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ClientesComponent implements OnInit {
  clientes: any[] = [];
  novoCliente = { nome: '', email: '', telefone: '' };

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void {
    this.clientesService.getClientes().subscribe({
      next: (data) => {
        this.clientes = data;
      },
      error: (error) => {
        console.error('Erro ao listar clientes:', error);
        alert('Erro ao listar clientes. Tente novamente.');
      }
    });
  }

  adicionarCliente(): void {
    if (!this.novoCliente.nome || !this.novoCliente.email || !this.novoCliente.telefone) {
      alert('Preencha todos os campos!');
      return;
    }

    this.clientesService.criarCliente(this.novoCliente).subscribe({
      next: () => {
        alert('Cliente cadastrado com sucesso!');
        this.novoCliente = { nome: '', email: '', telefone: '' };
        this.listarClientes();
      },
      error: (error) => {
        console.error('Erro ao criar cliente:', error);
        alert('Erro ao criar cliente. Tente novamente.');
      }
    });
  }

  editarCliente(cliente: any): void {
    const novoNome = prompt('Novo nome:', cliente.nome);
    const novoEmail = prompt('Novo email:', cliente.email);
    const novoTelefone = prompt('Novo telefone:', cliente.telefone);

    if (novoNome && novoEmail && novoTelefone) {
      const clienteAtualizado = { ...cliente, nome: novoNome, email: novoEmail, telefone: novoTelefone };

      this.clientesService.atualizarCliente(cliente.id, clienteAtualizado).subscribe({
        next: () => {
          alert('Cliente atualizado com sucesso!');
          this.listarClientes();
        },
        error: (error) => {
          console.error('Erro ao atualizar cliente:', error);
          alert('Erro ao atualizar cliente. Tente novamente.');
        }
      });
    } else {
      alert('Edição cancelada.');
    }
  }

  deletarCliente(clienteId: number): void {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.clientesService.excluirCliente(clienteId).subscribe({
        next: () => {
          alert('Cliente excluído com sucesso!');
          this.listarClientes();
        },
        error: (error) => {
          console.error('Erro ao excluir cliente:', error);
          alert('Erro ao excluir cliente. Tente novamente.');
        }
      });
    }
  }
}
