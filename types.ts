interface Array<T> {
  flat(): Array<T>;
  flatMap(func: (x: T) => T): Array<T>;
}

export interface GroupHeader {
  text: string;
  col: number;
}

export type CellData = string | number | null;

export interface JsonData {
  data: any;
  summary: CellData[][];
}

export interface TableData {
  data: {
    branchId: string;
    branchName: string;
    programs: {
      id: string;
      name: string;
      data: CellData[][];
      summary: CellData[][];
    }[];
    branchSummary: CellData[][];
  }[];
  summaryAll: CellData[][];
}

export interface PdfFormat {
  text: CellData;
  style: string;
}
