import { Injectable } from "@angular/core";
import { Recruit, RecruitsService } from "../data/recruits.service";

@Injectable()
export class RecruitsMockService extends RecruitsService {
  getData() {
    const data: Recruit[] = [];
    return Promise.resolve(data);
  }
}
