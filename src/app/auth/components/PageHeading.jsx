import LogoBox from '@/components/LogoBox';
import Link from 'next/link';
const PageHeading = ({
  heading,
  subHeading
}) => {
  return <>
      <Link href="">
        <LogoBox className="h-50px mb-4" smallIcon />
      </Link>
      <h2 className="mb-0">{heading}</h2>
      <p className="mb-0">{subHeading}</p>
    </>;
};
export default PageHeading;