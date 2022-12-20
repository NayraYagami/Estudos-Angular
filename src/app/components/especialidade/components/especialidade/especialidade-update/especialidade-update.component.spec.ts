import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeUpdateComponent } from './especialidade-update.component';

describe('EspecialidadeUpdateComponent', () => {
  let component: EspecialidadeUpdateComponent;
  let fixture: ComponentFixture<EspecialidadeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
