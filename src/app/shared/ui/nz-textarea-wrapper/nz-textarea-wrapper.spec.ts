import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzTextareaWrapper } from './nz-textarea-wrapper';

describe('NzTextareaWrapper', () => {
  let component: NzTextareaWrapper;
  let fixture: ComponentFixture<NzTextareaWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzTextareaWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzTextareaWrapper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
