import { useGLTF } from '@react-three/drei'

export default function Renderer({ url, ...props }) {
  const { nodes } = useGLTF(url, true);

  return (
    <scene name="Scene" {...props}>
      {renderChild(nodes['Scene'])}
    </scene>
  )
}

function renderChild(node) {
  return (
    node.children.length > 0 ? (
      <group key={node.name} {...node}>
        {node.children.map(x => renderChild(x))}
      </group>
    ) : (
      <mesh key={node.name} {...node} />
    )
  )
}
