import { Component } from 'react'
import Layout from '../app/components/Layout'
import { getMovieById } from '../app/remote-apis/movie'


// class Content extends Component {
//     static async getInitialProps(context) {
//         const { id } = context.query
//         const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//         const show = await res.json()
//         return {
//             id,
//             show
//         }
//     }
//     render() {
//         return (
//             <Layout>
//                 {this.props.id}
//                 <h1>{this.props.show.name}</h1>
//                 <p>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
//                 <img src={this.props.show.image.medium}/>
//             </Layout>
//         )
//     }
// }

const Content2 = (props) =>(
    <Layout>
        {props.id}
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium}/>
    </Layout>
)
Content2.getInitialProps = async (ctx) => {
    const { id } = ctx.query
    const show = await getMovieById(id)
    return { id, show }
}

// export default Content
export default Content2