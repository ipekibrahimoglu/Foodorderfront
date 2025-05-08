import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {
   reviews:Review[]=[];
     currentReview:Review|null=null;
   
constructor(private reviewService:ReviewService ){ }

  ngOnInit(): void{
    this.getReviews();  
  }

  getReviews(){
    this.reviewService.getReviews().subscribe(response =>{
      console.log(response);
      this.reviews=response
    });
  }
   setCurrentReview(review:Review):void{
      this.currentReview=review;
      console.log("Seçilen yorum:",review);
      }

}


