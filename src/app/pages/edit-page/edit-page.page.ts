import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/Models/models';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.page.html',
  styleUrls: ['./edit-page.page.scss'],
})
export class EditPagePage implements OnInit {

  pessoa: Pessoa = { Nome: '', Sobrenome: '', Idade: 0, Email: '', Telefone: '' };
  id: any;

  constructor(
    private pessoaService: ApiServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.pessoaService.getPessoaById(this.id).subscribe(data => {
      this.pessoa = data.data;
      console.log(data);
    });
  }

  save() {
    this.pessoaService.updatePessoa(this.id, this.pessoa).subscribe(() => {
      alert('Pessoa atualizada com sucesso!');
      this.router.navigate(['/list']);
    });
  }

}
