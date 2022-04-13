import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DetailFilm } from "../../model/film.model";
import { OmdbService } from "../../service/omdb.service";

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

	isLoading!: boolean;
	detailsFilm!: DetailFilm;

	constructor(
		public dialogRef: MatDialogRef<DialogComponent>,
		@Inject(MAT_DIALOG_DATA)
		public id: string,
		private omdbService: OmdbService,
	) { }

	ngOnInit(): void {
		this.getFilmById(this.id);
	}

	public onNoClick(): void {
		this.dialogRef.close();
	}

	public getFilmById(id: string): void {
		this.isLoading = true;
		this.omdbService.getFilmById(id).subscribe((detailsFilm: DetailFilm) => {
			this.detailsFilm = detailsFilm;
			this.isLoading = false;
		})
	}

}
