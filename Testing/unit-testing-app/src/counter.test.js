import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Counter from "./counter";

Enzyme.configure({ adapter: new Adapter() });

describe("test suite for counter component", () => {
  let componentInst;
  beforeEach(() => {
    componentInst = shallow(<Counter />);
  });
  it("tests if counter component is instanciated", () => {
    expect(componentInst).toBeDefined();
  });

  it("tests if state in initialized to ten", () => {
    let theCount = componentInst.state().count;
    expect(theCount).toBe(10);
  });

  fit("tests if value of state incremented on click of the button", () => {
    let button = componentInst.find("button");
    button.simulate("click");
    let pText = componentInst.find("p").text();
    expect(pText).toBe("11");
  });
});
