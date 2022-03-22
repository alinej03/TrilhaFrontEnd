import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNumeroComponent } from './lista-numero.component';

describe('ListaNumeroComponent', () => {
  let component: ListaNumeroComponent;
  let fixture: ComponentFixture<ListaNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNumeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
