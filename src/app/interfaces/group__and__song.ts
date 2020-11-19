export interface Group {
  id: number;
  name: string;
}

export interface Song {
  id: number;
  name: string;
  url: string;
  categoriesId: number;
}
