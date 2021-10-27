import { Note } from "./App";

export function saveNotes(notes: Note[]) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

export function getNotes() {
  return JSON.parse(localStorage.getItem("notes") as string);
}
