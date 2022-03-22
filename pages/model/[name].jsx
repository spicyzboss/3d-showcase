import { Suspense } from 'react'
import { useRouter } from 'next/router'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Renderer from '../../components/Renderer';
import listModel from '../../data/listModel.json';

export default function Model() {
  const router = useRouter()
  const { name } = router.query
  const data = listModel.filter(x => x.name.toLowerCase() === name?.toLowerCase())[0];

  if (data) {
    const { position } = data;
    return (
      <>
        <Canvas camera={{ position }} style={{width: '100%', height: '100vh'}}>
          <ambientLight intensity={1} />
          <pointLight position={[40, 40, 40]} />
          <OrbitControls />
          <Suspense fallback={null}>
            <Renderer url={`/glb/${name}.glb`} />
          </Suspense>
        </Canvas>
      </>
    )
  } else {
    return <>
      <p style={{ textAlign: 'center', fontSize: '2rem' }}>อย่าซนสิจ๊ะ</p>
    </>
  }
}