import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeReadComponent } from './especialidade-read.component';

describe('EspecialidadeReadComponent', () => {
  let component: EspecialidadeReadComponent;
  let fixture: ComponentFixture<EspecialidadeReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadeReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
