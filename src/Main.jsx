import React from 'react'; 
import styled from 'styled-components';

const Text = styled.p`
  font-size: 1.5em;
  color: teal;
`

function Main() {
  return(
    <div>
      <div>
        <Text>Some things will be styled in here! </Text>
      </div>
    </div>
  )
}

export default Main;