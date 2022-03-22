import { Suspense } from 'react'
import styled from 'styled-components';
import Renderer from '../components/Renderer';
import { Canvas } from '@react-three/fiber';
import Link from 'next/link'

const CardLayout = styled.div`
  background: #fff;
  border-radius: 1rem;
  color: #000;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
`

const Title = styled.p`
  font-family: 'system-ui', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  padding: 1rem;
  background: #fda085;
  color: white;
  border-radius: 1rem 1rem 0 0;
  ${CardLayout}:hover & {
    color: whitesmoke;
  }
`

const Card = ({ name, url, position, href }) => (
  <Link href={href}>
    <CardLayout>
      <Title>{name}</Title>
      <Canvas camera={{ position }} style={{width: '100%', height: '50vh', background: '#fda085', borderRadius: '0 0 1rem 1rem'}}>
        <ambientLight intensity={1} />
        <pointLight position={[40, 40, 20]} />
        <Suspense fallback={null}>
          <Renderer url={url} />
        </Suspense>
      </Canvas>
    </CardLayout>
  </Link>
)

export default Card;
