import ListDisplay from '../components/ListDisplay';
import Card from '../components/Card';
import listModel from '../data/listModel.json';

export default function IndexPage() {
  return (
    <ListDisplay>
      {listModel.map(({ name, position }) => <Card key={name} name={name} href={`/model/${name.toLowerCase()}`} url={`/glb/${name.toLowerCase()}.glb`} position={position} />)}
    </ListDisplay>
  )
}
