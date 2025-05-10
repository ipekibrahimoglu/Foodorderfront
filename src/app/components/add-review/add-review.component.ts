import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../../review.service';
import { Review } from '../../models/review';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-review',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-review.component.html',
})
export class ReviewFormComponent implements OnInit {
  form!: FormGroup;
  // restaurantId!: string;
  @Input() restaurantId!: string;
  @Output() reviewAdded = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      comment: ['', Validators.required],
      rating: [5, Validators.required],
    });
  }
  

  // add-review.component.ts
submitReview() {
  const review: Review = {
    ...this.form.value,
    restaurantId: this.restaurantId,
  };

  this.reviewService['addReview'](review).subscribe(() => {
    alert('Yorum eklendi!');
    this.reviewAdded.emit();  
    this.form.reset(); 
  });
}

    
}