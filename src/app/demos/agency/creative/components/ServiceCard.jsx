import { Card, CardBody, CardFooter } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
const ServiceCard = ({
  service
}) => {
  return <Card className="card-hover-shadow border h-100 p-4">
      <CardBody className="p-0">
        <figure className="text-primary mb-4">{service.icon}</figure>
        <h5 className="mb-3">
          <Link href="">{service.title}</Link>
        </h5>
        <p>{service.description}</p>
      </CardBody>

      <CardFooter className="mt-auto p-0 pt-2">
        <Link className="icon-link icon-link-hover stretched-link z-index-2" href="">
          View detail
          <BsArrowRight className="bi" />
        </Link>
      </CardFooter>
    </Card>;
};
export default ServiceCard;