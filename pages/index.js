import Layout from '../app/components/Layout'
import PostLink from '../app/components/PostLink'
import { getMovies } from '../app/remote-apis/movie'

const Index = (props) => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
        {props.shows && props.shows.map(({show}) => (
            <PostLink key={show.id} post={show} />
        ))}
        </ul>
    </Layout>
)

Index.getInitialProps = async () => {
    const shows = await getMovies('batman')
    return { shows }
}

export default Index