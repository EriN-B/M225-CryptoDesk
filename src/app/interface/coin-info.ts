export interface CoinInfo {
  id: string;
  rank: number,
  name: string,
  description: string,
  open_source: boolean | null,
  org_structure: string | null
  links: string[];
  symbol: string;
  type: string;
}
