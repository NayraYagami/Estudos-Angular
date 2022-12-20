import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoCreate2Component } from './medico-create2.component';

describe('MedicoCreate2Component', () => {
  let component: MedicoCreate2Component;
  let fixture: ComponentFixture<MedicoCreate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoCreate2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoCreate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
