import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private alertController: AlertController) {}
  greyText() {}
  async displayAlert() {
    const addToDoAlert = await this.alertController.create({
      message: "Voulez-vous supprimer la tâche ?",
      buttons: [
        {
          text: "ajouter",
        },
        { text: "supprimer" },
      ],
    });
    addToDoAlert.present();
  }
}