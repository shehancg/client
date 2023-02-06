import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteminsideComponent } from './iteminside.component';

describe('IteminsideComponent', () => {
  let component: IteminsideComponent;
  let fixture: ComponentFixture<IteminsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteminsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IteminsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
