import React from 'react';

function Footer() {
    return (
        <div className='center' >
        <footer className="pv4 ph3 ph5-m ph6-l bg-white">
          <small className="f6 db tc">© 2019 <b className="ttu">Ciora Dorin</b>., All Rights Reserved</small>
          <div className="tc mt3">
            <a href="/language/" title="Language" className="f6 dib ph2 link  dim">Language</a>
            <a href="/terms/"    title="Terms" className="f6 dib ph2 link  dim">Terms of Use</a>
            <a href="/privacy/"  title="Privacy" className="f6 dib ph2 link dim">Privacy</a>
          </div>
        </footer>
        </div>
    )
} 

export default Footer;