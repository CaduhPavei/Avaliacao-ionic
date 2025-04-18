import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonBackButton,
  IonList,
  IonLabel,
  IonListHeader,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonCard,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.page.html',
  styleUrls: ['./transaction-page.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonButton,
    IonBackButton,
    IonList,
    IonLabel,
    IonListHeader,
    IonItem,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonCard,
  ],
})
export class TransactionPagePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
