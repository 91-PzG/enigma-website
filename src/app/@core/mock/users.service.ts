import { Injectable } from "@angular/core";
import { Observable, of as observableOf } from "rxjs";
import { UserData } from "../data/users";

@Injectable()
export class UserService extends UserData {
  private users = {
    nick: {
      name: "Samu | ThePuppetMaster",
      picture: "assets/images/avatar.png",
    },
    eva: { name: "Eva Moor", picture: "assets/images/eva.png" },
    jack: { name: "Jack Williams", picture: "assets/images/jack.png" },
    lee: { name: "Lee Wong", picture: "assets/images/lee.png" },
    alan: { name: "Alan Thompson", picture: "assets/images/alan.png" },
    kate: { name: "Kate Martinez", picture: "assets/images/kate.png" },
  };

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }
}
