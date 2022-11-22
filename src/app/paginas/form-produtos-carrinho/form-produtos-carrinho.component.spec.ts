import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProdutosCarrinhoComponent } from './form-produtos-carrinho.component';

describe('FormProdutosCarrinhoComponent', () => {
  let component: FormProdutosCarrinhoComponent;
  let fixture: ComponentFixture<FormProdutosCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProdutosCarrinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProdutosCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
