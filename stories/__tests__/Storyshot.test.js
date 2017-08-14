import initStoryshots, { shallowSnapshot } from '@storybook/addon-storyshots';
import shallowRenderer from 'react-test-renderer/shallow'
import Header from '../../app/components/Header'

initStoryshots({
    // test: shallowSnapshot
    // test({ story, context }) {
    //     const renderer = new shallowRenderer
    //     const result = renderer.render(story.render(context))
    //     expect(result).toMatchSnapshot()
    // }
    test: ({ story, context }) => {
        // console.log(story.render(context).props.initialContent)
        const shallow = new shallowRenderer
        // const code = <Header title="OK" />
        // console.log(code)
        shallow.render(story.render(context).props.initialContent)
        expect(shallow.getRenderOutput()).toMatchSnapshot();
    }
});