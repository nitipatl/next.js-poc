import shallowRenderer from 'react-test-renderer/shallow'
import renderer from 'react-test-renderer'
import Index from '../index'

const shows = [
  {show: { id: 1, name: 'test'}},
  {show: {id: 2, name: 'test2'}}
]

it('Index should show correct', () => {
  const tree = renderer.create(
    <Index shows={shows} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Index should show correct', () => {
  const renderer = new shallowRenderer
  const snapshot = renderer.render(
    <Index shows={shows} />
  )
  expect(snapshot).toMatchSnapshot()
})
