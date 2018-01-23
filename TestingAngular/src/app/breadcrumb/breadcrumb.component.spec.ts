import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correctly', () => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    fixture.debugElement.componentInstance.elements = ['Elt 1', 'Elt 2'];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('span').length).toBe(2);
  });

  it('selectionChange should work', async(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    fixture.debugElement.componentInstance.elements = ['Elt 1', 'Elt 2'];
    fixture.detectChanges();
    fixture.debugElement.componentInstance.selectionChange.subscribe((elt) => {
      expect(elt).toBe('Elt 1');
    });
    const compiled = fixture.debugElement.nativeElement;
    const event = document.createEvent('Event');
    event.initEvent('click', false, false);
    compiled.querySelector('span').dispatchEvent(event);
  }));
});
