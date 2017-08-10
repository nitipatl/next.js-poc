import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        <hr />
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header