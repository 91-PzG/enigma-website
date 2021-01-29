import { Observable } from "rxjs";

export interface MemberAutocomplete {
  username: string;
  id: string;
}

export abstract class MemberAutocompleteData {
  abstract getData(): Observable<MemberAutocomplete[]>;
}
