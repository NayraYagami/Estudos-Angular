import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoCrudComponent } from './agendamento-crud.component';

describe('AgendamentoCrudComponent', () => {
  let component: AgendamentoCrudComponent;
  let fixture: ComponentFixture<AgendamentoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
