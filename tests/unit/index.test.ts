import { describe, it, expect} from "vitest";
import { hello } from "../../dist";


describe('Nimbus', ()=>{
    it('should say hello', ()=> {
        expect(hello()).toBe("Hello from Nimbus!");
    })
})


