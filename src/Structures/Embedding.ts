import type { Tensor } from "onnxruntime-web";

export default class Embedding {  
    constructor(
      public tensors: Tensor[] = [], 
      public embedder: any | null = null
    ) {}
}
  