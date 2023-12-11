import Style from './Skeleton.module.css'

const Skeleton = () => {
  return (
    <div className={Style.skeleton}>
      <div className={Style.skeletonBox}></div>
      <div className={Style.skeletonText}></div>
      <div className={Style.skeletonText}></div>
    </div>
  );
};

export default Skeleton;
