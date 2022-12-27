import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosReadComponent } from './agendamentos-read.component';

describe('AgendamentosReadComponent', () => {
  let component: AgendamentosReadComponent;
  let fixture: ComponentFixture<AgendamentosReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentosReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
