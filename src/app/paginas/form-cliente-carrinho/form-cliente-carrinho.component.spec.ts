import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClienteCarrinhoComponent } from './form-cliente-carrinho.component';

describe('FormClienteCarrinhoComponent', () => {
  let component: FormClienteCarrinhoComponent;
  let fixture: ComponentFixture<FormClienteCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormClienteCarrinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormClienteCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
