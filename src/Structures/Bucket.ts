import { Tensor } from "onnxruntime-web";
import Chunk from "./Chunk";
import { Embedding } from "chromadb";

export default class Bucket {
    public ids: number[] = []
    public embeddings: Embedding[] = []
    public metadatas: any[] = []
    public documents: any[] = []
  
    constructor(
        public name: string, 
        public chunks: Chunk[] = []
    ) {
    }
}