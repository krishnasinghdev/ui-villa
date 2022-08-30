type HeaderType = {
  t1: String;
  t2: String;
};

export default function Header({ t1, t2 }: HeaderType) {
  return (
    <div className='bg-common w-full h-[65vh] bg-fixed flex justify-center flex-col items-center bg-cover text-white font-f1'>
      <h1 className='text-6xl sm:text-7xl mb-4 text-center font-primary font-extrabold leading-1.5 '>
        {t1}
      </h1>
      <p className='text-xl  tracking-wider'>{t2}</p>
    </div>
  );
}
