import renderer  from 'react-test-renderer'
import shallowRenderer from 'react-test-renderer/shallow'
import Header from '../Header'

it('Header should show correct', () => {
  const tree = renderer.create(
    <Header title="Hello" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
});

it('Header should show correct (shallow)', () => {
  const renderer = new shallowRenderer
  const snapshot = renderer.render(
    <Header title="Hello" />
  )
  expect(snapshot).toMatchSnapshot()
});
