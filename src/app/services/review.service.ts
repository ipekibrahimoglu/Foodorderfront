import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:5161/api/Reviews';

  constructor(private http: HttpClient) {}

  // Tüm yorumları getir
  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl);
  }

  // Belirli bir restoranın yorumlarını getir
  getReviewsByRestaurant(restaurantId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}?restaurantId=${restaurantId}`);
  }

  // Yeni bir yorum ekle
  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.apiUrl, review);
  }
}
