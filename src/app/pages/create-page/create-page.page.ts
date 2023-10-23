import { Router } from '@angular/router';
import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.page.html',
  styleUrls: ['./create-page.page.scss'],
})
export class CreatePagePage implements OnInit {

  nome: string = '';
  sobrenome: string = '';
  idade: number | null = null;  // novo
  email: string = '';           // novo
  telefone: string = '';        // novo

  constructor(private pessoaService: ApiServiceService, private router: Router, private alertController: AlertController) { }

  criarPessoa(): void {
    const novaPessoa = {
      Nome: this.nome,
      Sobrenome: this.sobrenome,
      Idade: this.idade,           // novo
      Email: this.email,           // novo
      Telefone: this.telefone,     // novo
    };

    this.pessoaService.createPessoa(novaPessoa).subscribe(data => {
      if (data.success) {
        console.log('Pessoa criada com sucesso!', data);
        this.presentAlert('Sucesso', data.message, () => {
          // Redireciona para a tela de lista quando o botão OK for pressionado
          this.router.navigate(['/list']);
        });
      }
    },
      error => {
        console.error('Erro ao criar a pessoa:', error);
        this.presentAlert('Erro',  error.message, () => { });
      });
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Criar Registros em Massa',
      inputs: [
        {
          name: 'numRecords',
          type: 'number',
          placeholder: 'Número de registros'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Ok',
          handler: (data) => {
            this.createMassRecords(data.numRecords);
          }
        }
      ]
    });

    await alert.present();
  }

  createMassRecords(numRecords: number) {
    for (let i = 0; i < numRecords; i++) {
      const data = {
        Nome: 'Nome' + i,  // Você pode substituir com lógica de geração de nome real
        Sobrenome: 'Sobrenome' + i,
        Idade: 30,  // e assim por diante para os outros campos
        Email: 'email' + i + '@example.com',
        Telefone: '123456' + i
      };

      this.pessoaService.createPessoa(data).subscribe(response => {
        console.log('Registro criado', response);
      }, error => {
        console.log('Erro ao criar registro', error);
      });
    }
  }

  async presentAlert(header: string, message: string, onOkClick: () => void) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            onOkClick();
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
