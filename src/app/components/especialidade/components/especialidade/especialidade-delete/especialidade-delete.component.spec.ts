import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeDeleteComponent } from './especialidade-delete.component';

describe('EspecialidadeDeleteComponent', () => {
  let component: EspecialidadeDeleteComponent;
  let fixture: ComponentFixture<EspecialidadeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadeDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
