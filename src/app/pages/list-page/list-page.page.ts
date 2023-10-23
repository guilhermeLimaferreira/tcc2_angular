import { Router } from '@angular/router';
import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.page.html',
  styleUrls: ['./list-page.page.scss'],
})
export class ListPagePage implements OnInit {
  pessoas: any[] = [];
  constructor(private pessoaService: ApiServiceService, private router: Router) { }

  ngOnInit() {
    this.carregarPessoas();
  }
  carregarPessoas(): void {
    this.pessoaService.getPessoas().subscribe(data => {
      if (data.success) {
        this.pessoas = data.data;
      }
    });
  }
  editar(id: string): void {
    console.log('Editar pessoa com ID:', id);
    // Aqui você pode navegar para a página de edição, por exemplo
    this.router.navigate(['/edit', id]);
  }

  deletar(id: string): void {
    console.log('Deletar pessoa com ID:', id);
    this.pessoaService.deletePessoa(id).subscribe(data => {
      if (data.success) {
        console.log('Pessoa deletada com sucesso!');
        this.carregarPessoas();  // Recarrega a lista após a exclusão
      }
    });
  }
}
