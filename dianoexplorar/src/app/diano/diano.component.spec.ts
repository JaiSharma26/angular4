/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DianoComponent } from './diano.component';

describe('DianoComponent', () => {
  let component: DianoComponent;
  let fixture: ComponentFixture<DianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
