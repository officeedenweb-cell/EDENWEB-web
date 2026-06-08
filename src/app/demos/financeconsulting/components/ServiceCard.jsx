import { Card, CardBody, CardFooter, CardHeader } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
const ServiceCard = ({
  service
}) => {
  return <Card className="border p-4">
      <CardHeader className="bg-transparent p-0 pb-4">
        <figure className="text-primary">{service.icon}</figure>
      </CardHeader>

      <CardBody className="p-0">
        <h5>{service.title}</h5>

        <ul className="list-group list-group-borderless mb-5">
          {service.features.map((feature, idx) => {
          const Icon = feature.icon;
          return <li className="list-group-item pb-0 d-flex mb-0 icons-center" key={idx}>
                <Icon className="me-2" />
                {feature.title}
              </li>;
        })}
        </ul>
      </CardBody>

      <CardFooter className="bg-transparent p-0">
        <Link className="icon-link icon-link-hover stretched-link" href="">
          Know more
          <BsArrowRight className="bi" />
        </Link>
      </CardFooter>
    </Card>;
};
export default ServiceCard;