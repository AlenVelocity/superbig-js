export default class InjectionPoint {
    name: string;
    realName: string;
    target: string;
  
    constructor(name: string) {
      this.name = `[[[${name}]]]`;
      this.realName = name;
      this.target = this.name;
    }
}
  