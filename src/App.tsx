import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';
import JobForm from './page/EventForm';

function App() {
  return (
   <MainDiv>
    <Toaster/>
    <JobForm/>
   </MainDiv>
  );
}

const MainDiv = styled.div`

`

export default App;
