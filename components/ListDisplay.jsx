import styled from 'styled-components';

const ListLayout = styled.div`
  max-width: 1200px;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem auto;
`;

const ListDisplay = ({ children }) => (
  <ListLayout>
    {children}
  </ListLayout>
);

export default ListDisplay;
