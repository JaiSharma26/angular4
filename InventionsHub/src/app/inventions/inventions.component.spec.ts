/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InventionsComponent } from './inventions.component';

describe('InventionsComponent', () => {
  let component: InventionsComponent;
  let fixture: ComponentFixture<InventionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
