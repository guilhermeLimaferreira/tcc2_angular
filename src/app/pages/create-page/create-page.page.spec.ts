import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePagePage } from './create-page.page';

describe('CreatePagePage', () => {
  let component: CreatePagePage;
  let fixture: ComponentFixture<CreatePagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreatePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
