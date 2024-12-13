import { Component, OnInit } from '@angular/core';
import { GiftItemComponent } from '../gift-item/gift-item.component';
import { getAllGifts, GiftBean } from '../../util/giftBean';
import { SelectItem, sortRecipes } from '../../util/util';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [GiftItemComponent, FormsModule],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.css'
})
export class GiftsComponent implements OnInit {
  listGifts:GiftBean[] = getAllGifts();
  filteredList:GiftBean[] = [];
  
  typeSortRecipes:number = 3;
  sortRecipesOption:SelectItem[] = sortRecipes();
  sortField: 'title' | 'dateInsert' = 'dateInsert'; // Campo di ordinamento
  sortOrder: 'asc' | 'desc' = 'desc'; // Ordine di ordinamento

  searchTitle = ''; // Testo inserito nell'input


  constructor() {}

  ngOnInit(): void {
    this.applySort(true);
  }

  onChangeOrder(event:Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.typeSortRecipes = parseInt(selectedValue);

    if(this.typeSortRecipes === 1) {
      this.changeSort('title', 'asc');
    }else if(this.typeSortRecipes === 2) {
      this.changeSort('title', 'desc');
    }else if(this.typeSortRecipes === 3) {
      this.changeSort('dateInsert', 'desc');
    }else if(this.typeSortRecipes === 4) {
      this.changeSort('dateInsert', 'asc');
    }
  }

  // Cambia il filtro e riordina
  changeSort(field: 'title' | 'dateInsert', order: 'asc' | 'desc') {
    this.sortField = field;
    this.sortOrder = order;
    this.applySort(false);
  }

  // Applica l'ordinamento alla lista
  applySort(isInit:boolean) {
    if(isInit) {
      this.filteredList = [...this.listGifts]; // Clona la lista originale
    }
    this.filteredList.sort((a, b) => {
      let compareValue = 0;
  
      if (this.sortField === 'title') {
        // Ordinamento alfabetico per titolo
        compareValue = a.title.localeCompare(b.title);
      } else if (this.sortField === 'dateInsert') {
        // Ordinamento per data (stringa formattata)
        compareValue = a.dateInsert.localeCompare(b.dateInsert); // Confronta le date come stringhe
      }
  
      return this.sortOrder === 'asc' ? compareValue : -compareValue;
    });
  }

  onSearchGift(): void {
    const searchText = this.searchTitle.trim().toLowerCase();
    this.filteredList = this.listGifts.filter(gift =>
      gift.title.toLowerCase().includes(searchText)
    );
    this.applySort(false);
  }

  selectGift(gift: { title: string }): void {
    this.searchTitle = gift.title; // Imposta l'input con il valore selezionato
    this.filteredList = []; // Nascondi i suggerimenti
  }

  onRemoveFilter() {
    this.searchTitle = '';
    this.onSearchGift();
  }

}
