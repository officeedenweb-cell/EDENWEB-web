import { BsArrowRight } from 'react-icons/bs';
import { Card, CardBody, CardFooter } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
const ServiceCard = ({
  service
}) => {
  return <Card className="card-img-scale bg-body overflow-hidden">
      <div className="card-img-scale-wrapper">
        {service.image && <Image src={service.image} className="card-img-top img-scale" alt="service image" />}
      </div>

      <CardBody className="p-4">
        <h6>
          <Link href={service.url}>{service.title}</Link>
        </h6>
        <p className="mb-0">{service.description}</p>
      </CardBody>

      <CardFooter className="border-top bg-body p-4">
        <Link className="icon-link icon-link-hover stretched-link p-0 m-0 icons-center" href={service.url}>
          Explore this service
          <BsArrowRight className="bi" />
        </Link>
      </CardFooter>
    </Card>;
};
export default ServiceCard;