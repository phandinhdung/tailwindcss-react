import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';

function MyBoxIcon({ type, href }) {
  const handleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'ins':
        return insIcon;
      case 'ytb':
        return ytbIcon;
    };
  };

  return (
    <div className="size-[26px] rounded-full bg-[#333] flex justify-center items-center">
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  )
}

export default MyBoxIcon