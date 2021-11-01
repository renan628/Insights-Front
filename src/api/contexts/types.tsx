export interface GetInsightsType {
  count: number;
  next: string;
  previous: string | null;
  results: Insigths[];
}

export interface Insigths {
  id: number;
  texto: string;
  tags: Tags[];
}

export interface Tags {
  id: number;
  nome: string;
}
