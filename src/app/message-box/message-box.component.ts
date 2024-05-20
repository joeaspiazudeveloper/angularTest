import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-message-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.css'
})
export class MessageBoxComponent {
  @Input() message!: string;
  @Input() class!: string;

  parentClassName!: string;
  
  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    this.parentClassName = this.elRef.nativeElement.parentElement.className;
  }
}
