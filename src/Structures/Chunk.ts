import { Embedding } from "chromadb";

export default class Chunk {
    public metadatas: Record<string, any> = new Object();
    public id = 0;
  
    constructor(
        public text: string, 
        public embeddings: Embedding[] = []
    ) {
      this.text = text;
      this.embeddings = embeddings;
    }
}
  