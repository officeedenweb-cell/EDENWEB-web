import { Card, CardBody, CardFooter } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
const ServiceCard = ({
  service
}) => {
  const Icon = service.icon;
  return <Card className="bg-light h-100">
      <CardBody className="pb-0">
        <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5 flex-centered">
          <Icon className="fa-fw fs-5" />
        </div>
        <h5 className="mb-3">
          <Link href="">{service.title}</Link>
        </h5>
        <p>{service.description}</p>
      </CardBody>
      <CardFooter className="bg-light mt-auto pt-2">
        <Link className="icon-link icon-link-hover" href="">
          Know more
          <BsArrowRight className="bi" />
        </Link>
      </CardFooter>
    </Card>;
};
export default ServiceCard;