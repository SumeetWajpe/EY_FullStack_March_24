import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Counter from "./counter";

Enzyme.configure({ adapter: new Adapter() });

describe("test suite for counter component", () => {
  it("tests if counter component is instanciated", () => {
    let componentInst = shallow(<Counter />);
    expect(componentInst).toBeDefined();
  });

  it("checks if state in initialized to ten", () => {
    let componentInst = shallow(<Counter />);
    let theCount = componentInst.state().count;
    expect(theCount).toBe(10);
  });
});
