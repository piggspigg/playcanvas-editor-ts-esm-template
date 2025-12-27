import { Script, Entity } from "playcanvas";

export class HelloWorld extends Script {
  static scriptName = "helloWorld";

  /** @attribute */
  text = "";

  /**
   * @attribute
   * @type {Entity}
   */
  entityLink: Entity | null = null;
 
  initialize() {
    console.log("Hello " + this.text);
    if (this.entityLink) {
      console.log("Linked entity:", this.entityLink.name);
    }
  }
}
