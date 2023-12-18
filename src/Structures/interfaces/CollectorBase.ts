import Bucket from "../Bucket";
import Chunk from "../Chunk";
import InjectionPoint from "../InjectionPoint";

interface Collector {
  add(texts: Bucket[]): void;

  get(searchStrings: string[], nResults: number, bucketKey?: string): Map<InjectionPoint, Map<string, any>[]>;

  getIds(searchStrings: string[], nResults: number, bucketKey?: string, excludeIds?: number[]): Map<InjectionPoint, number[]>;

  getChunks(searchStrings: string[], nResults: number, injectionPoint: InjectionPoint, excludeChunks?: Chunk[]): Map<InjectionPoint, Chunk[]>;

  getTexts(searchStrings: string[], nResults: number, bucketKey?: string, excludeTexts?: string[]): Map<InjectionPoint, string[]>;

  clear(): void;
}

export default Collector;
