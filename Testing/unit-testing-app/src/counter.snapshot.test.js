import renderer from "react-test-renderer";
import Counter from "./counter";

it("renders correctly", () => {
  const tree = renderer.create(<Counter />).toJSON();
  expect(tree).toMatchSnapshot();
});
