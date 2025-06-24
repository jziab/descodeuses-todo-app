import { FormControl } from "@angular/forms";
// | en typescript c'est possibilite d'avoir
    // plusieurs types

    // | null cad champ optionel

    //identifiant
export interface userlist {
  id: FormControl<number | null>;
  nom: FormControl<string | null>;
  prenom: FormControl<string|null>;
  username: FormControl<string|null>;
  genere: FormControl<string|null>;
}