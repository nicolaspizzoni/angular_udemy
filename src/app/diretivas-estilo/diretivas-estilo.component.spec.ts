import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasEstiloComponent } from './diretivas-estilo.component';

describe('DiretivasEstiloComponent', () => {
  let component: DiretivasEstiloComponent;
  let fixture: ComponentFixture<DiretivasEstiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasEstiloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivasEstiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
