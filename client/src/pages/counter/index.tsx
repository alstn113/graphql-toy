import { Button, Container, Spacer } from '@nextui-org/react';
import { useRecoilState } from 'recoil';
import counter from '../../recoil/counter';

const Counter = () => {
  const [count, setCount] = useRecoilState(counter);
  const decrementByOne = () => setCount(count - 1);
  const incrementByOne = () => setCount(count + 1);

  return (
    <Container display="flex" alignItems="center" justify="center">
      <Button onClick={decrementByOne}>- 1</Button>
      <Spacer x={0.5} />
      <Button color={'error'}>{count}</Button>
      <Spacer x={0.5} />
      <Button onClick={incrementByOne}>+ 1</Button>
    </Container>
  );
};

export default Counter;
