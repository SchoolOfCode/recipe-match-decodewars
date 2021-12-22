//👉 Write your tests below here:
import {
    matchArrays
} from "./main.js"


it('should return an array if given an empty array', () => {
    expect(matchArrays([])).toEqual([]);
})

it('should return an array that does not contain any items from the second argument', () => {
    expect(matchArrays([1, 2, 3, 4], [1, 2, 3])).toEqual([4]);
})

it('should return ["apples", "bananas", "grapes"] when given ["apples", "bananas", "grapes"], ["kiwi", "pears"]', () => {
    expect(matchArrays(["apples", "bananas", "grapes"], ["kiwi", "pears"])).toEqual(["apples", "bananas", "grapes"])
})