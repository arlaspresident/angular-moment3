import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DagensUtmaningComponent } from './dagens-utmaning.component';

describe('DagensUtmaningComponent', () => {
  let component: DagensUtmaningComponent;
  let fixture: ComponentFixture<DagensUtmaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DagensUtmaningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DagensUtmaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
