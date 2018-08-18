import tags from "./tags";
import * as actions from "../actions";

describe("Test for tags reducer", () => {
  it("Should return empty array as initial state", () => {
    expect(tags(undefined, {})).toEqual([]);
  });
  it("Handles add tag action", () => {
    expect(tags(undefined, actions.addTag("Test"))).toEqual(["Test"]);
  });
  it("Handles delete tag action", () => {
    let newState = tags(undefined, actions.addTag("Test1"));
    newState = tags(newState, actions.addTag("Test2"));
    expect(tags(newState, actions.deleteTag(0))).toEqual(["Test2"]);
  });
});
