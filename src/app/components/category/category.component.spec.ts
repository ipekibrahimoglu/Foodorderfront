import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryComponent]
    })
    .compileComponents();
<<<<<<< HEAD

=======
    
>>>>>>> e41cde0f8ff84c0833d990b427ad5cbbb641bb55
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
