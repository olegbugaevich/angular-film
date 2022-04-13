import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { OmdbService } from '../../service/omdb.service'
import { Omdb, Film } from '../../model/film.model';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'app-form-search',
	templateUrl: './form-search.component.html',
	styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

	data!: Omdb;
	name: string = "";
	type: string = "movie";
	isDisabled!: boolean;

	@Input() pageIndex!: string;
	@Output() onFilmSearch: EventEmitter<Omdb> = new EventEmitter();

	constructor(private omdbService: OmdbService) { }

	ngOnInit(): void {
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.pageIndex) {
			this.getFilms(this.pageIndex);
		}
	}

	public getFilms(pageIndex: string): void {
		this.isDisabled = true;
		this.omdbService.getFilms(this.name, this.type, pageIndex).subscribe((data: Omdb) => {
			this.data = data;
			this.onFilmSearch.emit(this.data);
			this.isDisabled = false;
		})
	}

}
