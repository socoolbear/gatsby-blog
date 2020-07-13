import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/socoolbear', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => {
  let home = '/gatsby-blog';

  return (
      <nav>
        <ul>
          <li>
            <Link href={home}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={ home + '/get-started'}>
              <a>Get Started</a>
            </Link>
          </li>
          {links.map(({key, href, label}) => (
              <li key={key}>
                <a href={href}>{label}</a>
              </li>
          ))}
        </ul>

        <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
      </nav>
  );
}

export default Nav
