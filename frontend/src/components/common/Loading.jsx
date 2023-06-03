import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGlobalLoading } from '../../redux/features/globalLoading';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loading = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.globalLoading);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setGlobalLoading(false));
    }, 1500);
  }, [loading]);
  return (
    <div className="w-full h-screen flex relative mx-auto ">
      <div className="inline-block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex flex-col items-center gap-4 text-4xl xs:text-2xl mt:text-xl">
          <AiOutlineLoading3Quarters className="animate-spin w-10 h-10  text-white" />
          <h1 className="font-jost ">идет загрузка</h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
