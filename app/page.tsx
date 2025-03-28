import Image from 'next/image';
const home = () => {
  return <div>
            <h1>Dog Website</h1>
            <Image src="/images/dog.jpeg" alt="dog" width={500} height={500}/>
         </div> ;
};

export default home;