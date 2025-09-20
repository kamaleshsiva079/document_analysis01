
export interface AnalysisResult {
  summary: string;
  documentType: string;
  keyClauses: {
    clause: string;
    explanation: string;
  }[];
}
