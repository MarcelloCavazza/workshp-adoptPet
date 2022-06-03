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
      <ListContent
        pets={[
          {
            id: 1,
            name: 'Pedro',
            description: 'lorem impsumsalk jfldaflasdfljasdlfj lkaflasdfljasdfljsdl jsdfjsdlafjasdljflasjflsdajflasdffdasfasdlorem impsumsalk jfldaflasdfljasdlfj lkaflasdfljasdfljsdl jsdfjsdlafjasdljflasjflsdajflasdffdasfaslorem impsumsalk jfldaflasdfljasdlfj lkaflasdfljasdfljsdl jsdfjsdlafjasdljflasjflsdajflasdffdasfaslorem impsumsalk jfldaflasdfljasdlfj lkaflasdfljasdfljsdl jsdfjsdlafjasdljflasjflsdajflasdffdasfaslorem impsumsalk jfldaflasdfljasdlfj lkaflasdfljasdfljsdl jsdfjsdlafjasdljflasjflsdajflasdffdasfas fasdfasdf',
            picture: 'https://www.altoastral.com.br/media/uploads/legacy/2016/06/bidu-na-vida-real.jpg'
          }
        ]}
      />
    </div>
  )
}

export default Home
