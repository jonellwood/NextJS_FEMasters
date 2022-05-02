/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import Browser from '../src/components/browser';
import Dynamic from 'next/dynamic'
import dynamic from 'next/dynamic';

const BrowserComponent = dynamic(() => import('../src/components/browser'), {ssr: false, loading: () => <p>Loading bro...</p>})

export default ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
    {/* <BrowserComponent /> */}
    </div>
  </div> 
)

export function getStaticProps() {
  // get fake data from a fake CMS
  
  return {
    props: {content: {
      title: "This is my nice notes app"
    }}
  }
}