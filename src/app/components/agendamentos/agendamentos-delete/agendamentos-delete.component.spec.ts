import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosDeleteComponent } from './agendamentos-delete.component';

describe('AgendamentosDeleteComponent', () => {
  let component: AgendamentosDeleteComponent;
  let fixture: ComponentFixture<AgendamentosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentosDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
