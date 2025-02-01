import Image from 'next/image' // Fix the import statement

const Logo = (props) => {
  const { className, ...other } = props;
  return (
    <Image
      src="/favicon.ico"
      alt="Logo"
      width={32}
      height={32}
    />
  );
};

export default Logo; // Add default export