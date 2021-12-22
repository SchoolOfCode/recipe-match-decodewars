//👉 Write your tests below here:
import {decoder} from "./main.js";

test("See if you can decode the secret message", () =>{
    const actual = {
        success: true,
        payload: decoder("k co pqy kp nc, eqog cpf hkpf og.")
    }

    const expected = {
        success: true,
        payload: "i am now in la, come and find me."
    }

    expect(actual).toStrictEqual(expected);
})
