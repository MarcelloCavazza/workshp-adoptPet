import type { NextPage } from 'next';
import TitleStructre from '../ui/components/Title/Title';
import ListContent from '../ui/components/List/List';

const Home: NextPage = () => {
  return (
    <div>
      <TitleStructre
        title=""
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar</strong> um pet virtualmente.
          </span>
        } />
      <ListContent />
    </div>
  )
}

export default Home
