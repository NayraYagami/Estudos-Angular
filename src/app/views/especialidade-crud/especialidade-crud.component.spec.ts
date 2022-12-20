import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeCrudComponent } from './especialidade-crud.component';

describe('EspecialidadeCrudComponent', () => {
  let component: EspecialidadeCrudComponent;
  let fixture: ComponentFixture<EspecialidadeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadeCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
