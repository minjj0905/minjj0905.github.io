import Image from 'next/image';
import loopy from 'public/loopy.png';

const Test = () => {
  return (
    <div>
      <Image src={loopy} alt="loopy" width={100} />
      테스트
    </div>
  );
};

export default Test;
