import { Component, OnDestroy, OnInit } from '@angular/core';
import { SquaresService } from '../squares.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-squares-display',
  templateUrl: './squares-display.component.html',
  styleUrls: ['./squares-display.component.css'],
})
export class SquaresDisplayComponent implements OnInit, OnDestroy {
  squares: any[] = [];
  min: number = 1;
  max: number = 50;
  private subscription!: Subscription;

  constructor(private squaresService: SquaresService) {}

  ngOnInit(): void {
    this.GetSquares();
  }

  GetSquares(): void {
    this.subscription = this.squaresService
      .GetSquaresURL(this.min, this.max)
      .subscribe({
        next: (data) => {
          this.squares = data;
        },
        error: (err) => {
          console.error('Error occurred while fetching squares:', err);
        },
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
