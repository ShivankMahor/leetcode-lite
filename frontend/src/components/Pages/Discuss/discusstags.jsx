function DiscussTags({name,timesUsed}){
  return (
    <div className="flex rounded-sm text-gray-800 font-normal text-[12px] overflow-hidden">
      <div className="p-1 bg-gray-300/10 border-gray-400/20 border-[1px]">{name}</div>
      {timesUsed? (<div className="p-1 bg-gray-300/10 border-gray-400/20 border-[1px] border-l-0">{timesUsed}</div>) : null}
    </div>
  );
}

export default DiscussTags;