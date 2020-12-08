import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public AlertController: AlertController) {}

  openTodoAlert(){
    let todoAlert = this.AlertController.create({
      message: "Votre tache",
      buttons: [
        {
          text: "Annuler",
          name: "todoAlert"
        },
        {
          text: "Supprimer"
        }
      ]
    });
  }


}
