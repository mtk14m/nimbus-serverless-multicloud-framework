import { describe, it, expect} from "vitest";
import { hello } from "../../src/index";


describe('Nimbus', ()=>{
    it('should say hello', ()=> {
        expect(hello()).toBe("Hello from Nimbus!");
    })
})


