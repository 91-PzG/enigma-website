import { Injectable } from "@angular/core";
import { UserService } from "../data/user.service";

@Injectable()
export class UserMockService extends UserService {
  getData() {
    return null;
  }
}
