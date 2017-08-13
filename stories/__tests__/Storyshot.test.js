import initStoryshots, { shallowSnapshot } from '@storybook/addon-storyshots';
import shallowRenderer from 'react-test-renderer/shallow'

initStoryshots({
    // test: shallowSnapshot
    // test({ story, context }) {
    //     const renderer = new shallowRenderer
    //     const result = renderer.render(story.render(context))
    //     expect(result).toMatchSnapshot()
    // }
});