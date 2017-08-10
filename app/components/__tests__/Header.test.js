import renderer from 'react-test-renderer'
import Header from '../Header'

it('Header should show correct', () => {
  const tree = renderer.create(
    <Header title="Hello" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
 });
