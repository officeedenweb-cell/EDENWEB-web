import { Card, CardBody } from 'react-bootstrap';
import { BsArrowUpRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
const ProjectCard = ({
  project
}) => {
  return <Card className="bg-light p-3 p-sm-4 card-img-scale overflow-hidden">
      <div className="card-img-scale-wrapper rounded-3">
        <Image src={project.image} className="img-scale" alt="portfolio-img" />
      </div>
      <CardBody className="d-flex justify-content-between align-items-center px-0 pb-0">
        <div className="me-3">
          <h5 className="mb-0">
            <Link href={project.url} className="heading-color stretched-link">
              {project.name}
            </Link>
          </h5>
          <small>{project.category}</small>
        </div>
        <Link href={project.url} className="btn btn-round btn-dark flex-shrink-0 flex-centered">
          <BsArrowUpRight />
        </Link>
      </CardBody>
    </Card>;
};
export default ProjectCard;