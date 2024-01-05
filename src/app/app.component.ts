import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  language = [
    {lang: 'Language', abbrev: 'Lang'}
  ];

  form = new FormGroup({
    lang: new FormControl(this.language[0]),
  });

  constructor(
    private _translateService: TranslateService,
  ) {
    this._translateService.addLangs(["en", "km"]);
    let defaultLang = localStorage.getItem("lang");
    if (!defaultLang) {
      defaultLang = "km";
    }
    this._translateService.setDefaultLang(defaultLang);
  }

  ngOnInit() {

  }

  public switchLang(lang: string) {
    localStorage.setItem("lang", lang);
    this._translateService.setDefaultLang(lang);
  }
}
