import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Book} from '../../../models/book';
import {CharacterStoreService} from '../../../services/character-store/character-store.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit, OnChanges {

  @Input()
  book: Book;

  displayedCharacters;
  displayedPovCharacters;

  constructor(
    private characterStore: CharacterStoreService,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes && changes.book) {

      // Only display some characters, because there can be more than 400 characters in one book so we would need to add pagination or search
      this.characterStore.retrieveCharactersNameFromUrls(this.book.characters.slice(0, 10))
        .subscribe({
          next: value => {
            this.displayedCharacters = value;
          },
        });

      this.characterStore.retrieveCharactersNameFromUrls(this.book.povCharacters)
        .subscribe({
          next: value => {
            this.displayedPovCharacters = value;
          },
        });

    }

  }

}
