import { Component, Input, OnInit } from '@angular/core';
import {Film, Omdb, DetailFilm} from '../../model/film.model';
import {OmdbService} from "../../service/omdb.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
	selector: 'app-film-item',
	templateUrl: './film-item.component.html',
	styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

	@Input() film!: Film;

  constructor(private omdbService: OmdbService,
              public dialog: MatDialog) { }

	ngOnInit(): void {
	}


  public getFilmById(id: string): void {
      this.dialog.open(DialogComponent, {
        data: id,
        disableClose: true,
      });
  }



}
