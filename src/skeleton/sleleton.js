import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


 const loading=()=>{
return (
  <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <div style={{width:"250px",height:"250px"}}>
      <Skeleton count={3} />
    </div>
  </SkeletonTheme>
);}

export default loading;