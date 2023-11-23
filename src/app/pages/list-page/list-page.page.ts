import { Router } from '@angular/router';
import { ApiServiceService } from './../../services/api-service.service';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.page.html',
  styleUrls: ['./list-page.page.scss'],
})
export class ListPagePage implements OnInit, OnDestroy  {
  pessoas: any[] = [];
  qtde_rg: any;
  limit = 50;
  offset = 0;
  isLoading = false;
  noMoreData = false;
  totalCarregado = 0;

  @ViewChild('anchor') anchor!: ElementRef;

  private observer!: IntersectionObserver;

  constructor(private pessoaService: ApiServiceService, private router: Router) { }

  ngOnInit() {
    this.carregarPessoas(); 
  }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  ionViewWillEnter() {     
  }  

  carregarPessoas(): void {
    if (this.isLoading || this.noMoreData) return;
    this.isLoading = true;
    this.pessoaService.getPessoas().subscribe(data => {
      if (data.success) {

        if (data.data.length === 0) {
          this.noMoreData = true;
        } else {
          this.pessoas = [...this.pessoas, ...data.data];
          this.pessoaService.incrementOffset(data.data.length); // Atualiza o offset baseado na quantidade de dados carregados
          this.totalCarregado += data.data.length;  
        }
        this.isLoading = false;            
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
  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.carregarPessoas();
      }
    }, options);

    // Verifica se o elemento anchor está definido antes de observá-lo
    if (this.anchor && this.anchor.nativeElement) {
      this.observer.observe(this.anchor.nativeElement);
    }
}
}


