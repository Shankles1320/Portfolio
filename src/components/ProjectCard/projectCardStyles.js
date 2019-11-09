import styled from 'styled-components'

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 650px;
  width: 650px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  margin: 20px 0 20px 0;
  text-align: center;
  background-color: #f4f6f9;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 800px) {
    height: 350px;
    width: 350px;
  }
`
