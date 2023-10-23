import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPagePage } from './list-page.page';

describe('ListPagePage', () => {
  let component: ListPagePage;
  let fixture: ComponentFixture<ListPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
