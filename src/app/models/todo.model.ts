import { FormControl } from "@angular/forms";

export interface Todo {
    id: number | null;
    title: string | null;
    description: string | null;
    completed:boolean | null;
    priority: string | null;
   // dueDate: Date | null;
   dueDate: string;
}