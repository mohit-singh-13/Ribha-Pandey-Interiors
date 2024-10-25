const Card = ({ name, url }: { name: string; url: string }) => {
  return (
    <div>
      <div className="bg-[#D9D9D9] rounded-[0.5rem] h-[31rem] w-[23.8rem flex items-center justify-center flex-col px-4 py-4 ">
        <img src={url} alt={name} className="pb-2 h-full object-cover" />
        <p className="font-bold text-black">{name}</p>
      </div>
    </div>
  );
};

export default Card;
