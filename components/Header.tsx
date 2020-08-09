import Link from 'next/link'
var Icon = require('react-evil-icons');

import Logo from '../components/Logo'

const Header = () => (
    <div className="menuwrap">
      <Logo />
        <style jsx>{`
          .menuwrap {
            border-top: 2px solid white;
          }
    `}</style>
    </div>
)

export default Header
