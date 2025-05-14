interface ButtonProps {
  name: string;
}

const Button = ({ name }: ButtonProps) => {
  return (
    <div>
      <button className="px-5 py-1 m-2 bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer">
        {name}
      </button>
    </div>
  );
};

export default Button;
