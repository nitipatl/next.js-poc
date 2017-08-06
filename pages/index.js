import Layout from '../app/components/Layout'
import PostLink from '../app/components/PostLink'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
        {props.shows.map(({show}) => (
            <PostLink key={show.id} post={show} />
        ))}
        </ul>
    </Layout>
)

Index.getInitialProps = async () => {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=batman`)
  const data = await res.json()
  return {
    shows: data
  }
}


export default Index