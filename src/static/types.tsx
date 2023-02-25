export interface Events {
  [year: string]: Array<{
    date: string;
    title: string;
    description: string[];
    images?: string[];
    list?: string[];
  }>;
}
export interface Event {
  date: string;
  title: string;
  description: string[];
  images?: string[];
  list?: string[];
}
